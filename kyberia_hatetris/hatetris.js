
var scoreK = 30;
var scoreKwallet = 30;
var gameOver = false;

function subK(n)
{
	if (!n) n=1;
	scoreK -= n;

	if (scoreK < 0) scoreK = 0;

	drawScore();
}
function addK(n)
{
	if (!n) n=1;
	scoreKwallet += n;
	drawScore();
}
function setGameover(state)
{
	if (state || typeof state=='undefined')
	{
		console.log('gameover: '+ (scoreK+scoreKwallet) );
		gameOver = true;
		$('#msg').addClass('gameover');
		$('#msg .ending').hide();
		if (pixAtTop())
			$('#msg .error').show().find('.score').text(scoreKwallet +' K');
		else if (scoreKwallet>0)
			$('#msg .kwallet').show();
		else
			$('#msg .alterego').show();

		scoreK = 0;
		drawScore();
	}
	else
	{
		gameOver = false;
		$('#msg').removeClass('gameover');
	}
}

// takto sa extrahuju:
// 1. kyberia.sk/24/1961037
// 2. load jquery
// 3. hodit toto do konzoly
// var i=0; var ids=''; var q = $('.bordered img').each(function(){ var id=$(this).attr('src'); id = id.match(/([\d]+)\.gif/); if (!id) return; ids+=id[1]+', '; i++; if (i>500) return false; }); ids;

var arrIds = [1297258, 4410785, 2527262, 4423695, 5701325, 2197, 2989793, 940505, 2387613, 4850970, 5143077, 3629310, 175, 1161797, 1798, 992, 1539236, 1685, 2180, 1313639, 955, 3483731, 641, 3581176, 2162472, 1499243, 5743215, 850370, 1538980, 886, 2913825, 1141, 3652720, 1037768, 3715735, 5463186, 3685545, 3228826, 4236004, 3413324, 3310607, 1499730, 2147313, 2925588, 2359660, 2168693, 1773973, 1075902, 1316994, 3307746, 3535040, 876820, 2120613, 6074883, 349, 3713021, 2166573, 1801, 2095462, 1336651, 151, 1739, 2425837, 781, 4809669, 1220415, 1623594, 5797465, 2992649, 1580092, 1460257, 1388738, 4427650, 718062, 107, 3250865, 4114683, 204, 847867, 2319723, 598, 5070135, 3465216, 3386356, 5181768, 1907281, 1840568, 2504318, 5054291, 2102, 6063412, 441, 4261302, 2685, 1203863, 2276, 2595, 2435, 2612, 2220, 687488, 1633, 852, 1696840, 771838, 1772650, 4897407, 1214463, 1155938, 622451, 2297623, 2634, 3522235, 4962174, 2871, 4797180, 3728016, 2179634, 1451411, 2977381, 3689003, 1053651, 462, 920, 1189103, 2512567, 1942539, 1410261, 669, 116, 4437650, 3083197, 1509783, 4074968, 1742041, 904, 2466, 773, 519, 1168, 2280145, 3428677, 1507456, 610, 2039, 1788167, 2938, 2450, 1351, 614, 1814, 1237593, 3518458, 3495926, 985654, 4460939, 269, 1405869, 4588501, 3264833, 1343856, 2369, 1518763, 2060, 345, 193, 4340024, 213, 665095, 2925561, 526, 3139837, 2093979, 866, 2192945, 1653, 1329481, 1053, 1240, 1808, 1624464, 114, 4305367, 1395021, 1937, 1627878, 2656, 3565436, 4696887, 1478893, 1839, 2385, 288, 2276101, 2152923, 859599, 990241, 3339598, 1265, 1521, 3068603, 2465113, 2276727, 3040033, 2751, 1000508, 3026066, 495, 4445839, 279, 2336, 174, 2095, 767518, 967, 659026, 2287408, 6429264, 1179746, 201, 338, 964, 2334, 2963477, 1007, 6225419, 1372265, 856, 2941127, 6303011, 728699, 881660, 1155808, 3347996, 5673759, 259, 5927863, 2270984, 2144306, 703679, 2601, 1314, 3589253, 6768372, 2280, 6354673, 1081070, 2181281, 3026265, 1669104, 403, 2858, 6477980, 672662, 4952115, 2372449, 863094, 1548, 650618, 1369642, 236, 2099, 1400, 3811109, 5551984, 2332435, 2087, 1090163, 1543, 661357, 1941801, 2397, 953868, 1372, 5624136, 1208, 3301180, 2088, 3341722, 1821202, 1498736, 1624246, 4836141, 2192, 748, 1944683, 1010, 603, 1196237, 1770524, 2930183, 1843, 1453, 1170, 2191808, 2993077, 6203296, 2324041, 1836158, 2954, 2492838, 1160591, 1724284, 1211661, 2860, 1115352, 3088301, 1451268, 559, 6098829, 2405, 2393, 2183, 2930621, 398, 469, 6731398, 1016, 1860791, 975, 2964135, 4252652, 372, 624216, 624281, 1759, 2496, 1802109, 1745, 1423363, 1580033, 751965, 2134313, 2449734, 3330496, 2857, 192, 1473, 1306592, 2910621, 1348, 3126916, 6415923, 1155994, 1858, 1950, 5517455, 3874510, 1320922, 2492, 1435220, 1285, 658206, 1727254, 4348434, 1204827, 3356738, 6230121, 1342, 533, 382, 1298380, 2159, 3446931, 224, 3105755, 758, 2140765, 1083859, 1541540, 814, 3815047, 2127187, 695, 624286, 1314384, 729, 1687, 2200245, 793, 3027553, 2125953, 2359, 2126, 1776, 4215495, 6629774, 1103700, 831, 2920208, 779562, 4427670, 6765857, 772, 4405025, 3523111, 2838, 1410, 819, 2919563, 6564967, 2254, 5016419, 2007, 3554916, 2218, 3028295, 6624926, 2962401, 2877, 2778, 1409, 1933558, 4335927, 669506, 1746727, 930001, 5158800, 3601337, 3577377, 1946772, 3278708, 1859269, 2504073, 5692960, 4427058, 3393029, 1697, 5690781, 196, 677213, 408, 983180, 6515782, 6418907, 1230, 3052551, 423, 1398642, 3767781, 3295948, 2207744, 1388, 3732664, 661, 341, 2232120, 5748901, 1729, 601, 3363461, 1100, 2477, 864328, 1502233, 893, 4398609, 3176103, 2425, 2708, 1043, 4926194, 2169745, 1432818, 1862, 2468267, 1306886, 941, 1930903, 3518896, 1461, 5967081, 1274074, 2498647, 2303282, 2205904, 3888888, 1649526, 1890782, 3590122, 2366926, 2438, 779221, 276];

var arrIdsSpecial = [773, 940505, 1961]; // memfer, martini, lubomier

function isIdSpecial(id)
{
	for (var i=0; i < arrIdsSpecial.length; i++)
		if (arrIdsSpecial[i] == id)
			return true;
}

function nextFrame()
{
	if (gameOver)
		return;

	applyGrid();
	drawScore();

	if (scoreK <= 0)
		return setGameover();

	if (currBlock)
	{
		if (!moveBlock(0, 1))
		{
			if (currBlock.special)
				flameWithCurrBlock();
			else
				makeCurrBlockStatic();

			if (pixAtTop())
				return setGameover();
		}
	}

	if (gameOver)
		return;

	var numAnimating = $('#grid img:animated').length
	if (!numAnimating)
		fallToEmptyRows();

	if (allPixAtBottom())
		giveFullRowK();

	if (!currBlock)
		makeRndBlock( rndi(10)?false:'special' );

	applyGrid();
}

function newFlame(bAlterego)
{
	scoreK = 30;
	scoreKwallet -= 30;
	if (bAlterego)
	{
		scoreKwallet = 30;
		initGrid();
		currBlock = null;
	}

	console.log('new flame');

	setGameover(false);
}

////////////////////////////////////////////
// stuff

function flameWithCurrBlock()
{
	if (!currBlock) return;

	var curr = currBlock;

	makeCurrBlockStatic();

	for (var y=-1; y<=1; y++)
	{
		for (var x=-1; x<=1; x++)
		{
			var xx = curr.x + x;
			var yy = curr.y + y;
			if (pixAt(xx, yy) == 0)
				continue;

			var elem = getElemAt(xx, yy);
			if (!elem)
				continue;

			giveKbyId(elem, xx, yy);
		}
	}
}
function giveKbyId(elem, x, y)
{
	elem.fadeOut(300, function()
	{
		setPixAt(x, y, 0);
		$(this).show().attr('src', '0.gif');
		addK();
	});
}

function giveFullRowK()
{
	var gmax = gridS-1;
	for (var y=gmax; y >= 0; y--)
	{
		var num = 0;
		for (var x=0; x < gridS; x++)
		{
			if (pixAt(x, y))
				num++;
		}

		if (num<gridS)
			continue;

		console.log('full row '+y);
		for (var x=0; x < gridS; x++)
		{
			var elem = getElemAt(x, y);
			giveKbyId(elem, x, y);
		}
	}
}

function fallToEmptyRows()
{
	// chod od spodku
	// ak je riadok prazdny, nechaj tam vsetko padnut
	// potom ak nieco padlo, tak znova
	// inak chod o riadok vyssie

	var gmax = gridS-1;
	for (var y=gmax; y >= 0; y--)
	{
		var num=0;
		for (var x=0; x < gridS; x++)
		{
			if (!pixAt(x, y))
				num++;
		}
		if (num != 0)
			continue;

		// if anything falls, let's see again (it might be empty row)
		if (fallToRow(y))
			y++;
	}
}

function fallToRow(yFallTo)
{
	var fallenBlocks = 0;
	for (var y=yFallTo; y >= 1; y--)
	{
		for (var x=0; x < gridS; x++)
		{
			var id = pixAt(x, y-1);
			if (id) fallenBlocks++;

			setPixAt(x, y, id);
			setPixAt(x, y-1, 0);
		}
	}
	return fallenBlocks;
}

function pixAtTop()
{
	for (var x=0; x < gridS; x++)
	{
		var id = pixAt(x, 0);
		if (id && !isIdSpecial(id))
			return true;
	}
}
function allPixAtBottom()
{
	for (var x=0; x < gridS; x++)
	{
		if (!pixAt(x, gridS-1))
			return false;
	}
	return true;
}

function drawScore()
{
	$('#k').text(scoreK);
	$('#kwallet').text(scoreKwallet);
}

function rotateBlock(bReverse, costK)
{
	if (!currBlock) return;
	//console.log('rotating');

	var x = currBlock.x;
	var y = currBlock.y;
	var bData = currBlock.bData;
	var rotated = [];
	for (var i=0; i < bData.length; i++)
	{
		var v = bData[i];

		if (bReverse)
			rotated.push( {x:v.y, y:-v.x, id: v.id} );
		else
			rotated.push( {x:-v.y, y:v.x, id: v.id} );
	}

	if (checkCollision(rotated, x, y))
		return false;

	currBlock.bData = rotated;
	applyGrid();
	if (costK) subK();
	return true;
}

function moveBlock(xx, yy, costK)
{
	if (!currBlock) return;
	//console.log('moving '+xx+' '+yy);

	var x = currBlock.x + xx;
	var y = currBlock.y + yy;
	var bData = currBlock.bData;
	var bCollides = checkCollision(bData, x, y);
	if (bCollides)
		return false;

	currBlock.x += xx;
	currBlock.y += yy;

	applyGrid();
	if (costK && xx) subK();	// y nestoji K
	return true;
}

function checkCollision(data, x, y)
{
	for (var i=0; i < data.length; i++)
	{
		var v = data[i];
		var xx = v.x+x;
		var yy = v.y+y;
		if (xx<0 || xx>=gridS) return true;
		if (yy<0 || yy>=gridS) return true;
		var id = parseInt( pixAt(xx, yy) );
		if (id)
			return true;
	}
}

function getIconById(id)
{
	if (id == 0) return '0.gif';

	id = ''+id;
	var a = id.substr(0, 1);
	var b = id.substr(1, 1);

	// http://kyberia.sk/images/nodes/3/7/3732664.gif
	var url = 'http://kyberia.sk/images/nodes/';
	url += +a+'/'+b+'/'+id+'.gif';

	// this is to prevent icons loading all over again all the time
	cacheIcon(id, url);

	return url;
}

function cacheIcon(id, url)
{
	var hasCache = $('#iconCache .i_'+id).length;
	if (!hasCache)
		$('#iconCache').append( $('<img>').attr('src', url) );
}

function idForGrid(x, y)
{
	return 'pix_'+x+'_'+y;
}


var gridS = 8;
var grid = [];
function initGrid()
{
	var div = $('#grid').html('');

	var s = gridS;
	for (var y=0; y < gridS; y++)
	{
		var row = $('<div class="row">');
		div.append(row);

		for (var x=0; x < gridS; x++)
		{
			setPixAt(x, y, 0);

			var id = idForGrid(x, y);
			var img = $('<img>').attr('id', id);
			row.append(img);
		}
	}

	applyGrid();
}

function pixAt(x, y)
{
	if (x<0 || x>=gridS) return true;
	if (y<0 || y>=gridS) return true;
	return grid[x + y*gridS];
}
function setPixAt(x, y, id)
{
	if (x<0 || x>=gridS) return;
	if (y<0 || y>=gridS) return;
	return grid[x + y*gridS] = id;
}

function v2(x, y)
{
	return {x:x, y:y};
}

function getElemAt(x, y)
{
	var id = idForGrid(x, y);
	return $('#'+id);
}
function applyGrid()
{
	for (var y=0; y < gridS; y++)
	{
		for (var x=0; x < gridS; x++)
		{
			var id = pixAt(x, y);

			var el = getElemAt(x, y);
			el[0].src = getIconById(id);
			el.removeClass('hejter');
		}
	}

	// also replace pixels with dynamic blocks
	if (currBlock)
	{
		var bData = currBlock.bData;
		for (var i=0; i < bData.length; i++)
		{
			var x = bData[i].x + currBlock.x;
			var y = bData[i].y + currBlock.y;
			var id = bData[i].id;

			var el = getElemAt(x, y);
			el.attr('src', getIconById(id));
			el.toggleClass('hejter', !!currBlock.special);
		}
	}
}

function makeCurrBlockStatic()
{
	if (!currBlock) return;

	var bData = currBlock.bData;
	for (var i=0; i < bData.length; i++)
	{
		var x = bData[i].x + currBlock.x;
		var y = bData[i].y + currBlock.y;
		var id = bData[i].id;

		setPixAt(x, y, id);
	}

	currBlock = null;
	applyGrid();
}

var blocks =
[
	// X
	[	v2(0, 0) ],

	// xXx
	// x
	[	v2(-1, 0), v2(0, 0), v2(1, 0),
		v2(-1, 1), ],

	// xxX
	//   x
	[	v2(-1, 0), v2(0, 0), v2(1, 0),
							 v2(1, 1), ],

	// xXxx
	[	v2(-1, 0), v2(0, 0), v2(1, 0), v2(2, 0), ],

	// Xx
	// xx
	[	v2(0, 0), v2(1, 0),
		v2(0, 1), v2(1, 1), ],

	// xXx
	//  x
	[	v2(-1, 0), v2(0, 0), v2(1, 0),
				   v2(0, 1), ],
];

var currBlock;

function copyBlock(b)
{
	var nw = [];
	for (var i=0; i < b.length; i++)
	{
		var x = b[i].x;
		var y = b[i].y;
		nw.push( {x:x, y:y} );
	}
	return nw;
}

function getSpecialId()
{
	var n = arrIdsSpecial.length;
	return arrIdsSpecial[ rndi(n) ];
}
function getRandomId()
{
	var n = arrIds.length;
	return arrIds[ rndi(n) ];
}

function makeRndBlock(bSpecial)
{
	currBlock = {};
	currBlock.x = gridS/2;
	currBlock.y = 0;

	var b = blocks[ 1 + rndi(blocks.length-1) ];
	var specialId;
	if (bSpecial)
	{
		currBlock.special = true;
		specialId = getSpecialId();
		b = blocks[0];
	}

	b = copyBlock(b);
	fillBlockWithIds(b, specialId);
	currBlock.bData = b;
}
function fillBlockWithIds(bData, specialId)
{
	for (var i=0; i < bData.length; i++)
	{
		bData[i].id = specialId ? specialId : getRandomId();
	}
}
// libs
function rnd(x, mx)
{
	if (typeof x != 'number') x = 1;
	if (typeof mx == 'number')
		return x + rnd(mx-x);

	return Math.random()*x;
}
function rndi(x, mx)
{
	if (typeof x != 'number') x = 2;
	if (typeof mx == 'number')
		return x + rndi(mx-x);

	return Math.floor( rnd(x) );
}
