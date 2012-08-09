// ==UserScript==
// @name           Kyberia v3.1
// @include        http://kyberia.sk*
// @include        https://kyberia.sk*
// @match          http://kyberia.sk/*
// @match          https://kyberia.sk/*
// ==/UserScript==

function loadJS(src, fn)
{
	var x=document.createElement('script');
	x.type='text/javascript';
	x.src=src;
	if (fn) { x.onreadystate=fn; x.onload=fn; }
	document.head.appendChild( x );
};

loadJS('http://l/brmstuff/kyberia_v31/require.js', requireReady );

function requireReady()
{
	var bu = 'http://l/brmstuff/kyberia_v31/';
	require([
		bu+'jquery.js',
		bu+'features/other-settings.js',		// registerFeature IS HERE
		bu+'features/avatars-desocializer.js',
		bu+'features/avatars-hide_all.js',
		bu+'features/avatars-stop_animation.js',
		bu+'features/edit-allow_tabs.js',
	], ready);
}

function ready()
{
	var arr = getEnabledFeatures();

	var sumExecTime = 0;
	for (var i=0; i < arr.length; i++)
	{
		var a = arr[i];
		console.log('running: '+a.name);
		var tStart = time();

		a.fn();		// RUN FEATURE

		var tDiff = time() - tStart
		sumExecTime += tDiff;
	}

	console.log('runned '+arr.length+' features in '+sumExecTime.toFixed(2)+'ms');
}

