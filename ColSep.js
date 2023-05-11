function colsep(){
 // graphics.background(0);
rectMode(CENTER);
  imageMode(CORNER);
 
 
  blendMode(BLEND);
  
greenPlate();
 
blendMode(MULTIPLY);
  
   magentaplate();
redplate();
//blendMode(BLEND);
blueplate();
  cyanplate();
  yellowplate();
  print(alp);

  
 // blendMode(BLEND);
  //print(galpha[2]);
  
    for (i = 0; i < 6; i++){
       
    st[i] = st[i] +random(-1,1);    
     if (st[i] <= 5 || st[i] >= 200){
       
       st[i] = round(random(150));
       
     }
     
  
  }
  
  if (ralpha[0] <= 10 || ralpha[0] >=220 || galpha[0] <= 10 || galpha[0] >=220 || balpha[0] <= 10 || balpha[0] >=220 || malpha[0] <= 10 || malpha[0] >=220 || calpha[0] <= 10 || calpha[0] >=220 || yalpha[0] <= 10 || yalpha[0] >=220) {
 
  }
  
  /*for (i = 0; i < ralpha.length; i++){
    
    alp = alp + ralpha[i] +galpha[i] + balpha[i] + calpha[i] + malpha[i] + yalpha[i];
    
    if (alp > (ralpha.length+ galpha.length + balpha.length+calpha.length + malpha.length+ yalpha.length)*1000){
      
      alp = 0;
    }
  }
  */

}


function redplate() {
  rgraphics.blendMode(BLEND);

   rgraphics.noStroke();
 rgraphics.fill(255, ralpha[0], ralpha[0]);
 rgraphics.rect(-100, -100, width * 2, height * 2);

 
 rxbound = rxbound + random(-2,2);
  if (rxbound > width/1.25 || rxbound < width/6){
  
    rxbound = width/2;
  }
  
   rybound = rybound + random(-2,2);
  if (rybound > width/1.25 || rybound < width/6){
    rybound = width/2;
  }
  rgraphics.noFill();

  rgraphics.strokeWeight(st[0]);

  rgraphics.stroke(255, ralpha[1], ralpha[1]);
  rgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 rgraphics.beginShape();

  for (i = 0; i < redWigs.length; i++) {
    rgraphics.curveVertex(redWigs[i][0], redWigs[i][1]);
  }
  rgraphics.endShape();


  for (i = 0; i < redWigs.length; i++) {
    for (j = 0; j < redWigs[i].length; j++){
    redWigs[i][j] += random(-jita, jita);
             if (redWigs[i][0] > rxbound-st[0] || redWigs[i][0] < 0+st[0]) {
        redWigs[i][0] = random(rxbound);
      }
      if (redWigs[i][1] > rybound-st[0]|| redWigs[i][1] < 0+st[0]){
        redWigs[i][1] = random(rybound);
      }
      }
  }
  
  rgraphics.strokeWeight(st[1]);

  rgraphics.stroke(255, ralpha[2], ralpha[2]);
  rgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 rgraphics.beginShape();

  for (i = 0; i < redWigs2.length; i++) {
    rgraphics.curveVertex(redWigs2[i][0], redWigs2[i][1]);
  }
  rgraphics.endShape();


  for (i = 0; i < redWigs2.length; i++) {
    for (j = 0; j < redWigs2[i].length; j++){
    redWigs2[i][j] += random(-flux, flux);
             if (redWigs2[i][0] > width-st[1] || redWigs2[i][0] < rxbound+st[1]) {
        redWigs2[i][0] = random(rxbound, width);
      }
      if (redWigs2[i][1] > height-st[1]|| redWigs2[i][1] < 0+st[1]){
        redWigs2[i][1] = random(rybound, height);
      }
      }
  }
  
  
    for (i = 0; i < ralpha.length; i++){
    ralpha[i] += random(-jita, jita);
      ralpha[i] = abs(ralpha[i]);
      if (ralpha[i] > 255 || ralpha[i] < 100){
  
        ralpha[i] = random(255);
      }
  }


  
  image(rgraphics, 0,0,width,height);
  rgraphics.blendMode(MULTIPLY);
 
  
  
}


function greenPlate() {
  
graphics.blendMode(BLEND);
   graphics.noStroke();
 graphics.fill(galpha[0], 255, galpha[0]);
 graphics.rect(-100, -100, width * 2, height * 2);

  gbound = gbound + random(-2,2);
  if (gbound > height/1.25 || gbound < height/6){
    gbound = height/2;
  }
 
  graphics.noFill();

  graphics.strokeWeight(st[2]);

  graphics.stroke(galpha[1], 255, galpha[1]);
  graphics.noFill();
 graphics.blendMode(BLEND);
 graphics.beginShape();

  for (i = 0; i < greenWigs.length; i++) {
    graphics.curveVertex(greenWigs[i][0], greenWigs[i][1]);
  }
  graphics.endShape();

  for (i = 0; i < greenWigs.length; i++) {
    for (j = 0; j < greenWigs[i].length; j++){
    greenWigs[i][j] += random(-jita, jita);
             if (greenWigs[i][0] > width-st[2] || greenWigs[i][0] < 0+st[2]) {
        greenWigs[i][0] = random(width);
      }
      if (greenWigs[i][1] > gbound-st[2]|| greenWigs[i][1] < 0+st[2]){
        
        greenWigs[i][1] = random(gbound);
      }
      }
  }
   graphics.strokeWeight(st[3]);
  graphics.stroke(galpha[2], 255, galpha[2]);
  graphics.beginShape();

  for (i = 0; i < greenWigs2.length; i++) {
    graphics.curveVertex(greenWigs2[i][0], greenWigs2[i][1]);
  }
  graphics.endShape();

  for (i = 0; i < greenWigs2.length; i++) {
    for (j = 0; j < greenWigs2[i].length; j++){
    greenWigs2[i][j] += random(-jita, jita);
             if (greenWigs2[i][0] > width-st[3] || greenWigs2[i][0] < 0+st[3]) {
        greenWigs2[i][0] = random(width);
      }
      if (greenWigs2[i][1] > height-st[3]|| greenWigs2[i][1] < gbound+st[3]){
        greenWigs2[i][1] = random(gbound,height);
      }
      }
  }
  
  
    for (i = 0; i < galpha.length; i++){
    galpha[i] += random(-jita, jita);
      galpha[i] = round(galpha[i]);
      if (galpha[i] > 255 || galpha[i] < 100){
         
        galpha[i] = random(255);
      }
  }


  
  image(graphics, 0,0,width,height);
  graphics.blendMode(MULTIPLY);
  

}

function blueplate() {
  bgraphics.blendMode(BLEND);

   bgraphics.noStroke();
 bgraphics.fill(balpha[0], balpha[0], 255);
 bgraphics.rect(-100, -100, width * 2, height * 2);

 
 
  bgraphics.noFill();

  bgraphics.strokeWeight(st[4]);

  bgraphics.stroke(balpha[1], balpha[1], 255);
  bgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 bgraphics.beginShape();

  for (i = 0; i < blueWigs.length; i++) {
    bgraphics.curveVertex(blueWigs[i][0], blueWigs[i][1]);
  }
  bgraphics.endShape();

  for (i = 0; i < blueWigs.length; i++) {
    for (j = 0; j < blueWigs[i].length; j++){
    blueWigs[i][j] += random(-jita, jita);
             if (blueWigs[i][0] > width-st[4] || blueWigs[i][0] < 0+st[4]) {
              
        blueWigs[i][0] = random(width);
                   
      }
      if (blueWigs[i][1] > height-st[4]|| blueWigs[i][1] < 0+st[4]){
  
        blueWigs[i][1] = random(height);
      }
      }
  }
  
  bgraphics.strokeWeight(st[5]);

  bgraphics.stroke(balpha[2], balpha[2], 255);
  bgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 bgraphics.beginShape();

  for (i = 0; i < blueWigs2.length; i++) {
    bgraphics.curveVertex(blueWigs2[i][0], blueWigs2[i][1]);
  }
  bgraphics.endShape();

  for (i = 0; i < blueWigs2.length; i++) {
    for (j = 0; j < blueWigs2[i].length; j++){
    blueWigs2[i][j] += random(-jita, jita);
             if (blueWigs2[i][0] > width-st[5] || blueWigs2[i][0] < 0+st[5]) {
        blueWigs2[i][0] = random(width);
      }
      if (blueWigs2[i][1] > height-st[5]|| blueWigs2[i][1] < 0+st[5]){
        blueWigs2[i][1] = random(height);
      }
      }
  }
 // print(rxbound)
  
  
    for (i = 0; i < balpha.length; i++){
    balpha[i] += random(-jita, jita);
      balpha[i] = abs(balpha[i]);
      if (balpha[i] > 255 || balpha[i] < 100){
       
        balpha[i] = random(255);
      }
  }


  
  image(bgraphics, 0,0,width,height);
  bgraphics.blendMode(MULTIPLY);
  

}


function cyanplate() {
  cgraphics.blendMode(BLEND);

   cgraphics.noStroke();
 cgraphics.fill(calpha[0], 255, 255);
 cgraphics.rect(-100, -100, width * 2, height * 2);

 
 cbound = cbound + random(-2,2);
  if (cbound > width/1.25 || cbound < width/6){
    cbound = width/2;
  }
  cgraphics.noFill();

  cgraphics.strokeWeight(st[0]);

  cgraphics.stroke(calpha[1], 255, 255);
  cgraphics.noFill();
 //cgraphics.blendMode(BLEND);
 cgraphics.beginShape();

  for (i = 0; i < cyanWigs.length; i++) {
    cgraphics.curveVertex(cyanWigs[i][0], cyanWigs[i][1]);
  }
  cgraphics.endShape();


  for (i = 0; i < cyanWigs.length; i++) {
    for (j = 0; j < cyanWigs[i].length; j++){
    cyanWigs[i][j] += random(-jita, jita);
             if (cyanWigs[i][0] > cbound-st[0] || cyanWigs[i][0] < 0+st[0]) {
        cyanWigs[i][0] = random(cbound);
      }
      if (cyanWigs[i][1] > height-st[0]|| cyanWigs[i][1] < 0+st[0]){
        cyanWigs[i][1] = random(height);
      }
      }
  }
  
  cgraphics.strokeWeight(st[1]);

  cgraphics.stroke(calpha[2], 255, 255);
  cgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 cgraphics.beginShape();

  for (i = 0; i < cyanWigs2.length; i++) {
    cgraphics.curveVertex(cyanWigs2[i][0], cyanWigs2[i][1]);
  }
  cgraphics.endShape();


  for (i = 0; i < cyanWigs2.length; i++) {
    for (j = 0; j < cyanWigs2[i].length; j++){
    cyanWigs2[i][j] += random(-jita, jita);
             if (cyanWigs2[i][0] > width-st[1] || cyanWigs2[i][0] < cbound+st[1]) {
        cyanWigs2[i][0] = random(cbound, width);
      }
      if (cyanWigs2[i][1] > height-st[1]|| cyanWigs2[i][1] < 0+st[1]){
        cyanWigs2[i][1] = random(height);
      }
      }
  }
  
  
    for (i = 0; i < calpha.length; i++){
    calpha[i] += random(-jita, jita);
      calpha[i] = abs(calpha[i]);
      if (calpha[i] > 255 || calpha[i] < 100){
        
        calpha[i] = random(255);
      }
  }


  
  image(cgraphics, 0,0,width,height);
  cgraphics.blendMode(MULTIPLY);
 
  
  
}


function magentaplate() {
  mgraphics.blendMode(BLEND);

   mgraphics.noStroke();
 mgraphics.fill(255, malpha[0], 255);
 mgraphics.rect(-100, -100, width * 2, height * 2);

 
 mbound = mbound + random(-2,2);
  if (mbound > width/1.25 || mbound < width/6){
    mbound = width/2;
  }
  mgraphics.noFill();

  mgraphics.strokeWeight(st[0]);

  mgraphics.stroke(255, malpha[1], 255);
  mgraphics.noFill();
 //cgraphics.blendMode(BLEND);
 mgraphics.beginShape();

  for (i = 0; i < magentaWigs.length; i++) {
    mgraphics.curveVertex(magentaWigs[i][0], magentaWigs[i][1]);
  }
  mgraphics.endShape();


  for (i = 0; i < magentaWigs.length; i++) {
    for (j = 0; j < magentaWigs[i].length; j++){
    magentaWigs[i][j] += random(-jita, jita);
             if (magentaWigs[i][0] > mbound-st[0] || magentaWigs[i][0] < 0+st[0]) {
        magentaWigs[i][0] = random(mbound);
      }
      if (magentaWigs[i][1] > height-st[0]|| magentaWigs[i][1] < 0+st[0]){
        magentaWigs[i][1] = random(height);
      }
      }
  }
  
  mgraphics.strokeWeight(st[1]);

  mgraphics.stroke(255, malpha[2], 255);
  mgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 mgraphics.beginShape();

  for (i = 0; i < magentaWigs2.length; i++) {
    mgraphics.curveVertex(magentaWigs2[i][0], magentaWigs2[i][1]);
  }
  mgraphics.endShape();


  for (i = 0; i < magentaWigs2.length; i++) {
    for (j = 0; j < magentaWigs2[i].length; j++){
    magentaWigs2[i][j] += random(-jita, jita);
             if (magentaWigs2[i][0] > width-st[1] || magentaWigs2[i][0] < mbound+st[1]) {
        magentaWigs2[i][0] = random(mbound, width);
      }
      if (magentaWigs2[i][1] > height-st[1]|| magentaWigs2[i][1] < 0+st[1]){
        magentaWigs2[i][1] = random(height);
      }
      }
  }
  
  
    for (i = 0; i < malpha.length; i++){
    malpha[i] += random(-jita, jita);
      malpha[i] = abs(malpha[i]);
      if (malpha[i] > 255 || malpha[i] < 100){
       
        malpha[i] = random(255);
      }
  }


  
  image(mgraphics, 0,0,width,height);
  mgraphics.blendMode(MULTIPLY);
 
  
  
}

function yellowplate() {
  ygraphics.blendMode(BLEND);

   ygraphics.noStroke();
 ygraphics.fill(255, 255, yalpha[0]);
 ygraphics.rect(-100, -100, width * 2, height * 2);

 
 ybound = ybound + random(-2,2);
  if (ybound > width/1.25 || ybound < width/6){
    ybound = width/2;
  }
  ygraphics.noFill();

  ygraphics.strokeWeight(st[0]);

  ygraphics.stroke(255, 255, yalpha[1]);
  ygraphics.noFill();
 //cgraphics.blendMode(BLEND);
 ygraphics.beginShape();

  for (i = 0; i < yellowWigs.length; i++) {
    ygraphics.curveVertex(yellowWigs[i][0], yellowWigs[i][1]);
  }
  ygraphics.endShape();


  for (i = 0; i < yellowWigs.length; i++) {
    for (j = 0; j < yellowWigs[i].length; j++){
    yellowWigs[i][j] += random(-jita, jita);
             if (yellowWigs[i][0] > ybound-st[0] || yellowWigs[i][0] < 0+st[0]) {
              
        yellowWigs[i][0] = random(ybound);
      }
      if (yellowWigs[i][1] > height-st[0]|| yellowWigs[i][1] < 0+st[0]){
      
        yellowWigs[i][1] = random(height);
      }
      }
  }
  
  ygraphics.strokeWeight(st[1]);

  ygraphics.stroke(255, 255, yalpha[2]);
  ygraphics.noFill();
 //rgraphics.blendMode(BLEND);
 ygraphics.beginShape();

  for (i = 0; i < yellowWigs2.length; i++) {
    mgraphics.curveVertex(yellowWigs2[i][0], yellowWigs2[i][1]);
  }
  ygraphics.endShape();


  for (i = 0; i < yellowWigs2.length; i++) {
    for (j = 0; j < yellowWigs2[i].length; j++){
    yellowWigs2[i][j] += random(-jita, jita);
             if (yellowWigs2[i][0] > width-st[1] || yellowWigs2[i][0] < ybound+st[1]) {
                
        yellowWigs2[i][0] = random(ybound, width);
      }
      if (yellowWigs2[i][1] > height-st[1]|| yellowWigs2[i][1] < 0+st[1]){
          
        yellowWigs2[i][1] = random(height);
      }
      }
  }
  
  
    for (i = 0; i < yalpha.length; i++){
    yalpha[i] += random(-jita, jita);
      yalpha[i] = abs(yalpha[i]);
      if (yalpha[i] > 255 || yalpha[i] < 100){
        yalpha[i] = random(255);
      }
  }


  
  image(ygraphics, 0,0,width,height);
  ygraphics.blendMode(MULTIPLY);
 
  
  
}
function colsepsetup(){

  imageMode(CORNER);
  rxbound = random(width/2);
  rybound = random(height/2);
  gbound = random(height/2);
  numWigs = 10;
  for (i=0; i<10; i++){
     area[i] = [];
    for (j=0; j<4; j++){
     area[i][j] = [random(width),random(height),random(width), random(height)];
    }
    
  }
gnum = round(random(4,7));
  rnum = round(random(4,7));
  bnum = round(random(4,7));
  cnum = round(random(4,7));
  mnum = round(random(4,7));
  ynum = round(random(4,7));
  
  gnum1 = round(random(4,7));
  rnum1 = round(random(4,7));
  bnum1 = round(random(4,7));
  
  cnum1 = round(random(4,7));
  mnum1 = round(random(4,7));
  ynum1 = round(random(4,7));
  
  
    x = random(5, height / 4);
  y = random(5, height / 4);
    jita = 2;

     for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    greenWigs[i] = [];
    for (j = 0; j < gnum; j++){
      greenWigs[j] = []
      greenWigs[j] = [int(random(width)), int(random(height))];
    
  }
  }
  
    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    greenWigs2[i] = [];
    for (j = 0; j < gnum1; j++){
      greenWigs2[j] = []
      greenWigs2[j] = [int(random(width)), int(random(height))];
    
  }
  }
     for (i = 0; i < 3; i++){
    galpha[i] = random(200);    
  }
     for (i = 0; i < 6; i++){
    st[i] = random(400);    
       
    st[i] = st[i] +random(-1,1);    

     
  
  }



    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    redWigs[i] = [];
    for (j = 0; j < rnum; j++){
     redWigs[j] = []
      redWigs[j] = [int(random(width)), int(random(height))];
    }
  }
   for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    redWigs2[i] = [];
    for (j = 0; j < rnum1; j++){
     redWigs2[j] = []
      redWigs2[j] = [int(random(width)), int(random(height))];
    }
  }
     for (i = 0; i < 3; i++){
    ralpha[i] = random(200);    
  }
  
     for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    blueWigs[i] = [];
    for (j = 0; j < bnum; j++){
      blueWigs[j] = []
      blueWigs[j] = [int(random(width)), int(random(height))];
    }
  }
  
   for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    blueWigs2[i] = [];
    for (j = 0; j < bnum1; j++){
      blueWigs2[j] = []
      blueWigs2[j] = [int(random(width)), int(random(height))];
    }
  }
  
     for (i = 0; i < 3; i++){
    balpha[i] = random(200);    
  }
  
 
    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    cyanWigs[i] = [];
    for (j = 0; j < gnum; j++){
      cyanWigs[j] = []
      cyanWigs[j] = [int(random(width)), int(random(height))];
    
  }
  }
  
    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    cyanWigs2[i] = [];
    for (j = 0; j < gnum1; j++){
      cyanWigs2[j] = []
      cyanWigs2[j] = [int(random(width)), int(random(height))];
    
  }
  }
     for (i = 0; i < 3; i++){
    calpha[i] = random(200);    
  }
     for (i = 0; i < 6; i++){
    st[i] = random(400);    
       
    st[i] = st[i] +random(-1,1);    

     
  
  }

    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    magentaWigs[i] = [];
    for (j = 0; j < mnum; j++){
      magentaWigs[j] = []
      magentaWigs[j] = [int(random(width)), int(random(height))];
    
  }
  }
  
    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    magentaWigs2[i] = [];
    for (j = 0; j < mnum1; j++){
      magentaWigs2[j] = [];
      magentaWigs2[j] = [int(random(width)), int(random(height))];
    
  }
  }
     for (i = 0; i < 3; i++){
    malpha[i] = random(200);    
  }
     for (i = 0; i < 6; i++){
    st[i] = random(400);    
       
    st[i] = st[i] +random(-1,1);    

     
  
  }

 for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    yellowWigs[i] = [];
    for (j = 0; j < gnum; j++){
      yellowWigs[j] = []
      yellowWigs[j] = [int(random(width)), int(random(height))];
    
  }
  }
  
    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    yellowWigs2[i] = [];
    for (j = 0; j < gnum1; j++){
      yellowWigs2[j] = []
      yellowWigs2[j] = [int(random(width)), int(random(height))];
    
  }
  }
     for (i = 0; i < 3; i++){
    yalpha[i] = random(200);    
  }
     for (i = 0; i < 6; i++){
    st[i] = random(400);    
       
    st[i] = st[i] +random(-1,1);    

     
  
  }
    alp = 0;
}

