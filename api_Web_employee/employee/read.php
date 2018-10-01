<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../object/employee.php';
 
// instantiate database and employee object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$employee = new Employee($db);
 
// query products
$stmt = $employee->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // employees array
    $employees_arr=array();
    //$employees_arr["records"]=array();
 
    // retrieve our table contents

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $employee_item=array(
            "id" => intval($id),
            "firstname" => $firstname,
            "lastname" => $lastname,
            "age" => intval($age),
            "gender" => $gender,
            "department" => $department
        );
 
        array_push($employees_arr, $employee_item);
    }
 
    echo json_encode($employees_arr);
}
 
else{
    echo json_encode(
        array("message" => "No employees found.")
    );
}
?>