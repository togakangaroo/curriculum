$(document).ready(function()
{
	var state = null;
	var first_operand = null;
	var second_operand = null;
	var operator = null;

	function clear()
	{
		$('#question').empty();
		$('#answer').empty();
		state = 0;
	}

	clear();

	function isNumeric(n) 
	{
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	// Simple FSM: operand -> operator -> operand -> equal sign
	// states: 0 -> 1 -> 2 -> 3
	$('.calc-btn').click(function() 
	{
		var input = $(this).text();
		//alert($(this).text());

		if (input == "CLEAR")
			clear();

		else if (state == 0 && isNumeric(input))
		{
			first_operand = input;
			$('#question').append(input);
			++state;
		}

		else if (state == 1 && !isNumeric(input))
		{
			operator = input;
			$('#question').append(" " + input);
			++state;
		}

		else if (state == 2 && isNumeric(input))
		{
			second_operand = input;
			$('#question').append(" " + input);
			++state;
		}

		else if (state == 3 && input == "=")
		{
			$('#question').append(" " + input);
			var answer = null;

			if (operator == '/')
				answer = divide(first_operand, second_operand);
			else if (operator == "x")
				answer = multiply(first_operand, second_operand);	
			else if (operator == "-")
				answer = subtract(first_operand, second_operand);	
			else if (operator == "+")
				answer = add(first_operand, second_operand);	

			$('#answer').append(answer);

			++state;
		}
	});
});
