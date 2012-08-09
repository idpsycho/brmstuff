
function avatars_desocializer()
{
	function selectAvatars()
	{
		return $('.node_avatar');
	}
	function selectLogins()
	{
		return $('.node_login');
	}

	selectAvatars().hide();
	selectLogins().hide();
}
