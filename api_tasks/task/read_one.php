<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/task.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$task = new Task($db);
 
// set ID property of product to be edited
$task->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of product to be edited
$task->readOne();
 
// create array
$task_arr = array(
    "id" =>  $task->id,
    "task" => $task->task,
    "employee" => $task->employee,
    "department" => $task->department,
 
);
 
// make it json format
print_r(json_encode($task_arr));
?>