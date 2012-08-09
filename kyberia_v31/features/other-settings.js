
var g_arrFeatures = [];

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
