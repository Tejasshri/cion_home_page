<?php
$dbname = "cion_db";
$dbhost = "localhost:3306";
$dbpass = "0808@#Tejas";
$dbuser = "root";

// $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// if ($conn) {
//     $query = "Select * from faqs_table; ";

//     $data = $conn->query($query);

//     $json_data = json_encode($data);

//     header('Content-Type: application/json');

//     echo $json_data;
// }
$pdo = new PDO("mysql:host=localhost:3306;dbname=cion_db", $dbuser, $dbpass);
$query = `
    SELECT * FROM city_table INNER JOIN centers WHERE city_table.id = centers.city_id ORDER BY city_name ;
`; 
$stmt = $pdo->query("SELECT * FROM city_table INNER JOIN centers WHERE city_table.id = centers.city_id ORDER BY city_name ;");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$json_data = json_encode($rows);

header('Content-Type: application/json');

echo $json_data;

?>