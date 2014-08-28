function addContacts()
{
	var contacts = {};
	contacts["Bill Clinton"] = {location : "Little Rock, Arkansas", picture : "http://i.imgur.com/Np98FLr.jpg", email: "bill@clinton.com"};
	contacts["George W Bush"] = {location : "Houston, Texas", picture : "http://i.imgur.com/K7pukOO.jpg", email: "george@bush.com"};
	contacts["Barack Obama"] = {location : "Chicago, Illinois", picture : "http://i.imgur.com/LHDpg7t.jpg", email: "barack@obama.com"};
	contacts["George H.W. Bush"] = {location : "Houston, Texas", picture : "http://i.imgur.com/hfFHwyw.jpg", email: "georgehw@bush.com"};

	return contacts;
}

function searchContacts(contacts, query)
{
	var matchedContacts = {};

	for (key in contacts) 
	{
		if (contacts[key]["location"].toLowerCase().indexOf(query.toLowerCase()) > -1 || 
			key.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
			contacts[key]["email"].toLowerCase().indexOf(query.toLowerCase()) > -1)
		{
			 matchedContacts[key] = contacts[key];
		}
	}

	return matchedContacts;
}
