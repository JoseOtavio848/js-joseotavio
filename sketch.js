function setup() {
    createCanvas(600, 600);
  background("white");
  }
  
  
  function draw() {
  
    stroke("black")
    fill("black")
   
   // console.log (mouseIsPressed)
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 15, 15);
    }
  
  
  }