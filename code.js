var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["786d3413-073e-4467-8e6b-b0c6c6bacd5b"],"propsByKey":{"786d3413-073e-4467-8e6b-b0c6c6bacd5b":{"name":"a","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"2S52wfdUZQJxmhMp7BsYeWWFKU1Lz9te","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/786d3413-073e-4467-8e6b-b0c6c6bacd5b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="green";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="green";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="green";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="green";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="green";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="green";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="green";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="green";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";



paddle=createSprite(200,390,100,20);
ball=createSprite(200,200,20,20);
paddle.shapeColor="black";
ball.shapeColor="blue";



var score=0;
var gameState ="start";


function draw() {
  background("white");
  
  
  
  
  
  
  
  textSize(20);
  fill("purple");
  stroke("black");
  text("SCORE:"+score,300,20);
  
 if(gameState == "start"){
     text("WELCOME!!Press enter to start.",30,265);
      if (keyDown("enter")) {
ball.velocityX=4;
        ball.velocityY=5;
  
     gameState = "play";
  }
}
  if(gameState == "play"){
    paddle.x=World.mouseX
if (score==16 || ball.isTouching(bottomEdge) ) {
     gameState = "end";
    }
        
  }
  
  if(gameState == "end"){
   text("GAME OVER!!Score is " +score,100,200); 
 ball.destroy();
  }

    
    
   
  
  
  
 
  
  
  
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle);
  
  if(ball.isTouching(box1)){
    box1.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box2)){
    box2.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box3)){ 
    box3.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box4)){
    box4.destroy();
    score=score+1
  }
  
   if(ball.isTouching(box5)){ 
     box5.destroy();
     score=score+1
  }
  
   if(ball.isTouching(box6)) {
     box6.destroy();
     score=score+1
  }
  
  if(ball.isTouching(box7)) { 
    box7.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box8)){
    box8.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box9)){
    box9.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box10)){
    box10.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box11)){ 
    box11.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box12)){
    box12.destroy();
    score=score+1
  }
  
   if(ball.isTouching(box13)){ 
     box13.destroy();
     score=score+1
  }
  
   if(ball.isTouching(box14)) {
     box14.destroy();
     score=score+1
  }
  
  if(ball.isTouching(box15)) { 
    box15.destroy();
    score=score+1
  }
  
  if(ball.isTouching(box16)){
    box16.destroy();
    score=score+1
  }
 




  
  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
