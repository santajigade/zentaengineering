<?php
// Article view counter. Counts are stored in a JSON file OUTSIDE the web root.
// POST p=/discipline/slug/  -> adds one view.  GET ?p=/a/b/,/c/d/  -> {"/a/b/":12,...}
header('Content-Type: application/json');
header('Cache-Control: no-store');
$file = dirname(__DIR__, 2) . '/article-views.json';
$ok = fn($p) => is_string($p) && preg_match('#^/[a-z0-9-]+/[a-z0-9-]+/$#', $p);
$fh = @fopen($file, 'c+');
if (!$fh) { http_response_code(500); echo '{}'; exit; }
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $p = (string)($_POST['p'] ?? '');
  $ua = strtolower($_SERVER['HTTP_USER_AGENT'] ?? '');
  if (!$ok($p) || $ua === '' || preg_match('/bot|crawl|spider|slurp|headless|lighthouse|python|curl|wget/', $ua)) { echo '{}'; exit; }
  flock($fh, LOCK_EX);
  $data = json_decode(stream_get_contents($fh) ?: '{}', true) ?: [];
  $data[$p] = ($data[$p] ?? 0) + 1;
  ftruncate($fh, 0); rewind($fh); fwrite($fh, json_encode($data));
  flock($fh, LOCK_UN); fclose($fh);
  // Daily counts for "Popular this week" (last 8 days kept)
  $df = dirname(__DIR__, 2) . '/article-views-daily.json';
  if ($dh = @fopen($df, 'c+')) {
    flock($dh, LOCK_EX);
    $d = json_decode(stream_get_contents($dh) ?: '{}', true) ?: [];
    $day = gmdate('Y-m-d'); $d[$day][$p] = ($d[$day][$p] ?? 0) + 1;
    ksort($d); $d = array_slice($d, -8, null, true);
    ftruncate($dh, 0); rewind($dh); fwrite($dh, json_encode($d));
    flock($dh, LOCK_UN); fclose($dh);
  }
  echo json_encode([$p => $data[$p]]); exit;
}
if (isset($_GET['top'])) {
  // ?top=1 -> top 5 paths by views in the last 7 days; falls back to all-time totals
  fclose($fh);
  $d = json_decode(@file_get_contents(dirname(__DIR__, 2) . '/article-views-daily.json') ?: '{}', true) ?: [];
  $sum = []; $since = gmdate('Y-m-d', time() - 6 * 86400);
  foreach ($d as $day => $rows) if ($day >= $since) foreach ($rows as $p => $n) $sum[$p] = ($sum[$p] ?? 0) + $n;
  if (count($sum) < 5) $sum = json_decode(@file_get_contents($file) ?: '{}', true) ?: [];
  arsort($sum); echo json_encode(array_slice($sum, 0, 8, true)); exit;
}
flock($fh, LOCK_SH);
$data = json_decode(stream_get_contents($fh) ?: '{}', true) ?: [];
flock($fh, LOCK_UN); fclose($fh);
$out = [];
foreach (array_slice(explode(',', (string)($_GET['p'] ?? '')), 0, 50) as $p) if ($ok($p)) $out[$p] = $data[$p] ?? 0;
echo json_encode($out);
