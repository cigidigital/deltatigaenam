<?php
// MIME type fix for JavaScript files
// Place this in your public_html directory and access JS files through it

$file = $_GET['file'] ?? '';
$ext = pathinfo($file, PATHINFO_EXTENSION);

// Security: only allow specific file types
$allowed_extensions = ['js', 'css', 'svg', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'woff', 'woff2', 'ttf', 'otf', 'json'];

if (!in_array(strtolower($ext), $allowed_extensions)) {
    http_response_code(403);
    exit('Access denied');
}

$file_path = __DIR__ . '/' . $file;

if (!file_exists($file_path)) {
    http_response_code(404);
    exit('File not found');
}

// Set correct MIME types
$mime_types = [
    'js' => 'application/javascript',
    'css' => 'text/css',
    'svg' => 'image/svg+xml',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'gif' => 'image/gif',
    'webp' => 'image/webp',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2',
    'ttf' => 'font/ttf',
    'otf' => 'font/otf',
    'json' => 'application/json'
];

$mime_type = $mime_types[strtolower($ext)] ?? 'application/octet-stream';

// Set headers
header('Content-Type: ' . $mime_type);
header('Content-Length: ' . filesize($file_path));
header('Cache-Control: public, max-age=31536000');

// Output file
readfile($file_path);
?>
