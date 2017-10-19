
myColTbl = new Array("#FF0000","#0000FF","#00FF00","#FF00FF","#00FFFF","#FFFF00","#000000","#FFFFFF");
myColCnt = 0;

function colchangeFunc(){
     document.getElementById("colchange").style.color = myColTbl[myColCnt];
     myColCnt = ( myColCnt < myColTbl.length -1 ) ? myColCnt + 1 : 0;
}

setInterval( "colchangeFunc()", 700 );

