<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../object/task.php';
 
// instantiate database and employee object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$task = new Task($db);
 
// query products
$stmt = $task->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // employees array
    $task_arr=array();
    //$employees_arr["records"]=array();
 
    // retrieve our table contents

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $task_item=array(
            "id" => intval($id),
            "task" => $task,
            "employee" => $employee,
            "department" =>$department
        );
 
        array_push($task_arr, $task_item);
    }
 
    echo json_encode($task_arr);
}
 
else{
    echo json_encode(
        array("message" => "No tasks found.")
    );
}
?>