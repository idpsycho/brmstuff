
registerFeature('avatars_stop_animation');

function avatars_stop_animation()
{
	function selectAvatars()
	{
		return $('.node_avatar');
	}

	$.fn.freezeGif = function()
	{
		this.each(function(i, e)
		{
			freezeGif(e);
		});
		return this;
	}
	function freezeGif(gifElem)
	{
		var i = gifElem;
	    var c = document.createElement('canvas');
	    var w = c.width = i.width;
	    var h = c.height = i.height;
	    c.getContext('2d').drawImage(i, 0, 0, w, h);
	    try
	    {
	        i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
	    }
	    catch(e)
	    {
	    	// cross-domain -- mimic original with all its tag attributes
	        for (var j = 0, a; a = i.attributes[j]; j++)
	            c.setAttribute(a.name, a.value);

	        i.parentNode.replaceChild(c, i);
	    }
	}

	selectAvatars().freezeGif();

}
