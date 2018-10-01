<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../object/employee.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$employee = new Employee($db);
 
// get id of product to be edited
$data = json_decode(file_get_contents("php://input"));
 
// set ID property of product to be edited
$employee->id = $data->id;
 
// set product property values
$employee->firstname = $data->firstname;
$employee->lastname = $data->lastname;
$employee->age = $data->age;
$employee->gender = $data->gender;
$employee->department = $data->department;
 
// update the employee
if($product->update()){
    echo '{';
        echo '"message": "Employee was updated."';
    echo '}';
}
 
// if unable to update the employee, tell the user
else{
    echo '{';
        echo '"message": "Unable to update employee."';
    echo '}';
}
?>