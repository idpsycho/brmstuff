/*
4-5 izb, stare mesto, od najlacnejsich:
http://m2.zoznam.sk/prenajom_bratislava-stare-mesto_4-izbovy-byt,5-a-viac-izbovy-byt_1__od-najlacnejsich
3i
http://m2.zoznam.sk/prenajom_bratislava-stare-mesto_3-izbovy-byt_1__od-najlacnejsich
1i
http://m2.zoznam.sk/prenajom_bratislava-stare-mesto_1-izbovy-byt_1__od-najlacnejsich

*/

function addMap(id) {
	var x = $('.p :contains("Ulica: ") > b');
	if (!x.length) return;
	var street = $('.p :contains("Ulica: ") > b')[1].innerText;
	var LOC = street+",bratislava";
	var url = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=230x230&sensor=false&center="+ LOC +"&markers="+ LOC;
	var map = "<img id='"+ id +"' src='"+url+"'>";
	$($('.p :contains("Ulica: ") > b')[1]).append( $(map) );
	}
function addMapIfMissing() {
	if (! $('#brmMapa').length ) addMap('brmMapa');
}

function markNewAds()
{
	$('.list .ad').not('.bad').each(function()
	{
		var t = $(this);
		var id = t.attr('id');
		var b = LSarr_exists('seen ads', id);
		if (!b)
		{
			t.addClass('unseen');
			//t.find('td').css('background', 'none')
		}
		else
			t.removeClass('unseen');
	});
}

function keepUpdating()
{
	addMapIfMissing();
	
	markBadAds();	// also mark bad words..
	markNewAds();
	
	// fixni linky na obrazky
	$('.s-col.f-l a img').parent().attr('target', '_blank')
	
	addLoadMoreBtn();
	
	hilightEnergies();
	
	setTimeout(keepUpdating, 500);
}

function hilightEnergies()
{
	var e = $('#tabdetail');
	e.find('script, iframe').remove();
	e = $('#tabdetail > .s-col');

	if (!e || e.length != 2) return;
	hilightEnergiesPart( e[0] );
	hilightEnergiesPart( e[1] );
}

function hilightEnergiesPart(e)
{
	e=$(e);
	if (!e || !e.html()) return;
	if (e.hasClass('checked_for_energies')) return;
	e.addClass('checked_for_energies')

	var found = 0;
	var arrGood = ['vrátane energií', 'vratane energii', 'vrátane en', 'vratane en', 'vratane E',
					'aj s Energiou'];
	$.each(arrGood, function(i, s)
	{
		var o = e.html().contains(s)
		if (o)		
			hilight(o.start, o.end, '#1f1');
	});

	var arrBad = ['bez energií', 'bez energii', '+ energie', 'plus energie',
					'EUR energie', 'mes. energie', 'cena za energie'];
	$.each(arrBad, function(i, s)
	{
		var o = e.html().contains(s)
		if (o)		
			hilight(o.start, o.end, '#f11');
	});

	if (!found)
	{
		var arrNeut = ['energie', 'energ'];
		$.each(arrNeut, function(i, s)
		{
			var o = e.html().contains(s)
			if (o)		
				hilight(o.start, o.end, '#aaf');
		});
	}

	function hilight(from, to, clr)
	{
		found++;
		var h = e.html();

		console.log('FOUND: '+h.substring(from, to) + '\n NEAR:\n'+
				h.substring(from-30, to+30)+'\n\n');
		
		var s = h.substr(0, from);
		s += '<span style="background: '+clr+'">'+h.substring(from, to)+'</span>';
		s += h.substr(to);
		e.html( s );		
	}
}

function load(src, fn) {
	var x=document.createElement('script');
	x.type='text/javascript'
	x.src=src;
	if (fn) { x.onreadystate=fn; x.onload=fn; }
	document.head.appendChild( x )
}

function loadDefaultFilter()
{
	if (localStorage['bad words'])
		return;
	
	localStorage['bad words'] = '["partizánskej", "údolnej", "horský park", "čmeľovec", "kráľovské údolie", "búdkovej", "na hrebienku", "palisád", "révova", "martinengova", "vrchnej", "hradnon", "3,5 izbov", "na hrebienku", "hradnom", "javorinsk", "tichá", "vlckova", "oawihegoaiwehgoiahweg", "mozartova", "3,5 izb", "pod slavínom", "drotárska", "horskom", "3,5", "révová", "svetlej", "martinengov", "tichej", "senická", "slávičom", "svetlá", "na stráni", "pražskej", "drotársk", "bartók", "jelenia", "buková", "skalná", "hlboká", "leškova", "révovej", "skalnej", "zámockej", "leškovej", "slávič", "štefánikov", "Škovránč", "sládkovič", "krčméry", "úprkov", "fialkov", "r1194474", "jelenej", "r1200385", "žilinsk", "r1499522", "dgoashdgoiahsdg", "2,5", "2.5", "mozartov", "r2352", "floglov", "r1507397", "škovranč", "r1053478", "r1348043", "r1503199", "r1506529", "r1501665", "r1501188", "r1475089", "r1498417", "r1506625", "strakovej", "r1501258", "r1477713", "r1483859", "r1486934", "r1498199", "r1491041", "r1507692", "r1505650", "r1475446", "r1471261", "r1469475", "r1494916", "r1479595", "r1497810", "r1470191", "r1497586", "r1245517", "jozefsk", "r1304664", "r1424244", "r1458329", "r1501385", "r1437753", "r971671", "r1237155", "r1504477", "r1492704", "krcmeryho", "bukovej"]';
}

/////////////////////////////////////////////////
// DO STUFF
load('http://p.brm.sk/jquery.js', doStuff );
function doStuff()
{
	// fuck the fucking fuckers
	if(window.Prototype)
	{
		delete Object.prototype.toJSON;
		delete Array.prototype.toJSON;
		delete Hash.prototype.toJSON;
		delete String.prototype.toJSON;
	}

	loadDefaultFilter();

	$.addStyle = function(rule)
	{
		$('head').append('<style>'+ rule +'</style>');
	}

	setupInputKeys();
	$.addStyle('\
		.ad.bad			{ opacity: 0.2; display: none; }\
		x.ad.bad		{ border-right: 20px solid #fa0; }\
		#col3			{ overflow-y: scroll; height: 640px; }\
		.ad.unseen		{ border-left: 20px solid #0f0; backgroundx: #afa; }\
	');

	markBadAds();
	
	firstAd();
	addLoadMoreBtn();

	keepUpdating();
}
/////////////////////////////////////////////////

function urlQuery(url, fnd)
{
	var aj = $.ajax(url, {type: 'GET', async: false});
	var jq = $(aj.responseText);

	if (!fnd) return jq;
	
	return jq.find(fnd);
}

function addLoadMoreBtn()
{
	if ($('#loaded_count').length) return;
	
	var s = '<tbody><tr><td style="text-align: center; padding: 8px; background: #f88;" colspan="5">\
				load from next page (<span id="loaded_count"></span>)<br>\
				also:<br>\
				B/N - back/next<br>\
				X - filter out<br>\
				</td></tr></tbody>';
	$(s).click( appendAdsAndSwitchNextLink ).prependTo('.list');
}
function updateLoadedCount()
{
	var ok = $('.list .ad').not('.bad');
	var n = ok.length;
	var nAct = 0;
	for (var i=0; i < n; i++)
		if (ok.eq(i).hasClass('act')) break;
	nAct=i+1;
	$('#loaded_count').text( nAct+'/'+n );
	
}

function appendAdsAndSwitchNextLink()
{
	var loaded = urlQuery( nextPageUrl() );

	// add ads from next-page
	var list = $('.list');
	$('<tbody><tr><td style="background: #f88;" colspan="5">next page</td></tr></tbody>').appendTo(list);
	list.append( loaded.find('.list .ad') );
	
	// change link to the next-next-page
	var nextUrl = nextPageElem(loaded).attr('href');
	nextPageElem().attr('href', nextUrl );
}

function nextPageElem(e)
{
	if (!e) e = 'body';

	return $(e).find('.paging > a').last();
}

function nextPageUrl(e)
{
	return nextPageElem(e).attr('href');
}


String.prototype.contains = function(str, case_insensitive)
{
	if (typeof str == "object")	// regex
		return this.match(str);
	else
	{
		var a = this;
		var b = str;
		if (case_insensitive) {
			a=a.toLowerCase();
			b=b.toLowerCase();
		}
		
		var pos = a.indexOf(b);
		if (pos == -1) return false;

		var o = {};
		o.searched = str;
		o.start = this.indexOf( o.searched );
		o.len = o.searched.length;
		o.end = o.start + o.len;
		return o;
	}
}

String.prototype.containsAnyOf = function(arr, case_insensitive)
{
	for (var i=0; i < arr.length; i++)
	{
		var o;
		if ( o = this.contains(arr[i], case_insensitive) )
			return o;
	}
	return false;
}


function markBadAds()
{
	$('.list .ad').each(function()
	{
		var t = $(this);
		var id = t.attr('id');
		t.find('.t-c').text(id);
	});

	$('.list .ad').each(function()
	{
		var t = $(this);
		var s = t.text();
		var badWords = ( JSON.parse(localStorage['bad words']) );
		if (!badWords) badWords = [];

		if ( s.containsAnyOf(badWords, 'case ins..') )
		{
			if (!t.hasClass('bad'))
				t.addClass('bad');
		}
	})
	
	updateLoadedCount();
}

function addBadWord()
{
	var id = $('.list .ad.act').attr('id');
	var s = prompt("what's the bad word?", id);
	if (!s) return;
	
	var q = ( JSON.parse(localStorage['bad words'] || '[]' ));
	q.push(s);
	
	localStorage['bad words'] = JSON.stringify( q );
	markBadAds();
}
function setAsSeen()
{
	var id = $('.list .ad.act').attr('id');
	LSarr_add('seen ads', id);
}

function LSarr_add(ls_id, value)
{
	if (!localStorage[ls_id])
		localStorage[ls_id] = '[]';
		
	var arr = JSON.parse( localStorage[ls_id] );
	arr.push(value);
	localStorage[ls_id] = JSON.stringify(arr);
}
function LSarr_exists(ls_id, value)
{
	if (!localStorage[ls_id])
		localStorage[ls_id] = '[]';
		
	var arr = JSON.parse( localStorage[ls_id] );
	for (var i=0; i < arr.length; i++)
		if (arr[i] == value) return true;

	return false;
}

function setupInputKeys()
{

	$('body').keypress(function(e)	// also, press 'N' for next!
	{
		var keyN = 110;
		var keyB = 98;
		var keyX = 120;
		var keyS = 115;

		if (e.keyCode==keyS) // uz asi nic
		{
			return setAsSeen();
		}
		if (e.keyCode==keyX)
		{
			addBadWord();
			nextAd();
			return;
		}

		if (e.keyCode==keyN)
			return nextAd();

		if (e.keyCode==keyB)
			return prevAd();
	});
}
function scrollMe(e)
{
	if (!e) return;
	if (!e.position()) return;
	$('#col3').scrollTop( e.position().top );
}

function firstAd()
{
	console.log('clicking FIRST AD');
	var q = $('.list > .ad').not('.bad').first();
	selectAd(q);
}

function selectAd(q)	// must be "tbody.ad"
{
	setAsSeen(q);
	scrollMe(q);
	q.click();
}

function prevAd()
{
	var q = $('.list > .act');
	if (q.length)
	{
		console.log('clicking PREVIOUS AD');

		q = q.prev();
		while ((!q.hasClass('ad') || q.hasClass('bad')) && q.length)
			q = q.prev();

		if (q.length)
		{
			return selectAd(q);
		}
	}

	firstAd();
}

function nextAd()
{
	var q = $('.list .act');
	if (!q.length) {
		var nOk = $('.list .ad').not('.bad');
		if (nOk.length) {
			console.log('clicking FIRST AD');
			return firstAd();
		} // otherwise, click next_page
	}

	q = q.next();
	while ((!q.hasClass('ad') || q.hasClass('bad')) && q.length)
		q = q.next();

	if (q.length) {
		console.log('clicking NEXT AD');
		return selectAd(q);
	}
	
	console.log('clicking NEXT PAGE');
	$('.paging > a').last().click();
	setTimeout(function() {
		markBadAds();
		firstAd();
	}, 500);
}
