function runMadlibs(text, boy_name_1, noun_1, occupation_1, measurement_1, noun_2, 
					adjective_1, game_1, adjective_2, plural_noun, verb_ing_1)
{
	text = text.replace("NAME-1", boy_name_1);
	text = text.replace("NOUN-1", noun_1);
	text = text.replace("NOUN-1", noun_1);
	text = text.replace("OCCUPATION-1", occupation_1);
	text = text.replace("MEASUREMENT-1", measurement_1);
	text = text.replace("NOUN-2", noun_2);
	text = text.replace("ADJECTIVE-1", adjective_1);
	text = text.replace("GAME-1", game_1);
	text = text.replace("ADJECTIVE-2", adjective_2);
	text = text.replace("PLURAL-NOUN-1", plural_noun);
	text = text.replace("VERB-ING-1", verb_ing_1);

	return text;
}
