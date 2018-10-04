<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object file
include_once '../config/database.php';
include_once '../object/department.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare department object
$department = new Department($db);

// get department id
// set department id to be deleted
$department->id = isset($_GET['id']) ? $_GET['id'] : die();

// delete the department
if($department->delete()){
    echo '{';
        echo '"message": "Department was deleted."';
    echo '}';
}

// if unable to delete the department
else{
    echo '{';
        echo '"message": "Unable to delete object."';
    echo '}';
}

?>
