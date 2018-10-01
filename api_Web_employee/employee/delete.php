<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 
// include database and object file
include_once '../config/database.php';
include_once '../object/employee.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare employee object
$employee = new Employee($db);
 
// get employee id 
// set employee id to be deleted
$employee->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// delete the employee
if($employee->delete()){
    echo '{';
        echo '"message": "Employee was deleted."';
    echo '}';
}
 
// if unable to delete the employee
else{
    echo '{';
        echo '"message": "Unable to delete object."';
    echo '}';
}

?>