function signsetup() {
  imageMode(CENTER);
  rot = 0;
  grad1 = createGraphics(displayWidth, displayHeight);
  grad2 = createGraphics(displayWidth, displayHeight);
  signGalpha = random(100);
  signBalpha = random(150, 255);
  signRalpha = random(100);

  w = color(255);
 angleMode(DEGREES);
  signStroke = int(random(width / 30));
}

function sign() {
    
  
blendMode(BLEND);
  noStroke();
  if (rot <= 0 || rot >= 180) {
    for (i = 0; i < 10; i++) {
      wigNumx[i] = random(displayWidth / 3, (displayWidth / 3) * 2);
      wigNumy[i] = random(displayHeight / 3, (displayHeight / 3) * 2);
      signStroke = int(random(width / 30));
      signGalpha = signGalpha + random(-1, 1);
      signBalpha = signBalpha + random(-1, 1);
      signRalpha = signRalpha + random(-1, 1);
      
    }
    rot = 0;
  }
  

  rectMode(CENTER);
  // fill(0,0,255);
  push();
  translate(displayWidth / 2, displayHeight / 2);
  rotate(rot);
  scale(2);
 // blendMode(MULTIPLY);
  //rect(0,0,displayWidth, displayHeight);
  gradient2();
  pop();
  push();
  translate(-displayWidth / 2, -displayHeight / 2);
  scale(2);
  gradient1();
  pop();
rot += 1/3;
  //print(rot);
}

function gradient1() {
  grad1.push();

  grad1.blendMode(BLEND);
  //grad1.strokeWeight(1);
  grad1.fill(signBalpha, signBalpha, 255);
  grad1.rect(0, 0, width, height);
  grad1.blendMode(MULTIPLY);
  var gSign = color(signGalpha, 255, signGalpha);
  for (var a = 0; a < width; a++) {
    var interx = map(a, 0, width, 1, 0);
    var g1 = lerpColor(gSign, w, interx);
    grad1.stroke(g1);
    grad1.line(a, 0, a, height);
  }
  var rSign = color(255, signRalpha, signRalpha);
  for (var b = 0; b < height; b++) {
    var intery = map(b, 0, height, 1, 0);
    var r1 = lerpColor(rSign, w, intery);
    grad1.stroke(r1);
    grad1.line(0, b, width, b);
  }

  grad1.blendMode(BLEND);
  grad1.noFill();
  grad1.strokeWeight(signStroke);
  grad1.erase();
  grad1.beginShape();
  for (i = 0; i < 10; i++) {
    grad1.curveVertex(wigNumx[i], wigNumy[i]);
  }

  grad1.endShape();

  // grad1.noStroke();
  grad1.noErase();
  imageMode(CENTER);
  push();
  image(grad1, width / 2, height / 2);
  grad1.pop();
}

function gradient2() {
  grad2.blendMode(BLEND);
  grad2.fill(signBalpha, signBalpha, 255);
  grad2.rect(0, 0, width, height);
  grad2.blendMode(MULTIPLY);
  var gSign = color(signGalpha, 255, signGalpha);
  for (var a = 0; a < width; a++) {
    var interx = map(a, 0, width, 1, 0);
    var g1 = lerpColor(gSign, w, interx);
    grad2.stroke(g1);
    grad2.line(a, 0, a, height);
  }

  var rSign = color(255, signRalpha, signRalpha);
  for (var b = 0; b < height; b++) {
    var intery = map(b, 0, height, 1, 0);
    var r1 = lerpColor(rSign, w, intery);
    grad2.stroke(r1);
    grad2.line(0, b, width, b);
  }
//  grad2.stroke(r1, 0);
  //noLoop();
  noStroke();
  imageMode(CENTER);
  push();
  //translate(width/2, height/2)
  rotate(rot);
  imageMode(CENTER);
  stroke(0, 0);
  image(grad2, 0, 0);
  pop();
}

