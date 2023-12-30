<?php
	include 'connection.php';
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>Your Website</title>
	<style>
		.welocomePage{
			align-items: center;
		}
		.page {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	</style>
</head>
<body>
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		<a class="navbar-brand" href="#">Logo</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Service</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact Us</a>
				</li>
			</ul>
		</div>
	</nav>
	<div id="demo" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
			<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
			<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
			<button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
			<button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="welcomeslideimg.jpg" alt="img1" class="d-block w-100" height="400px">
			</div>
			<div class="carousel-item">
				<img src="projectslide.jpg" alt="img2" class="d-block w-100" height="400px">
			</div>
			<div class="carousel-item">
				<img src="cantaslide.jpg" alt="img3" class="d-block w-100" height="400px">
			</div>
			<div class="carousel-item">
				<img src="proslide.jpg" alt="img4" class="d-block w-100" height="400px">
			</div>
			<div class="carousel-item">
				<img src="contactslide.jpg" alt="img5" class="d-block w-100" height="400px">
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
		<span class="carousel-control-prev-icon"></span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
		<span class="carousel-control-next-icon"></span>
		</button>
	</div>
    <div class="container mt-5 mb-5 d-flex justify-content-center">

        <?php
            include 'connection.php';
            if(isset($_POST['submit'])){
                $emp_name = $_POST['name'];
                $emp_no = $_POST['no'];
                $emp_dept = $_POST['dept'];
                $emp_advance = $_POST['advance'];
                $emp_interest = $_POST['interest'];
                $sql = "INSERT INTO empdetails VALUES ('$emp_name','$emp_no','$emp_dept','$emp_advance','$emp_interest')";
                $statement = mysqli_query($mysql_conn, $sql);
                if($statement){
                    echo '<script>alert("Sucessfully registered")</script>';
                    // header('location:index.php');
                }
				$sql = "SELECT * FROM empdetails where id=$emp_no";
				$result = mysqli_query($mysql_conn,$sql);
				if ($result) {
					$row = mysqli_fetch_assoc($result);
                        $displayId = $row['id'];
                        $displayName = $row['name'];
                        $displayDept = $row['department'];
                        $displayAdv = $row['advance amount'];
                        $displayInterest = $row['interest'];
                        $interestcalculate = ($displayInterest / 100) * $displayAdv;
                        $totalamount = $displayAdv + $interestcalculate;

                    echo '<table class="table ">
                            <tr>
                                <th colspan="2" class="text-center">Welcome '.$displayName.'['.$displayId.']</th>
                            </tr>
                            <tr>
                                <th>Department Name</th>
                                <td>'.$displayDept.'</td>
                            </tr>
                            <tr>
                                <th>Advance Amount</th>
                                <td>'.$displayAdv.'</td>
                            </tr>
                            <tr>
                                <th>Interest '.$displayInterest.'%</th>
                                <td>'.$interestcalculate.'</td>
                            </tr>
                            <tr>
                                <th>Total Amount</th>
                                <td>'.$totalamount.'</td>
                            </tr>  
                            <tr>
                                <td><button type="submit" class="btn btn-primary"><a href="update.php ? updateid='.$displayId.'" class="text-light">Update</a></button> 
                                <button class="btn btn-danger"><a href="delete.php ? deleteid='.$displayId.'" class="text-light">Delete</a></button>
                                <button class="btn btn-warning my-5" ><a href="login.php" class="text-light">Back</button>
                                </td>

                            </tr>  
                        <table>
                        
                    ';
				}
                    
			}    
            
        ?>
                        
     
    </div>
	</body>
</html>
