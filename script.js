function myFunction(){
	var url = "janekx21.lima-city.de/projects/webProjects/project11/chat.php";
	//alert(feld.value);
	//document.location = "http://google.de/search?q="+feld.value;
	demo.innerHTML = check(url+"?user=" + userName.value + "&msg=" + feld.value,"",write);
	feld.value = "";
}

function write(txt){
	demo.innerHTML = txt;
}

function start(){
	feld = document.getElementById("feld");
	userName = document.getElementById("userName");
	demo = document.getElementById("demo");
}

window.onload = function(){
	start();
};


function check (url,data,callback){
   var request = new XMLHttpRequest();
   request.open("GET",url);
   request.addEventListener('load', function(event) {
      if (request.status >= 200 && request.status < 300) {
         callback(request.responseText);
      } else {
         console.warn(request.statusText, request.responseText);
      }
   });
   request.send(data);
}
