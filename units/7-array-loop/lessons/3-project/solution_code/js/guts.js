function addMovies()
{
	var movies = [];
	movies.push("Captain America");
	movies.push("Transformers");
	movies.push("The Road");
	movies.push("Road to Perdition");

	return movies;
}

function searchMovies(movies, query)
{
	var indices = [];

	for (var i=0; i<movies.length; ++i)
	{
		if (movies[i].toLowerCase().indexOf(query.toLowerCase()) > -1)
			indices.push(i);
	}

	return indices;
}

function getNoMoviesFoundText()
{
	return "No results found";
}

function getMoviesFoundText(numberMatches)
{
	return numberMatches + " movie(s) found.";
}

function printFoundMovies(indices, movies)
{
	var foundMovies = [];
	
	for (var i=0; i<indices.length; ++i)
	{
		foundMovies[i] = i+1 + ". " + movies[indices[i]];	
	}

	return foundMovies;
}
