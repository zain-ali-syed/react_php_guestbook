<?php
//PLEASE NOTE: NO SECURITY MESAURES HAVE BEEN IMPLEMENTED IN THIS PHP FILE. RECOMMEND TO IMPLEMENT BEFORE PUTTING THIS TO PRODUCTION.
//CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

//USE THIS TO CREATE YOUR mySQL TABLE
/*
CREATE TABLE `guestbook_tbl` (
	`ID` int(11) NOT NULL auto_increment,
	`Name` varchar(255) NOT NULL default '',
	`Email` varchar(255) NOT NULL default '',
	`Message` text,
	`Date` date default NULL,
	PRIMARY KEY  (`ID`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1323 DEFAULT CHARSET=latin1;
*/
  

//MYSQL details
$host = "your_db_host";
$username = "your_db_username";
$password = "your_db_password";
$db = "your_db_name";


$json = trim(file_get_contents('php://input'));
$post = json_decode($json);

//retrieve POST values (if any)
if(isset($post->name)){
    $name = $post->name;
    $email = $post->email;
    $message = $post->message;
	$date = date("Y-m-d");
}


//create connection to the database
$conn = mysql_connect($host, $username, $password) or die("could not connect to server");
$select_db = mysql_select_db($db,$conn);

if(isset($name)){
//insert entry into guest book
$insertSQL = "INSERT INTO guestbook_tbl (Name, Email, Message, Date) VALUES ('$name', '$email', '$message', '$date')";
$rs = mysql_query($insertSQL,$conn);

	if($rs){
	  //insertion was successful now lets send back to the client all entries in the database in JSON Format
	  retrieveData();
	}else{
	  echo '&entryadded=FAIL&';
	  exit();
	}
	
}else{
	retrieveData();
}


function retrieveData(){
    global $conn;
	
	 //get entries from guestbook
	    $selectSQL = "SELECT * FROM guestbook_tbl ORDER BY ID DESC LIMIT 15";
	    $rs = mysql_query($selectSQL,$conn);
	
   //Initialize array variable
   $dbdata = array();

	
	while($row = mysql_fetch_assoc($rs)){
		$dbdata[]=$row;
	}
	
	//make all keys lowercase
	array_change_key_case($dbdata, CASE_LOWER);

	//now lets encode to json
    echo json_encode($dbdata);
		
		
	//close the mySQL connection
	mysql_close($conn);
}
?>


