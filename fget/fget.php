<?php
	if (isset($_GET['url']))
	{
		//header('Content-type: application/json');
		header('Content-Type: text/javascript; charset=UTF-8');

		$url = $_GET['url'];
		$data = file_get_contents($url);
		$data = utf8_encode($data);

		$arr = array ('page'=>$data, 'url'=>$url);

		$json = json_encode($arr);

		echo $_GET['cb'] . '(' . $json . ');';

		die();
	}

	header('Content-Type: text/html');
	//$currentUrl = 'http://'.$_SERVER["REQUEST_NAME"].$_SERVER["REQUEST_URI"];
?>

<!doctype html>
try this<br>
<a href="?url=http://google.com">?url=http://google.com</a>
<br>
<br>
or this<br>
<form action="fget.php">
	<input type="text" name="url" style="width: 300px" value="http://google.com">
	<br>
	<input type="submit"  value="fget">
</form>
