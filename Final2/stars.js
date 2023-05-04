let theCanvas;

function setup() {
    theCanvas = CreateCanvas(windowWidth, windowHeight);
    noCursor();
  }
  
  function draw() {
    //background with transparancy
    background(0,0,35,25); 
    
    //blinking stars
    var galaxy = { 
    locationX : random(width),
    locationY : random(height),
    size : random(1,6)
  }
    ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
    ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  
  
  }