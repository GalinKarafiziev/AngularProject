<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../object/employee.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$employee = new Employee($db);
 
// set ID property of product to be edited
$employee->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of product to be edited
$employee->readOne();
 
// create array
$employee_arr = array(
    "id" =>  $employee->id,
    "firstname" => $employee->firstname,
    "lastname" => $employee->lastname,
    "age" => $employee->age,
    "gender" => $employee->gender,
    "department" => $employee->department
 
);
 
// make it json format
print_r(json_encode($employee_arr));
?>