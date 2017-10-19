
// This script should be executed after div id="waitdockloc" is defined.

function WaitDocks(){

	this.counter_main = 0;
	this.chararray1   = new Array(128);

}

WaitDocks.prototype.update = function(){
	
	this.counter_main += 1;
	this.display();

};


WaitDocks.prototype.display = function(){
	
	var mainstr_len = Math.floor(Math.log(this.counter_main)/Math.log(2));
	for(var i = 0;i < mainstr_len;i ++){
		this.chararray1[i] = "*";
	}
	this.chararray1[mainstr_len] = "END";
	
	if(this.counter_main % 2 == 0){
		this.chararray1[mainstr_len - 1] = "";
	}
	
	var ostr = "";
	for(i = 0;this.chararray1[i] != "END";i ++){
		ostr += this.chararray1[i];
	}
	
	document.getElementById("waitdockloc").innerHTML = ostr;
	//	= new Array(+1).join("*");

};


function waitdocks_loop(){

	wdock1.update();
	setTimeout("waitdocks_loop()", 250)

}

var wdock1 = new WaitDocks();
waitdocks_loop()

