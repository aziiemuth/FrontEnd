<?php
$judul = $_POST['title'];
$isi = $_POST['body'];

$json = ['judul' => $judul, 'isi' => $isi];
echo json_encode($json);
?>
