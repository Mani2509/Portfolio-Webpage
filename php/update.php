<?php
    include 'connection.php';
    $id = $_GET['updateid'];
	$sql = "select * from empdetails where id = $id";
	$result = mysqli_query($mysql_conn, $sql);
	$row = mysqli_fetch_assoc($result);
	$name = $row['name'];
	$dept = $row['department'];
	$advamount = $row['advance amount'];
	$interest = $row['interest'];
	$name = $row['name'];

    if(isset($_POST['update'])){
        $emp_name = $_POST['name'];
        $emp_no = $_POST['no'];
        $emp_dept = $_POST['dept'];
        $emp_advance = $_POST['advance'];
        $emp_interest = $_POST['interest'];
        $sql = "update empdetails set id = $id, `name` = '$emp_name', `department` = '$emp_dept', `advance amount` = $emp_advance, `interest` = $emp_interest where id = $id";
        $statement = mysqli_query($mysql_conn, $sql);
        if($statement){
			echo '<script>
            alert("updated Successfully");
               window.location.href = "index.php";
          </script>';        }
    }
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
				<form action="login.php" method="post">
					<p class="text-center display-4">Fill the Details</p>
					<div class="form-group ">
						<label for="name">Name:</label>
						<input type="text" class="form-control" name="name" placeholder="Enter your name" value='<?php echo $name; ?>'>
					</div>
					<div class="form-group ">
						<label for="no">Number:</label>
						<input type="text" class="form-control" name="no" placeholder="Enter your number"value="<?php echo $id; ?>">
					</div>
					<div class="form-group ">
						<label for="dept">Department:</label>
						<input type="text" class="form-control" name="dept" placeholder="Enter your department" value="<?php echo $dept; ?>">
					</div>
					<div class="form-group ">
						<label for="advance">Advance:</label>
						<input type="text" class="form-control" name="advance" placeholder="Enter advance amount" value="<?php echo $advamount; ?>">
					</div>
					<div class="form-group ">
						<label for="interest">Interest:</label>
						<input type="text" class="form-control" name="interest" placeholder="Enter interest" value="<?php echo $interest; ?>">
					</div>
					<div class="text-center">
						<button type="submit"name="update" class="btn btn-success">Update</button>
						<button type="reset" class="btn btn-warning text-center">Clear</button>
					</div>
				</form>
     
       </div>
	</body>
</html>
