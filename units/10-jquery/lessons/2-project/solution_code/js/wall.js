$(document).ready(function()
{
	$('#message').focus();

	$('#post-btn').click(function()
	{
		if ($('#message').val().trim() != "")
		{
			var element = "<br/><div class='row'><div class='col-md-2'><img src='http://i.imgur.com/87kIXSN.jpg'></div>" + 
						  "<div class='col-md-10'>" + $('#message').val().trim() + "</div></div>";

			$('#wall').prepend(element);
		}
	});
});
