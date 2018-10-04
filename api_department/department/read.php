<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../object/department.php';

// instantiate database and department object
$database = new Database();
$db = $database->getConnection();

// initialize object
$department = new Department($db);

// query products
$stmt = $department->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // department array
    $departments_arr=array();
    //$departments_arr["records"]=array();

    // retrieve our table contents

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $department_item=array(
            "id" => intval($id),
            "name" => $name,
            "location" => $location

        );

        array_push($departments_arr, $department_item);
    }

    echo json_encode($departments_arr);
}

else{
    echo json_encode(
        array("message" => "No departments found.")
    );
}
?>
