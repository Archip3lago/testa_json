<?php
define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_NAME", "stuffshizzle");
$dbh = new PDO('mysql:dbname=' . DB_NAME . ';host=' . DB_SERVER . ';charset=utf8', DB_USER, DB_PASSWORD);

$sql = "SELECT * FROM grejer WHERE 1";
    $stmt = $dbh->prepare($sql);
    $stmt->execute();
    $lista["saker"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($lista);
?>