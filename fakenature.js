
function fakenaturesetup(){
 // background(255);
 
   r= random(255);
  g = random(255);
  b = random(255);
  m = random(255);
 c = random(255);
   y = random(255);
//  background(255, 255, 255);
 

  my = random(height);
  cy = random(height);
  yy = random(height);
  ry = random(height);
  gy = random(height);
  by = random(height);

}

function fakeNature(){
  rectMode(CENTER);
blendMode(BLEND);
rplate();
  blendMode(MULTIPLY);
gplate();
bplate();
  mplate();
  yplate();
  cplate();
 

 
}

function cplate(){
  cgraphics.blendMode(BLEND);
   cgraphics.noStroke();
    for (x=0;
x <= width;
x = x + 1, cy=cy+random(-cz*0.01,cz*0.01)) {

if (cz<=100) {
cz=100;
}

if (cz >= width/2) {
cz= width/2;
}
if (cy<=5){
c = c + random(-0.5, 0.5);


cgraphics.fill(c,255,255);

cgraphics.ellipse(x, cy, cz, cz);

}

else if (cy<=50 && cy>=6){
c = c + random(-0.5, 0.5);
cgraphics.fill(c,255,255);

cgraphics.ellipse(x, cy, cz, cz);

}

else if (cy<=150 && cy>=51){ 
c = c + random(-0.5, 0.5);

cgraphics.fill(c,255,255);

cgraphics.ellipse(x, cy, cz, cz);

}

else if (cy<=height/2 && cy>=151){
c = c + random(-0.5, 0.5);

cgraphics.fill(c,255,255);

cgraphics.ellipse(x, cy, cz, cz);

}

else if (cy<=height && cy>=height/2){
c = c + random(-0.5, 0.5);

cgraphics.fill(c,255,255);

cgraphics.ellipse(x, cy, cz, cz);
}
}

if (cy <= 3) { 
cy=cy+2;
}

else if (cy >= height-3) {
cy=cy-2;
}

if (c <= 0 || c >=255) {
c=200;
}


cz = cz + random(-2, 2)


if (cz <= 100 || cz >= width/2) {
cz = 200;
}
  image(cgraphics, 0,0,width,height);

blendMode(MULTIPLY);
}


function yplate(){
  ygraphics.blendMode(BLEND);
   ygraphics.noStroke();
    for (x=0;
x <= width;
x = x + 1, yy=yy+random(-yz*0.01,yz*0.01)) {

if (yz<=100) {
yz=100;
}

if (yz >= width/2) {
yz= width/2;
}
if (yy<=5){
y = y + random(-0.5, 0.5);


ygraphics.fill(255,255,y);

ygraphics.ellipse(x, yy, yz, yz);

}

else if (yy<=50 && yy>=6){
y = y + random(-0.5, 0.5);
ygraphics.fill(255,255,y);

ygraphics.ellipse(x, yy, yz, yz);

}

else if (yy<=150 && yy>=51){ 
y = y + random(-0.5, 0.5);

ygraphics.fill(255,255,y);

ygraphics.ellipse(x, yy, yz, yz);

}

else if (yy<=height/2 && yy>=151){
y = y + random(-0.5, 0.5);

ygraphics.fill(255,255,y);

ygraphics.ellipse(x, yy, yz, yz);

}

else if (yy<=height && yy>=height/2){
y = y + random(-0.5, 0.5);

ygraphics.fill(255,255,y);

ygraphics.ellipse(x, yy, yz, yz);
}
}

if (yy <= 3) { 
yy=yy+2;
}

else if (yy >= height-3) {
yy=yy-2;
}

if (y <= 0 || y >=255) {
y=200;
}


yz = yz + random(-2, 2)


if (yz <= 100 || yz >= width/2) {
yz = 200;
}
  image(ygraphics, 0,0,width,height);
ygraphics.blendMode(MULTIPLY);

}

function mplate(){
  mgraphics.blendMode(BLEND);
   mgraphics.noStroke();
    for (x=0;
x <= width;
x = x + 1, my=my+random(-mz*0.01,mz*0.01)) {

if (mz<=100) {
mz=100;
}

if (mz >= width/2) {
mz= width/2;
}
if (my<=5){
m = m + random(-0.5, 0.5);


mgraphics.fill(255,m,255);

mgraphics.ellipse(x, my, mz, mz);

}

else if (my<=50 && my>=6){
m = m + random(-0.5, 0.5);

mgraphics.fill(255,m,255);

mgraphics.ellipse(x, my, mz, mz);

}

else if (my<=150 && my>=51){ 
m = m + random(-0.5, 0.5);

mgraphics.fill(255,m,255);

mgraphics.ellipse(x, my, mz, mz);

}

else if (my<=height/2 && my>=151){
m = m + random(-0.5, 0.5);

mgraphics.fill(255,m,255);

mgraphics.ellipse(x, my, mz, mz);

}

else if (my<=height && my>=height/2){
m = m + random(-0.5, 0.5);

mgraphics.fill(255,m,255);

mgraphics.ellipse(x, my, mz, mz);
}
}

if (my <= 3) { 
my=my+2;
}

else if (my >= height-3) {
my=my-2;
}

if (m <= 0 || m >=255) {
m=200;
}


mz = mz + random(-2, 2)


if (mz <= 100 || mz >= width/2) {
mz = 200;
}
  image(mgraphics, 0,0,width,height);

mgraphics.blendMode(MULTIPLY);
}

function bplate(){
  
  bgraphics.blendMode(BLEND);
   bgraphics.noStroke();
    for (x=0;
x <= width;
x = x + 1, by=by+random(-bz*0.01,bz*0.01)) {

if (bz<=100) {
bz=100;
}

if (bz >= width/2) {
bz= width/2;
}
if (by<=5){
b = b + random(-0.5, 0.5);


bgraphics.fill(b,b,255);

bgraphics.ellipse(x, by, bz, bz);

}

else if (by<=50 && by>=6){
b = b + random(-0.5, 0.5);

bgraphics.fill(b,b,255);

bgraphics.ellipse(x, by, bz, bz);

}

else if (by<=150 && by>=51){ 
b = b + random(-0.5, 0.5);

bgraphics.fill(b,b,255);

bgraphics.ellipse(x, by, bz, bz);

}

else if (by<=height/2 && by>=151){
b = b + random(-0.5, 0.5);

bgraphics.fill(b,b,255);

bgraphics.ellipse(x, by, bz, bz);

}

else if (by<=height && by>=height/2){
b = b + random(-0.5, 0.5);

bgraphics.fill(b,b,255);

bgraphics.ellipse(x, by, bz, bz);
}
}

if (by <= 3) { 
by=by+2;
}

else if (by >= height-3) {
by=by-2;
}

if (b <= 0 || b >=255) {
b=200;
}


bz = bz + random(-2, 2)


if (bz <= 50 || bz >= width/2) {
bz = 100;
}
  image(bgraphics, 0,0,width,height);

  bgraphics.blendMode(MULTIPLY);
}
function gplate(){
 ggraphics.blendMode(BLEND);
  ggraphics.noStroke();
    for (x=0;
x <= width;
x = x + 1, gy=gy+random(-gz*0.015,gz*0.015)) {

if (gz<=50) {
gz=50;
}

if (gz >= width/2) {
gz= width/2;
}
if (y<=5){
g = g + random(-0.5, 0.5);


ggraphics.fill(g,255,g);

ggraphics.ellipse(x, gy, gz, gz);

}

else if (gy<=50 && gy>=6){
g = g + random(-0.5, 0.5);

ggraphics.fill(g,255,g);

ggraphics.ellipse(x, gy, gz, gz);

}

else if (y<=150 && gy>=51){ 
g = g + random(-0.5, 0.5);

ggraphics.fill(g,255,g);

ggraphics.ellipse(x, gy, gz, gz);

}

else if (gy<=height/2 && gy>=151){
g = g + random(-0.5, 0.5);

ggraphics.fill(g,255,g);

ggraphics.ellipse(x, gy, gz, gz);

}

else if (gy<=height && gy>=height/2){
g = g + random(-0.5, 0.5);

ggraphics.fill(g,255,g);

ggraphics.ellipse(x, gy, gz, gz);
}
}

if (gy <= 3) { 
gy=gy+2;
}

else if (gy >= height-3) {
gy=gy-2;
}

if (g <= 0 || g >=255) {
g=200;
}


gz = gz + random(-2, 2)


if (gz <= 100 || gz >= width/2) {
gz = 200;
}
  image(ggraphics, 0,0,width,height);
ggraphics.blendMode(MULTIPLY);
}


function rplate(){
rgraphics.blendMode(BLEND);
  rgraphics.noStroke();
    for (x=0;
x <= width;
x = x + 1, ry=ry+random(-rz*0.02,rz*0.02)) {

if (rz<=100) {
rz=100;
}

if (rz >= width/2) {
rz= width/2;
}
if (ry<=5){
r = r + random(-0.5, 0.5);


rgraphics.fill(255,r,r);

rgraphics.ellipse(x, ry, rz, rz);

}

else if (ry<=50 && ry>=6){
r = r + random(-0.5, 0.5);

rgraphics.fill(255,r,r);

rgraphics.ellipse(x, ry, rz, rz);

}

else if (ry<=150 && ry>=51){ 
r = r + random(-0.5, 0.5);

rgraphics.fill(255,r,r);

rgraphics.ellipse(x, ry, rz, rz);

}

else if (ry<=height/2 && ry>=151){
r = r + random(-0.5, 0.5);

rgraphics.fill(255,r,r);

rgraphics.ellipse(x, ry, rz, rz);

}

else if (ry<=height && ry>=height/2){
r = r + random(-0.5, 0.5);

rgraphics.fill(255,r,r);

rgraphics.ellipse(x, ry, rz, rz);
}
}

if (ry <= 3) { 
ry=ry+2;
}

else if (ry >= height-3) {
ry=ry-2;
}

if (r <= 0 || r >=255) {
r=200;
}
 

rz = rz + random(-2, 2)


if (rz <= 100 || rz >= width/2) {
rz = 200;
}
    image(rgraphics, 0,0,width,height);
  rgraphics.blendMode(MULTIPLY);

}
