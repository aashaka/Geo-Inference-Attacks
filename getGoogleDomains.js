// Following is the script used to convert table in https://en.wikipedia.org/wiki/List_of_Google_domains to array form in the Console

var table = document.getElementsByClassName("wikitable sortable");
var t = table[0];
var f = function(table) { 
	headers = [];
	headers[0] = table.rows[0].cells[0].innerHTML.toLowerCase().replace(/ /gi,''); 
	headers[1] = table.rows[0].cells[2].innerHTML.toLowerCase().replace(/ /gi,''); 
	// go through cells 
	for (var i=1; i<table.rows.length; i++) { 
	var tableRow = table.rows[i]; var rowData = []; 
	rowData[ headers[0] ] = tableRow.cells[0].textContent; 
	rowData[ headers[1] ] = tableRow.cells[2].textContent; 
	console.log(' ["' + rowData[ headers[0] ] +  '","' + rowData[ headers[1] ] + '"], '); 
 	}
} 
f(t);

