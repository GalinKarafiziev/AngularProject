<?php
class Task{
 
    // database connection and table name
    private $conn;
    private $table_name = "tasks";
 
    // object properties
    public $id;
    public $task;
    public $employee;
    public $department;
  
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
// read employee
function read(){
 
    // select all query
    $query = "SELECT
                 t.id, t.task, t.employee, t.department
            FROM
                " . $this->table_name . " t
            ORDER BY
                t.id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}

// read one
function readOne(){
 
    // query to read single record
    $query = "SELECT
                 t.id, t.task, t.employee, t.department
            FROM
                " . $this->table_name . " t
            WHERE
                t.id = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of employee to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->task = $row['task'];
    $this->employee = $row['employee'];
    $this->department = $row['department'];
}
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                task=:task, employee=:employee, department=:department";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->task=htmlspecialchars(strip_tags($this->task));
    $this->employee=htmlspecialchars(strip_tags($this->employee));
    $this->department=htmlspecialchars(strip_tags($this->department));
   
 
    // bind values
    $stmt->bindParam(":task", $this->task);
    $stmt->bindParam(":employee", $this->employee);
    $stmt->bindParam(":department", $this->department);
 
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
// delete the employee
function delete(){
 
    // delete query
    $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
 
    // bind id of record to delete
    $stmt->bindParam(1, $this->id);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
// search employee
function search($keywords){
 
    // select all query
    $query = "SELECT
                 t.id, t.task, t.employee, t.department
            FROM
                " . $this->table_name . " t
            WHERE
                t.task LIKE ?
            ORDER BY
                t.id ";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    $keywords = "%{$keywords}%";
 
    // bind
    $stmt->bindParam(1, $keywords);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// update the employee
function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                task = :task,
                employee = :employee,
                department = :department
            WHERE
                id = :id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->task=htmlspecialchars(strip_tags($this->task));
    $this->employee=htmlspecialchars(strip_tags($this->employee));
    $this->department=htmlspecialchars(strip_tags($this->department));
 
    // bind new values
    $stmt->bindParam(':task', $this->task);
    $stmt->bindParam(':employee', $this->employee);
    $stmt->bindParam(':department', $this->department);
 
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
}