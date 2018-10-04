<?php
class Department{

    // database connection and table name
    private $conn;
    private $table_name = "departments";

    // object properties
    public $id;
    public $name;
    public $location;



    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
// read department
function read(){

    // select all query
    $query = "SELECT
                 d.id, d.name, d.location
            FROM
                " . $this->table_name . " d
            ORDER BY
                d.id";

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
                d.id, d.name, d.location
            FROM
                " . $this->table_name . " d
            WHERE
                d.id = ?
            LIMIT
                0,1";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // bind id of department to be updated
    $stmt->bindParam(1, $this->id);

    // execute query
    $stmt->execute();

    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // set values to object properties
    $this->name = $row['name'];
    $this->location = $row['location'];

}
function create(){

    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                name=:name,location=:location";

    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->location=htmlspecialchars(strip_tags($this->location));



    // bind values
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":location", $this->location);



    // execute query
    if($stmt->execute()){
        return true;
    }

    return false;

}
// delete the department
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
// search department
function search($keywords){

    // select all query
    $query = "SELECT
                 d.id, d.name, d.location
            FROM
                " . $this->table_name . " d
            WHERE
                d.name LIKE ?
            ORDER BY
                d.id ";

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
// update the department
function update(){

    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                name = :name,
                location = :location
            WHERE
                id = :id";

    // prepare query statement
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->location=htmlspecialchars(strip_tags($this->location));


    // bind new values
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':location', $this->location);


    // execute the query
    if($stmt->execute()){
        return true;
    }

    return false;
}
}
