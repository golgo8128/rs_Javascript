
// This script should be executed after div id="waitdockloc" is defined.

function WaitDocks(){

	this.counter_main = 0;

}

WaitDocks.prototype.update = function(){
	
	this.counter_main += 1;

	document.getElementById("waitdockloc").innerHTML = this.counter_main.toString();
	// alert(this.counter_main);

};

var wdock1 = new WaitDocks();
wdock1.update();
wdock1.update();
wdock1.update();

alert(wdock1.counter_main);
