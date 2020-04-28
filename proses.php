<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,POST,OPTIONS");
echo "Simulasi kirim data form<hr>";
print_r($_POST);
