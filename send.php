<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $pesan = $_POST['pesan'];

    // Email tujuanmu
    $to = "zidankun2020@gmail.com"; 
    $subject = "Pesan baru dari $username";
    $body = "Nama: $username\nEmail: $email\nPesan:\n$pesan";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Gagal mengirim pesan.";
    }
}
?>
