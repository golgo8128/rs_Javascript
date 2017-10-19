
// This script should be executed after div id="waitdockloc" is defined.

function WaitDocks(){

	this.counter_main = 0;

}

WaitDocks.prototype.update = function(){
	
	this.counter_main += 1;
	this.display();

};


WaitDocks.prototype.display = function(){
	
	document.getElementById("waitdockloc").innerHTML
		= this.counter_main.toString();

};


function waitdocks_loop(){

	wdock1.update();
	setTimeout("waitdocks_loop()", 250)

}

var wdock1 = new WaitDocks();
waitdocks_loop()

