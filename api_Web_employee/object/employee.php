<?php
class Employee{
 
    // database connection and table name
    private $conn;
    private $table_name = "employee";
 
    // object properties
    public $id;
    public $firstname;
    public $lastname;
    public $age;
    public $gender;
    public $department;
  
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
// read employee
function read(){
 
    // select all query
    $query = "SELECT
                 e.id, e.firstname, e.lastname, e.age, e.gender, e.department
            FROM
                " . $this->table_name . " e
            ORDER BY
                e.id";
 
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
                 e.id, e.firstname, e.lastname, e.age, e.gender, e.department
            FROM
                " . $this->table_name . " e
            WHERE
                e.id = ?
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
    $this->firstname = $row['firstname'];
    $this->lastname = $row['lastname'];
    $this->age = $row['age'];
    $this->department = $row['department'];
    $this->gender = $row['gender'];
}
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                firstname=:firstname,lastname=:lastname, age=:age, gender=:gender, department=:department";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->age=htmlspecialchars(strip_tags($this->age));
    $this->gender=htmlspecialchars(strip_tags($this->gender));
    $this->department=htmlspecialchars(strip_tags($this->department));
   
 
    // bind values
    $stmt->bindParam(":firstname", $this->firstname);
    $stmt->bindParam(":lastname", $this->lastname);
    $stmt->bindParam(":age", $this->age);
    $stmt->bindParam(":gender", $this->gender);
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
                 e.id, e.firstname, e.lastname, e.age, e.gender, e.department
            FROM
                " . $this->table_name . " e
            WHERE
                e.firstname LIKE ?
            ORDER BY
                e.id ";
 
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
                firstname = :firstname,
                lastname = :lastname,
                age = :age,
                gender = :gender,
                department = :department
            WHERE
                id = :id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->age=htmlspecialchars(strip_tags($this->age));
    $this->gender=htmlspecialchars(strip_tags($this->gender));
    $this->department=htmlspecialchars(strip_tags($this->department));
 
    // bind new values
    $stmt->bindParam(':firstname', $this->firstname);
    $stmt->bindParam(':lastname', $this->lastname);
    $stmt->bindParam(':age', $this->age);
    $stmt->bindParam(':gender', $this->gender);
    $stmt->bindParam(':department', $this->department);
 
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
}