function generateRandomNumber()
{
	return Math.floor((Math.random() * 10) + 1);
}

function checkGuess(guess, generatedRandomNumber)
{
	// Do not change these two lines
	var statusCode = -1;
	var statusMessage = "YOUR STATUS MESSAGE GOES HERE";

	// YOUR CODE GOES HERE
	if (guess == generatedRandomNumber)
	{
		statusCode = 0;
		statusMessage = "Awesome! You guessed right.";
	}

	else if (guess > generatedRandomNumber)
	{
		statusCode = 1;
		statusMessage = "Too high! Try again.";
	}

	else if (guess < generatedRandomNumber)
	{
		statusCode = 2;
		statusMessage = "Too low! Try again.";
	}

	// Do not change this line
	return { "statusCode": statusCode, "statusMessage": statusMessage };
}
