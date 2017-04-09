function myFunction(){
	//alert(feld.value);
	//document.location = "http://google.de/search?q="+feld.value;
	demo.innerHTML += userName.value + ": " + feld.value + "<br>";
	feld.value = "";

}

function start(){
	feld = document.getElementById("feld");
	userName = document.getElementById("userName");
	demo = document.getElementById("demo");
}

window.onload = function(){
	start();
};