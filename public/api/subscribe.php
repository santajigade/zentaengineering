<?php
// Newsletter signup: stores emails in a CSV OUTSIDE the web root (not downloadable from the site).
// File: one level above public_html, e.g. domains/zentaengineering.com/newsletter-subscribers.csv
// Download it from Hostinger File Manager. Later this can be replaced by Brevo.
header('Content-Type: application/json');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"ok":false}'; exit; }
$email = strtolower(trim((string)($_POST['email'] ?? '')));
$page = substr(preg_replace('/[^\w\/\-.]/', '', (string)($_POST['page'] ?? '')), 0, 200);
$form = substr(preg_replace('/[^\w-]/', '', (string)($_POST['form'] ?? '')), 0, 20);
if (!empty($_POST['website'])) { echo '{"ok":true}'; exit; } // honeypot: bots fill hidden field
if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo '{"ok":false,"error":"invalid"}'; exit; }
$file = dirname(__DIR__, 2) . '/newsletter-subscribers.csv';
$fh = @fopen($file, 'c+');
if (!$fh) { http_response_code(500); echo '{"ok":false,"error":"storage"}'; exit; }
flock($fh, LOCK_EX);
$exists = false;
while (($row = fgetcsv($fh)) !== false) { if (isset($row[1]) && $row[1] === $email) { $exists = true; break; } }
if (!$exists) {
  fseek($fh, 0, SEEK_END);
  if (ftell($fh) === 0) fputcsv($fh, ['date_utc', 'email', 'page', 'form']);
  fputcsv($fh, [gmdate('Y-m-d H:i:s'), $email, $page, $form]);
}
flock($fh, LOCK_UN); fclose($fh);
echo '{"ok":true}';
