
function initial(x){
	if(isNaN(x) || x > 5){
		console.log("Enter a valid number below 5");
		document.getElementById("response").innerHTML = "Enter a valid number below 5!"
		document.getElementById("tableOfimg").innerHTML = ""

	}
	else{
		document.getElementById("response").innerHTML = "";
		document.getElementById("tableOfimg").innerHTML = getTable(x);
	}
}
var array = [];

function cgetimages(size){
	var max;
	if(x % 2 == 0){
		
	}
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTable(x){
	var r = x;
	var c = (x % 2 == 1)? (x-1) : (x); 
	var str = '<table border="1">';
	for(var i = 0; i < r ; i ++){
		var t = "<tr>";
		for (var j = 0; j < c; j++) {
			t += '<td> <img src = ./Images/i'+getRandomNum(1,8)+'.png height="80" width="80" ></td>';
		}
		t += "</tr>";
		str += t;
	}
	str += "</table>";
	return str;
}