<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate product object
include_once '../object/department.php';

$database = new Database();
$db = $database->getConnection();

$department = new Department($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set department property values
$department->name = $data->name;
$department->location = $data->location;

// create the department
if($department->create()){
    echo '{';
        echo '"message": "department was created."';
    echo '}';
}

// if unable to create the department, tell the user
else{

    echo '{';
        echo '"message": "Unable to create department.  "';
    echo '}';
}
?>
