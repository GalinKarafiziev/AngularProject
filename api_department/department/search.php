<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../object/department.php';

// instantiate database and employee object
$database = new Database();
$db = $database->getConnection();

// initialize object
$department = new department($db);

// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";

// query departments
$stmt = $department->search($keywords);
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // employees array
    $departments_arr=array();
    //$departments_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $department_item=array(
            "id" => $id,
            "name" => $name,
            "location" => $location

        );

        array_push($departments_arr, $department_item);
    }

    echo json_encode($departments_arr);
}

else{
    echo json_encode(
        array("message" => "No department found.")
    );
}
?>
