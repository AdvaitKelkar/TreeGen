function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)
    
    //noLoop() 
  }
  
  function draw() {
    background(200)
    translate(0, 200, 0)
    //rotateY(frameCount)
    branch(150)
  }
  
  function branch(len) {
    strokeWeight(map(len, 10, 100, 0.5, 5))
    
    //add brown color to branches
    stroke(70, 40, 20)
    line(0, 0, 0, 0, -len - 2, 0)

    translate(0, -len, 0)

    if(len > 10) {
      for(var i = 0; i < 3; i += 1) {
        rotateY(random(100, 140))
        push()
        rotateZ(random(20, 50))
        branch(len * 0.7)
        pop()
      }     
    }
    else {
      //color the leaves
      var r = 80 + random(-20, 20)
      var g = 120 + random(-20, 20)
      var b = 40 + random(-20, 20)
      fill(r, g, b, 200)
      noStroke()

      //placing the leaves at appropriate position
      translate(5, 0, 0)
      rotateZ(90)

      beginShape()
      for(var i = 45; i < 135; i += 1) {
        var rad = 7
        var x = rad * cos(i)
        var y = rad * sin(i)
        vertex(x, y)
      }
      for(var i = 135; i > 45; i -= 1) {
        var rad = 7
        var x = rad * cos(i)
        var y = rad * sin(-i) + 10
        vertex(x, y)
      
      endShape(CLOSE)
    }
  }
}