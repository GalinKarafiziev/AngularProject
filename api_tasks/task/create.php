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
include_once '../object/task.php';
 
$database = new Database();
$db = $database->getConnection();
 
$task = new Task($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set employee property values
$task->task = $data->task;
$task->employee = $data->employee;
$task->department = $data->department; 
// create the employee
if($task->create()){
    echo '{';
        echo '"message": "Task was added."';
    echo '}';
}
 
// if unable to create the employee, tell the user
else{
    echo '{';
        echo '"message": "Unable to assign a task."';
    echo '}';
}
?>