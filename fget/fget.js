function get_json(url, fn)
{
	var page;
	var q = $.ajax({
		url:		url,
		dataType:	'json',
		success:	function(x) { fn(x.page); }
	});
} 
function fget(url, fn)
{
	var my_url = "http://p.brm.sk/fget/fget.php?cb=?&url=" + escape(url);

	get_json(my_url, fn);
}
