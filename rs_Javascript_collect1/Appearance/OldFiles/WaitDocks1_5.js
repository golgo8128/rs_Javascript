
// This script should be executed after div id="waitdockloc" is defined.

function WaitDocks(){

	this.slashzero = "END";
	this.countdown  = 15;
	this.dockstart  = 7;
	this.chararray1 = new Array(128);

	this.loopcount = 1;
	this.dockedpos = null;
}

WaitDocks.prototype.update = function(){

	this.countdown --;
	if(this.countdown < 0){
		this.loopcount ++;
		this.countdown = 10 + Math.pow(2, this.loopcount);
	}

	this.calc_docks();
	this.display();

};


WaitDocks.prototype.calc_docks = function(){

	for(var i = 0;i < this.loopcount;i ++){
		this.chararray1[i] = "*";
	}
	
	if(this.countdown <= this.dockstart){
		for(i = this.loopcount;i < this.loopcount + this.countdown;i ++){
			this.chararray1[i] = "&nbsp; ";
		}
		this.chararray1[this.loopcount + this.countdown] = "*";
		this.chararray1[this.loopcount + this.countdown + 1] = this.slashzero;
		if(this.countdown == 0){
			this.dockedpos = this.loopcount;
		} else {
			this.dockedpos = null;
		}
	} else {
		this.dockedpos = null;
		this.chararray1[this.loopcount] = this.slashzero;
	}
		
	if(this.countdown % 3 == 2){
		this.chararray1[this.loopcount-1] =  "&nbsp; ";
	}

}

WaitDocks.prototype.display = function(){

	
	var ostr = "";
	for(var i = 0;this.chararray1[i] != this.slashzero;i ++){
		if(i == this.dockedpos){
			ostr += '<font color="red">' + this.chararray1[i] + '</font>';
		} else {
			ostr += this.chararray1[i];			
		}
	}
	
	document.getElementById("waitdockloc").innerHTML = ostr;

};


function waitdocks_loop(){

	wdock1.update();
	setTimeout("waitdocks_loop()", 250)

}

var wdock1 = new WaitDocks();
waitdocks_loop()

