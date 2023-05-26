let graphics;
let ggraphics;
let rgraphics;
let bgraphiccs;
let cgraphics;
let mgraphics;
let ygraphiccs;
var greenWigs = [];
var blueWigs = [];
var redWigs = [];
var greenWigs2 = [];
var blueWigs2 = [];
var redWigs2 = [];
var cyanWigs = [];
var magentaWigs = [];
var yellowWigs = [];
var cyanWigs2 = [];
var magentaWigs2 = [];
var yellowWigs2 = [];
var rxbound;
var rybound;
var gbound;
var bxbound;
var cbound;
var mbound;
var ybound;
var gnum;
var bnum;
var rnum;
var cnum;
var mnum;
var ynum;
var gnum1;
var bnum1;
var rnum1;
var cnum1;
var mnum1;
var ynum1;
var galpha = [];
var balpha = [];
var ralpha = [];
var calpha = [];
var malpha = [];
var yalpha = [];
var signRalpha;
var signBalpha;
var signGalpha;
var st = [];
var jita;
var area = [];
var numWigs;
var wigNumx = [];
var wigNumy = [];
var vertic;
var horiz;
var mode;
var rSign;
var gSign;
var y = 100;
var x = 0;
var z = 100;
var r = 200;
var g = 200;
var b = 200;
var rz = 50;
var gz = 50;
var bz = 50;
var cz = 50;
var mz = 50;
var yz = 50;
var my;
var cy;
var yy;
var ry;
var gy;
var by;
var c;
var m;
var y;
let min;
let s;
let hr;
let sec;

let bst = [], bxbeg = [], bybeg = [], bxmid = [], bymid = [], bxend = [], byend = [], gst = [], gxbeg = [], gybeg = [], gxmid = [], gymid = [], gxend = [], gyend = [], rst = [], rxbeg = [], rybeg = [], rxmid = [], rymid = [], rxend = [], ryend = [], cst = [], cxbeg = [], cybeg = [], cxmid = [], cymid = [], cxend = [], cyend = [], yst = [], yxbeg = [], yybeg = [], yxmid = [], yymid = [], yxend = [], yyend = [], mst = [], mxbeg = [], mybeg = [], mxmid = [], mymid = [], mxend = [], myend = [], alpha = [];


var num, flux, bend, alp;

var signStroke;

function setup() {
  
    


  createCanvas(displayWidth, displayHeight);
  graphics = createGraphics(displayWidth, displayHeight);
  rgraphics = createGraphics(displayWidth, displayHeight);
    bgraphics = createGraphics(displayWidth, displayHeight);
    cgraphics = createGraphics(displayWidth, displayHeight);
  mgraphics = createGraphics(displayWidth, displayHeight);
    ygraphics = createGraphics(displayWidth, displayHeight);
  
 ggraphics = createGraphics(displayWidth, displayHeight);


 colsepsetup();


  noCursor();
}

function draw() {
  colsep();
    
  
  if (mode == 0 && rot<=0.5){
   noCursor();
    print("another round")
      setup();
    rot++;
  }
   

  
  
 // print(frameRate());
}

function mousePressed() {
  let fs = fullscreen;
  fullscreen(fs);
  noCursor();
  setup();
}
function windowResized() {
  resizeCanvas(width, height);
}

function keyTyped() {
  if (key == "a") {
    mode = 0;
    setup();
  } else if (key == "b") {
    mode = 1;
    setup();
  } else if (key == "c") {
    mode = 2;
    setup();
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}
