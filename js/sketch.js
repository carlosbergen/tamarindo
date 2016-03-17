var first_s = function(p){
	var Y_AXIS = 1;
	var X_AXIS = 2;
	var distance, rectSize, rx, ry, angle;
	var rotAngle = Math.PI/3;
	var color1;
	var color2;

	p.setup = function(){
		p.createCanvas(window.outerWidth, window.innerHeight);
		rectSize = p.width/20;
		color1 = p.color(246,215,180);
		color2 = p.color(237,98,23);
	}

	p.draw = function(){
	  	p.background(218,237,226);
	  	p.noFill();
	  	setGradient(0,0,p.width,p.height,color1, color2,1);
  		
 
  		distance = Math.sin(rotAngle) * rectSize - (rectSize - rectSize * Math.cos(rotAngle));
 
  		num = Math.ceil( p.width / ( 2 * rectSize + 2 * distance ) );

  		var d;
 
		  rx = distance;
		  ry = distance;
		 
		  for (var j = 0; j < num; j++) {
		    rx = distance;
		    for (var i = 0; i < num; i++) {                  
		      p.stroke(255);
		      p.strokeWeight(2);
		      p.push();
		      angle =  -rotAngle;      
		      d = rectSize - Math.cos(angle) * rectSize;
		      x = rx + d;
		      y = ry + rectSize;
		      p.translate(x, y);
		      p.rotate(angle);
		      p.rect(0, -rectSize, rectSize, rectSize); 
		      p.pop();  
		 
		      p.push();
		      angle =  rotAngle;
		      d = Math.cos(angle) * rectSize;
		      x = rx + rectSize + d;
		      y = ry + rectSize;
		      p.translate(x, y);
		      p.rotate(angle);

		      p.rect(-rectSize, -rectSize, rectSize, rectSize); 
		      p.pop();
		 
		      p.push();
		      angle =  rotAngle;
		      d = rectSize - Math.cos(angle) * rectSize;
		      x = rx + d;
		      y = ry+rectSize;
		      p.translate(x, y);
		      p.rotate(angle);
		      p.rect(0, 0, rectSize, rectSize);
		      p.pop();
		 
		      p.push();
		      angle =  -rotAngle;
		      d = Math.cos(angle) * rectSize;
		      x = rx + rectSize + d;
		      y = ry+rectSize;
		      p.translate(x, y);
		      p.rotate(angle);
		      p.rect(-rectSize, 0, rectSize, rectSize); 
		      p.pop();
		 
		      rx += 2 * rectSize + 2 * distance;
		    }
		     
		    ry += 2 * rectSize + 2 * distance;
		  }
	}

	function setGradient(x, y, w, h, c1, c2, axis) {

		  p.noFill();

		  if (axis == Y_AXIS) {  // Top to bottom gradient
		    for (var i = y; i <= y+h; i++) {
		      var inter = p.map(i, y, y+h, 0, 1);
		      var c = p.lerpColor(c1, c2, inter);
		      p.stroke(c);
		      p.line(x, i, x+w, i);
		    }
		  }  
		  else if (axis == X_AXIS) {  // Left to right gradient
		    for (var i = x; i <= x+w; i++) {
		      var inter = p.map(i, x, x+w, 0, 1);
		      var c = p.lerpColor(c1, c2, inter);
		      p.stroke(c);
		      p.line(i, y, i, y+h);
		    }
		  }
		}

	p.mouseMoved = function(){
		rotAngle = p.map(p.mouseY, 0, p.height, Math.PI/3, Math.PI/6);
	}
}
var first_p5 = new p5(first_s, 'background');