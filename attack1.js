var domains = [ 



["Bangladesh","google.com.bd"], 

["Bhutan","google.bt"], 
["India","google.co.in"],  
["Malaysia","google.com.my"], 
["Nepal","google.com.np"], 
["New Zealand","google.co.nz"], 
["Serbia","google.rs"], 
["Russia","google.ru"], 
["Singapore","google.com.sg"],  
["Thailand","google.co.th"], 
["Turkey","google.com.tr"], 
["Taiwan","google.com.tw"], 

];

function cached(url)
{
var image = document.createElement('img');
url = "https://www." + url + "/images/nav_logo242.png";
image.src = url;

return image.complete || image.width+image.
height > 0;
}


function getCountry(){
	var found = 0;
	for (var i = 0; i < domains.length; i++)
	{
		console.log(cached(domains[i][1]) + ": " + domains[i][0]);
		if(cached(domains[i][1]))
		{
			document.getElementById('country').innerHTML += "<br>You are in " + domains[i][0] + ", aren't you?";
			found = 1;
		}
	}
	if(found == 0)
	{
		document.getElementById('country').innerHTML += "We have no records of your country. Are you accessing this from Mars?";
	}	
}


getCountry();
