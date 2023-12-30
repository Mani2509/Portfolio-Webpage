<?php
    include 'connection.php';
    if(isset($_GET['deleteid'])){
        $id = $_GET['deleteid'];

        $sql = "delete from empdetails where id=$id";
        $result = mysqli_query($mysql_conn, $sql);
        if($result){
            echo '<script>
            alert("Deleted Successfully");
               window.location.href = "login.php";
          </script>';
        }
    }
?>
