
var g_arrFeatures = [];


function other_settings()
{
	var c = getSettingsInProfile();
	if (!c) return;

	var d = '\
	<div style="color:#aaa;">\
		Kyberia v3.1 installed!<br>\
		<a href="#" onclick="$(\'#kybv31\').toggle()">show v31 settings</a>\
		<div id="kybv31"></div>
	</div>';
	c.append(d);

	generateSettingsInto('#kybv31');
}

String.prototype.match1 = function(regex)
{
	var m = this.match(regex);
	if (!m || m.length < 2)
		return;

	return m[1];
}

function generateSettingsInto(elSel)
{
	var html = '';

	var sectionLast = '';
	for (var i=0; i < g_arrFeatures; i++)
	{
		var f = g_arrFeatures[i];
		var n = f.name;
		var section = n.match1(/^[A-z]+/);
		if (!section)
		f.name

		<div class="section">
			<input type="checkbox" id="opt_">
		</div>
	}

	$(elSel).html(html);
}

function getSettingsInMyProfile()
{
	if (!inMyProfileSettings())
		return;

	var c = $('#configure tr').eq(0);
	if (!c.length) return;
	return c;
}

function getMyId()
{
	// vytiahnut z headera, v ktorom by mala byt pouzita templata 'configure'
	var href = $('a[href$="1961033"]').not('[href^="/id/19"]').eq(0).attr('href');
	var id = href.match(/\/([0-9]+)\/[0-9]+$/)[1];
	return id;
}

function inMyProfile()
{
	return (window.location.pathname == '/id/'+getMyId());
}
function inMyProfileSettings()
{
	return (window.location.pathname == '/id/'+getMyId()+'/1961033');
}

function registerFeature(name, fn)
{
	var f = {name: name, fn: fn};
	g_arrFeatures.push( f );
}

function runFeature(name)
{
	if (isFeatureAvailable
}

function getFeature(name)
{
	var arr = g_arrFeatures;
	for (var i=0; i < arr.length; i++)
	{
		var a = arr[i];
		if (a.name == name)
			return a;
	}
}

function isFeatureEnabled(name)
{
	// load from localStorage, possibly store into own settings node

	var arr = getEnabledFeatures;
	for (var i=0; i < arr.length; i++)
	{
		if (arr[i] == name)
			return true;
	}
}

function getEnabledFeaturesNames()
{
	// for testing, enable only one feature
	return ['avatars_stop_animation'];

	return [
		'avatars_desocializer',
		'avatars_hide_all',
		'avatars_stop_animation',

		'bookmarks_fix_alphabet',

		'buttons_ajaxify',
		'buttons_delete',

		'edit_allow_tabs',
		'edit_preserve_indent',

		'nodes_hide_moods',
	];
}

function getEnabledFeatures()
{
	var arr = [];
	var arrNames = getEnabledFeaturesNames();
	for (var i=0; i < arrNames.length; i++)
	{
		var fName = arrNames[i];
		var feat = getFeature( fName );

		arr.push(feat);
	}

	return arr;
}
