
function edit_allow_tabs()
{
	function getLocationTemplate()
	{
		var m = window.location.href.match(/kyberia\.sk\/id\/[0-9]+\/([0-9]+)/);
		if (m) return m[1];
	}

	if (getLocationTemplate() != 1961033)
		return;

	function selectEditTextarea()
	{
		return $('textarea.node_content');
	}

	function getLocationNode()
	{
		var m = window.location.href.match(/kyberia\.sk\/id\/([0-9]+)/);
		if (m) return m[1];
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

	var ta = selectEditTextarea();

	allowTabs(ta);
}
