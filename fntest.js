

function fntestsetup() {
  num = int(random(4,8));
  jita = 0.1;
  flux = 0.5
  bend = random(4,6);
 cset();
  mset();
  yset();
  bset();
  gset();
  rset();
  //print(bend);
}

function fntest() {
background(255);

  mage();
   blendMode(MULTIPLY);
  cya();
  yell();
  blu();
  blendMode(MULTIPLY);
  gre();
  re();
blendMode(BLEND);
  

 
}

function gset(){

  ggraphics = createGraphics(displayWidth, displayHeight);
   ggraphics.blendMode(BLEND);
  jita = flux;
   jit = random(10);
  for (i = 0; i<num; i++){
  gst[i] = random((height/10), (height/10)+100);
         gxbeg[i] = -20
  gybeg[i] = random(height);
  gxmid[i] = width/2+random(-jit,jit)+gst[1];
  gymid[i] = gybeg[i] + random(-20,20);
  gxend[i] = width+20;
gyend[i] = height/2+random(-50,50);
  }

  range = 120;
  
j =0;
  
  for (i = 0; i<60; i++){
    alpha[i] = random(range, 255);
  }


}

function rset(){

   rgraphics = createGraphics(displayWidth, displayHeight);
   rgraphics.blendMode(BLEND);
  jita = flux;
   jit = random(10);
  for (i = 0; i<num; i++){
  rst[i] = random((height/10), (height/10)+100);
         rxbeg[i] = -20
  rybeg[i] = random(height);
  rxmid[i] = width/2+random(-jit,jit)+rst[1];
  rymid[i] = rybeg[i] + random(-20,20);
  rxend[i] = width+20;
ryend[i] = height/2+random(-50,50);
  }

  range = 120;
  
j =0;
  
  for (i = 0; i<60; i++){
    alpha[i] = random(range, 255);
  }


}

function mset(){

  
   mgraphics = createGraphics(displayWidth, displayHeight);
   mgraphics.blendMode(BLEND);
  jita = flux;
   jit = random(10);
  for (i = 0; i<num; i++){
  mst[i] = random((height/10), (height/10)+100);
         mxbeg[i] = -20
  mybeg[i] = random(height);
  mxmid[i] = width/2+random(-jit,jit)+mst[1];
  mymid[i] = mybeg[i] + random(-20,20);
  mxend[i] = width+20;
myend[i] = height/2+random(-50,50);
  }

  range = 120;
  
j =0;
  
  for (i = 0; i<60; i++){
    alpha[i] = random(range, 255);
  }

}

function bset(){

  bgraphics = createGraphics(displayWidth, displayHeight);
   bgraphics.blendMode(BLEND);
  jita = flux;
   jit = random(10);
  for (i = 0; i<num; i++){
  bst[i] = random((height/10), (height/10)+100);
         bxbeg[i] = -20
  bybeg[i] = random(height);
  bxmid[i] = width/2+random(-jit,jit)+bst[1];
  bymid[i] = bybeg[i] + random(-20,20);
  bxend[i] = width+20;
byend[i] = height/2+random(-50,50);
  }

  range = 120;
  
j =0;
  
  for (i = 0; i<60; i++){
    alpha[i] = random(range, 255);
  }

}


function yset(){

  
   ygraphics = createGraphics(displayWidth, displayHeight);
   ygraphics.blendMode(BLEND);
  jita = flux;
   jit = random(10);
  for (i = 0; i<num; i++){
  yst[i] = random((height/10), (height/10)+100);
         yxbeg[i] = -20
  yybeg[i] = random(height);
  yxmid[i] = width/2+random(-jit,jit)+yst[1];
  yymid[i] = yybeg[i] + random(-20,20);
  yxend[i] = width+20;
yyend[i] = height/2+random(-50,50);
  }

  range = 120;
  
j =0;
  
  for (i = 0; i<60; i++){
    alpha[i] = random(range, 255);
  }

}


function cset(){
  
   cgraphics = createGraphics(displayWidth, displayHeight);
   cgraphics.blendMode(BLEND);
  jita = flux;
   jit = random(10);
  for (i = 0; i<num; i++){
  cst[i] = random((height/10), (height/10)+100);
         cxbeg[i] = -20
  cybeg[i] = random(height);
  cxmid[i] = width/2+random(-jit,jit)+cst[1];
  cymid[i] = cybeg[i] + random(-20,20);
  cxend[i] = width+20;
cyend[i] = height/2+random(-50,50);
  }

  range = 120;
  
j =0;
  
  for (i = 0; i<60; i++){
    alpha[i] = random(range, 255);
  }


}

function cya(){
    jita = flux;
  //frameRate(1);
    cgraphics.blendMode(BLEND);

// wig1();
// wig2();
 // wig3();

  
  for (i = 30; i<40; i++){
d = alpha[i];    
       alpha[i] += random(-jita,jita);
     if (alpha[i] <= 5 || alpha [i] >= 255){
      alpha[i] = random(range, 255);
    }
  }
  cgraphics.fill(alpha[30], 255, 255);
  cgraphics.noStroke();
 cgraphics.rect(-100, -100, width * 2, height * 2);
cgraphics.noFill();

   for (i=0; i<num; i++){
cst[i] += random(-jita,jita);
   if (cst[i] <= 5 || cst[i] >= height/2){
    cst[i] = height/10;
   }
      cgraphics.stroke(alpha[i+31], 255, 255);
   cgraphics.strokeWeight(cst[i]);
 cgraphics.beginShape();
 cgraphics.curveVertex(cxbeg[i], cybeg[i]);
 cgraphics.curveVertex(cxbeg[i], cybeg[i]);
 cgraphics.curveVertex(cxmid[i], cymid[i]);
   cgraphics.curveVertex(cxend[i], cybeg[i]);
    cgraphics.curveVertex(cxend[i], cybeg[i]);
   cgraphics.endShape();
  }
   
     j++
  j = 0;
   image(cgraphics, 0,0,width,height);
     
     for (i=0; i<num; i++){
       
       cybeg[i] += random(-jita,jita);
  cymid[i] += random(-jita,jita);
 cxmid[i] += random(-jita,jita);
  cyend[i] += random(-jita,jita);
  
   if (cybeg[i] <= 0 || cybeg[i] >= height){
    cybeg[i] = height/2+random(-50,50);
  }
  
 if (cymid[i] <= 0 || cymid[i] >= height|| cymid[i] <= cybeg[i] - (cst[i]/bend) || cymid[i] >= cybeg[i] + (cst[i])/bend){
    cymid[i] = cybeg[i] + random(-cst[i]/bend,cst[i]/bend);
  }
  
   if (cxmid[i] <= 0 || cxmid[i] >= width){
    cxmid[i] = height/2+random(-50,50);
  }
  if (cyend[i] <= 0 || cyend[i] >= width){
    cyend[i] = height/2+random(-50,50);
  }
     }
}

function gre(){
   jita = flux;
  //frameRate(1);
    ggraphics.blendMode(BLEND);

// wig1();
// wig2();
 // wig3();

  
  for (i = 10; i<20; i++){
d = alpha[i];    
       alpha[i] += random(-jita,jita);
     if (alpha[i] <= 5 || alpha [i] >= 255){
      alpha[i] = random(range, 255);
    }
  }
  ggraphics.fill(alpha[10], 255, alpha[10]);
  ggraphics.noStroke();
 ggraphics.rect(-100, -100, width * 2, height * 2);
ggraphics.noFill();

   for (i=0; i<num; i++){
gst[i] += random(-jita,jita);
   if (gst[i] <= 5 || gst[i] >= height/2){
    gst[i] = height/10;
   }
      ggraphics.stroke(alpha[i+11], 255, alpha[i+11]);
   ggraphics.strokeWeight(gst[i]);
 ggraphics.beginShape();
 ggraphics.curveVertex(gxbeg[i], gybeg[i]);
 ggraphics.curveVertex(gxbeg[i], gybeg[i]);
 ggraphics.curveVertex(gxmid[i], gymid[i]);
   ggraphics.curveVertex(gxend[i], gybeg[i]);
    ggraphics.curveVertex(gxend[i], gybeg[i]);
   ggraphics.endShape();
     
     gybeg[i] += random(-jita,jita);
  gymid[i] += random(-jita,jita);
 gxmid[i] += random(-jita,jita);
  gyend[i] += random(-jita,jita);
  
   if (gybeg[i] <= 0 || gybeg[i] >= height){
    gybeg[i] = height/2+random(-50,50);
  }
  
 if (gymid[i] <= 0 || gymid[i] >= height|| gymid[i] <= gybeg[i] - (gst[i]/bend) || gymid[i] >= gybeg[i] + (gst[i])/bend){
    gymid[i] = gybeg[i] + random(-gst[i]/bend, gst[i]/bend);
  }
  
   if (gxmid[i] <= 0 || gxmid[i] >= width){
    gxmid[i] = height/2+random(-50,50);
  }
  if (gyend[i] <= 0 || gyend[i] >= width){
    gyend[i] = height/2+random(-50,50);
  }
     
     
  }
   
     j++
  j = 0;
   image(ggraphics, 0,0,width,height);
     
   
}

function re(){
     jita = flux;
  //frameRate(1);
    rgraphics.blendMode(BLEND);

// wig1();
// wig2();
 // wig3();

  
  for (i = 20; i<30; i++){
d = alpha[i];    
       alpha[i] += random(-jita,jita);
     if (alpha[i] <= 5 || alpha [i] >= 255){
      alpha[i] = random(range, 255);
    }
  }
  rgraphics.fill(255, alpha[20], alpha[20]);
  rgraphics.noStroke();
 rgraphics.rect(-100, -100, width * 2, height * 2);
rgraphics.noFill();

   for (i=0; i<num; i++){
rst[i] += random(-jita,jita);
   if (rst[i] <= 5 || rst[i] >= height/2){
    rst[i] = height/10;
   }
      rgraphics.stroke(255, alpha[i+21], alpha[i+21]);
   rgraphics.strokeWeight(rst[i]);
 rgraphics.beginShape();
 rgraphics.curveVertex(rxbeg[i], rybeg[i]);
 rgraphics.curveVertex(rxbeg[i], rybeg[i]);
 rgraphics.curveVertex(rxmid[i], rymid[i]);
   rgraphics.curveVertex(rxend[i], rybeg[i]);
    rgraphics.curveVertex(rxend[i], rybeg[i]);
   rgraphics.endShape();
     
     rybeg[i] += random(-jita,jita);
  rymid[i] += random(-jita,jita);
 rxmid[i] += random(-jita,jita);
  ryend[i] += random(-jita,jita);
  
   if (rybeg[i] <= 0 || rybeg[i] >= height){
    rybeg[i] = height/2+random(-50,50);
  }
  
 if (rymid[i] <= 0 || rymid[i] >= height|| rymid[i] <= rybeg[i] - (rst[i]/bend) || rymid[i] >= rybeg[i] + (rst[i])/bend){
    rymid[i] = rybeg[i] + random(-rst[i]/bend,rst[i]/bend);
  }
  
   if (rxmid[i] <= 0 || rxmid[i] >= width){
    rxmid[i] = height/2+random(-50,50);
  }
  if (ryend[i] <= 0 || ryend[i] >= width){
    ryend[i] = height/2+random(-50,50);
  }
  }
   
     j++
  j = 0;
   image(rgraphics, 0,0,width,height);
     
 
}

function blu(){
   jita = flux;
  //frameRate(1);
    bgraphics.blendMode(BLEND);

// wig1();
// wig2();
 // wig3();

  
  for (i = 0; i<10; i++){
d = alpha[i];    
       alpha[i] += random(-jita,jita);
     if (alpha[i] <= 5 || alpha [i] >= 255){
      alpha[i] = random(range, 255);
    }
  }
  bgraphics.fill(alpha[0], alpha[0], 255);
  bgraphics.noStroke();
 bgraphics.rect(-100, -100, width * 2, height * 2);
bgraphics.noFill();

   for (i=0; i<num; i++){
bst[i] += random(-jita,jita);
   if (bst[i] <= 5 || bst[i] >= height/2){
    bst[i] = height/10;
   }
      bgraphics.stroke(alpha[i+1], alpha[i+1], 255);
   bgraphics.strokeWeight(bst[i]);
 bgraphics.beginShape();
 bgraphics.curveVertex(int(bxbeg[i]), bybeg[i]);
 bgraphics.curveVertex(bxbeg[i], bybeg[i]);
 bgraphics.curveVertex(bxmid[i], bymid[i]);
   bgraphics.curveVertex(bxend[i], bybeg[i]);
    bgraphics.curveVertex(bxend[i], bybeg[i]);
   bgraphics.endShape();
     bybeg[i] += random(-jita,jita);
  bymid[i] += random(-jita,jita);
 bxmid[i] += random(-jita,jita);
  byend[i] += random(-jita,jita);
  
   if (bybeg[i] <= 0 || bybeg[i] >= height){
    bybeg[i] = height/2+random(-50,50);
  }
  
 if (bymid[i] <= 0 || bymid[i] >= height|| bymid[i] <= bybeg[i] - (bst[i]/bend) || bymid[i] >= bybeg[i] + (bst[i])/bend){
    bymid[i] = bybeg[i] + random(-bst[i]/bend,bst[i]/bend);
  }
  
   if (bxmid[i] <= 0 || bxmid[i] >= width){
    bxmid[i] = height/2+random(-50,50);
  }
  if (byend[i] <= 0 || byend[i] >= width){
    byend[i] = height/2+random(-50,50);
  }
  }
   
     j++
  j = 0;
   image(bgraphics, 0,0,width,height);
     

   
}

function yell(){
    jita = flux;
  //frameRate(1);
    ygraphics.blendMode(BLEND);

// wig1();
// wig2();
 // wig3();

  
  for (i = 40; i<50; i++){
d = alpha[i];    
       alpha[i] += random(-jita,jita);
     if (alpha[i] <= 5 || alpha [i] >= 255){
      alpha[i] = random(range, 255);
    }
  }
  ygraphics.fill(255, 255, alpha[40]);
  ygraphics.noStroke();
 ygraphics.rect(-100, -100, width * 2, height * 2);
ygraphics.noFill();

   for (i=0; i<num; i++){
yst[i] += random(-jita,jita);
   if (yst[i] <= 5 || yst[i] >= height/2){
    yst[i] = height/10;
   }
  ygraphics.fill(255, 255, alpha[i+41]);
   ygraphics.strokeWeight(yst[i]);
 ygraphics.beginShape();
 ygraphics.curveVertex(yxbeg[i], yybeg[i]);
 ygraphics.curveVertex(yxbeg[i], yybeg[i]);
 ygraphics.curveVertex(yxmid[i], yymid[i]);
   ygraphics.curveVertex(yxend[i], yybeg[i]);
    ygraphics.curveVertex(yxend[i], yybeg[i]);
   ygraphics.endShape();
  }
   
     j++
  j = 0;
   image(ygraphics, 0,0,width,height);
     
     for (i=0; i<num; i++){
       
       yybeg[i] += random(-jita,jita);
  yymid[i] += random(-jita,jita);
 yxmid[i] += random(-jita,jita);
  yyend[i] += random(-jita,jita);
  
   if (yybeg[i] <= 0 || yybeg[i] >= height){
    yybeg[i] = height/2+random(-50,50);
  }
  
 if (yymid[i] <= 0 || yymid[i] >= height|| yymid[i] <= yybeg[i] - (yst[i]/bend) || yymid[i] >= yybeg[i] + (yst[i])/bend){
    yymid[i] = yybeg[i] + random(-yst[i]/bend,yst[i]/bend);
  }
  
   if (yxmid[i] <= 0 || yxmid[i] >= width){
    yxmid[i] = height/2+random(-50,50);
  }
  if (yyend[i] <= 0 || yyend[i] >= width){
    yyend[i] = height/2+random(-50,50);
  }
     }
}


function mage(){
    jita = flux;
  //frameRate(1);
    mgraphics.blendMode(BLEND);

// wig1();
// wig2();
 // wig3();

  
  for (i = 50; i<60; i++){
d = alpha[i];    
       alpha[i] += random(-jita,jita);
     if (alpha[i] <= 5 || alpha [i] >= 255){
      alpha[i] = random(range, 255);
    }
  }
  mgraphics.fill(255, alpha[40], 255);
  mgraphics.noStroke();
 mgraphics.rect(-100, -100, width * 2, height * 2);
mgraphics.noFill();

   for (i=0; i<num; i++){
mst[i] += random(-jita,jita);
   if (mst[i] <= 5 || mst[i] >= height/2){
    mst[i] = height/10;
   }
  mgraphics.fill(255, alpha[i+41], 255);
   mgraphics.strokeWeight(mst[i]);
 mgraphics.beginShape();
 mgraphics.curveVertex(mxbeg[i], mybeg[i]);
 mgraphics.curveVertex(mxbeg[i], mybeg[i]);
 mgraphics.curveVertex(mxmid[i], mymid[i]);
   mgraphics.curveVertex(mxend[i], mybeg[i]);
    mgraphics.curveVertex(mxend[i], mybeg[i]);
   mgraphics.endShape();
     
       mybeg[i] += random(-jita,jita);
  mymid[i] += random(-jita,jita);
 mxmid[i] += random(-jita,jita);
  myend[i] += random(-jita,jita);
  
   if (mybeg[i] <= 0 || mybeg[i] >= height){
    mybeg[i] = height/2+random(-50,50);
  }
  
 if (mymid[i] <= 0 || mymid[i] >= height|| mymid[i] <= mybeg[i] - (mst[i]/bend) || mymid[i] >= mybeg[i] + (mst[i])/bend){
    mymid[i] = mybeg[i] + random(-mst[i]/myend,mst[i]/bend);
  }
  
   if (mxmid[i] <= 0 || mxmid[i] >= width){
    mxmid[i] = height/2+random(-50,50);
  }
  if (myend[i] <= 0 || myend[i] >= width){
    myend[i] = height/2+random(-50,50);
  }
  }
   
     j++
  j = 0;
   image(mgraphics, 0,0,width,height);
     
  
}

function bebop(){
  
  
}

