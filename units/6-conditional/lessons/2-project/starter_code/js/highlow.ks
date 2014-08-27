$(document).ready(function()
{

	$('#run-btn').click(function()
	{
		$('form').hide();

		var newCopy = runMadlibs(copy, $('#boy-name-1').val(), $('#noun-1').val(), $('#occupation-1').val(), $('#measurement-1').val(), 
								$('#noun-2').val(), $('#adjective-1').val(), $('#game-1').val(), $('#adjective-2').val(), $('#plural-noun-1').val(), 
							    $('#verb-ing-1').val());
		
		$('#post-process').text(newCopy);
		$('#post-process-box').fadeIn(1000).show();
		return false;	
	});

});
