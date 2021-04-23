const fs = require('fs');

fs.readFile('results.json', (err, data) => {
    if (err) throw err;
    let resultsjson = JSON.parse(data);
    
	for (var i = 0; i < resultsjson.length; i++){
	  var obj = resultsjson[i];
	  var siteurl = resultsjson[i].url;
	  var sitejquery = "none";
	  for (var k = 0; k < resultsjson[i].results.technologies.length; k++){
		if(resultsjson[i].results.technologies[k].slug == "jquery"){
			sitejquery = resultsjson[i].results.technologies[k].version;
		}
	  }

	console.log("site:"+siteurl);
	console.log("jquery:"+sitejquery);
		
});

// Define recursive function to print nested values
function printValues(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else {
            console.log(obj[k]);
        };
    }
};