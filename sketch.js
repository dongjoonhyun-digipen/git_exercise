/*
Dongjoon.Hyun
Move an object exercise
spring.2020.4.10
\
*/
let x = 0
let y = 200
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(230,230,10)
  
  circle(x,y,50)
  
  x =(x+3)% 400

  
}