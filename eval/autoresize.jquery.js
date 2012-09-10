/*
 * jQuery autoResize (textarea auto-resizer)
 * by psycho
 
 USE:
	$('textarea').autoResize();
	$('textarea').autoResize( 300 );
	$('textarea').autoResize( {min: 300} );
 */

(function($){
	$.fn.cssVal = function(propName)
	{
		var x = this.css(propName);
		x = 0 + x;
		x = parseFloat(x);
		return x;
	};
})(jQuery);

(function($){
	
	$.fn.autoResize = function(options) {

		var observe;
		if (window.attachEvent) {
			observe = function (element, event, handler) {	element.attachEvent('on'+event, handler); }
		} else {
			observe = function (element, event, handler) { element.addEventListener(event, handler, false); }
		}
		this.each( function()
		{
			var e = this;
			function resize()
			{
				e.style.height = 'auto';

				// minimal height from options
				var h = e.scrollHeight;
				if (typeof options == 'number')
					options = {min: options};
				
				if (options && typeof options.min == 'number')
					h = Math.max(h, options.min);
				//

				e.style.height = h + 'px';

				if (options && typeof options.callback == 'function')
					options.callback( $(e) );
			}

			function delayedResize()
			{
				window.setTimeout(resize, 0);
			}
			observe(e, 'change', resize);
			observe(e, 'cut',	delayedResize);
			observe(e, 'paste', delayedResize);
			observe(e, 'drop',	delayedResize);
			observe(e, 'keydown', delayedResize);

			resize();
		});

		return this;
	};

})(jQuery);
