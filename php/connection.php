<?php

    $hostname = 'localhost';
    $username = 'root';
    $password = '';
    $databasename = 'userdata';

    $mysql_conn = mysqli_connect($hostname, $username, $password);
    if(!$mysql_conn){
        die(mysqli_error($mysql_conn));
    } 
    $sqlCreateDatabase = "create database if not exists $databasename";
    $mysql_conn -> query($sqlCreateDatabase);
    $mysql_conn ->select_db($databasename);

    $sqlCreateTable = "create table if not exists empdetails(
                        id int not null primary key,
                        name varchar(50) not null,
                        department varchar(50),
                        advance amount int,
                        interest int)";
    $mysql_conn -> query($sqlCreateTable);



?>
