<?php

function pre_r($expression, $return = false)
{
	if ($return)
	{
	  if (is_string($expression)) return '<pre>' . print_r(str_replace(array('<','>'), array('&lt;','&gt;'), $expression), true) . '</pre>';
		return '<pre>' . print_r($expression, true) . '</pre>';
	}
	else
	{
		echo '<pre>';
		if (is_string($expression)) print_r(str_replace(array('<','>'), array('&lt;','&gt;'), $expression), false);
		else print_r($expression, false);
		echo '</pre>';
	}
}


function sanitize($string)
{
	return str_replace(array('&','<','>','"',"'"), array('&amp;','&lt;','&gt;','&quot;','&#39;'), $string);
}


/*
if (!isset($_SERVER['PHP_AUTH_USER']))
{
	header('WWW-Authenticate: Basic realm="nothing to see here"');
	header('HTTP/1.0 401 Unauthorized');
	echo 'hmm';
	unset($_SERVER['PHP_AUTH_USER']);
	exit;
}
else
{
	if ($_SERVER['PHP_AUTH_USER'] != 'psycho' || $_SERVER['PHP_AUTH_PW'] != '________YOU MIGHT WANT TO CHANGE THIS ;)_______')
	{
	  unset($_SERVER['PHP_AUTH_USER']); //toto bohvie preco nejde, ale sak neni to nejaky big deal
	  unset($_SERVER['PHP_AUTH_PW']);
	  die ("brm brm");
	}
}
*/

function content()
{
	echo '<h1>eval</h1><form action="" method="post">';
	echo '<div id="nums"></div>';
	echo '<textarea name="code" style="width: 95%; height: 300px;">'.$_POST['code'].'</textarea>';
	echo '<br><br><input type="submit" class="cool_orange"> <input type="checkbox" name="noheader"> no header</form>'."\n";
	if ($_POST['code']) echo "<hr>\n" . eval ($_POST['code']);
}


if ($_POST['noheader']) die (eval ($_POST['code']));

?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="autoresize.jquery.js"></script>
	<title>eval</title>
	<style type="text/css">
		body { font-family: 'Trebuchet MS'; }
		#nums { color: #aaa; margin-top: 3px; width: 30px; }
		#nums .error { background: #f00; color: #000; font-weight: bold; }

		#nums, textarea { float: left; font-family: monospace; font-size: 12px; }

		textarea {
			white-space: pre-wrap;
			-moz-tab-size:	4;
			-o-tab-size:	4;
			tab-size:		4;
		}
	</style>
	<script>
	$(function()
	{
		allowTabs();
		$('textarea').autoResize( {
			min: 350,
			callback: function(elem) {
				var nums = '';
				$.each( elem.val().split('\n'), function(i, e) {
					var n = i+1;
					nums += '<div class="line_'+n+'">'+n+'</div>';
				});
				$('#nums').html(nums);
			}
		} );

		hilightErrors();
	});

	function hilightErrors()
	{
		$('.xdebug-error i').each( function(i, e)
		{
			e=$(e);
			var num = parseInt( e.text() );
			$('#nums .line_'+num).addClass('error');
		});
	}

function allowTabs(selector)
{
	if (!selector)
		selector = 'textarea';

	$(selector).live('keydown', function (e)
	{
		if (e.keyCode != 9)
			return;

		var myValue = "\t";
		var startPos = this.selectionStart;
		var endPos = this.selectionEnd;
		var scrollTop = this.scrollTop;

		var start = this.value.substring(0, startPos);
		var end = this.value.substring(endPos,this.value.length);
		this.value = start + myValue + end

		this.focus();
		this.selectionStart = startPos + myValue.length;
		this.selectionEnd = startPos + myValue.length;
		this.scrollTop = scrollTop;

		e.preventDefault();
	});
}

	</script>
	</head>
	<body>
		<?php content(); ?>
	</body>
</html>























