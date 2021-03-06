<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 
// include database and object file
include_once '../config/database.php';
include_once '../object/task.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$task = new Task($db);
 
$task->id = isset($_GET['id']) ? $_GET['id'] : die();
// get product id
 
// delete the product
if($task->delete()){
    echo '{';
        echo '"message": "Task was deleted."';
    echo '}';
}
 
// if unable to delete the product
else{
    echo '{';
        echo '"message": "Unable to delete task."';
    echo '}';
}
?>