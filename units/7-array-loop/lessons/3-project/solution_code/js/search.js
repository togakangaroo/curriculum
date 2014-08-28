var movies = [];

$(document).ready(function()
{
	movies = addMovies();

	$("#search-btn").click(function()
	{
		var query = $('#query').val();

		if (query != "")
		{
			var indices = searchMovies(movies, query);

			var resultsMessage = "";

			if (indices.length == 0)
			{
				resultsMessage = getNoMoviesFoundText();
				$("#results").empty();
			}

			else
			{
				resultsMessage = getMoviesFoundText(indices.length);
				results = printFoundMovies(indices, movies);

				$("#results").hide();

				for (var i=0; i<results.length; ++i)
				{
					$("#results").append(results[i] + "<br/>");
				}
				
				$("#results").fadeIn(500);
			}

			$("#results-message").html("<em>" + resultsMessage + "</em>");
		}
	});

});
