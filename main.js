
//Blocks of code are going to be in /* ------ */ actual text will be after //
//First lets refer to our html canvas via variables.
//I recommend making the variable for "canvas.getContext" very short since we're going to be using this variable quite alot.

/*
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
*/

//(optional) Make a border around the canvas to get a view of what it looks like *you can just do this in css*
//Get rid of the margin on your canvas
//The next two lines just make your canvas the size of your initial browser size,
//you can test this by opening up the browser when it's only the width of half the screen

/*
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
*/

//As you can see the canvas size depends on the size of your browser
//Lets fix that!

/*
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})
*/

//this function basicly "resizes" the canvas everytime you resize your border
//this can be important later to make our content restart when you resize

//Ok now that we've setup our canvas, lets actually start drawing on the thing
//to start off we're going to make three little squares

// we need to draw our square first, this is done with .fillRect()
// now we need to give it some properties, we need the position and size
// the first two properties are going to be the position (x & y)
// the last two are going to be it's size

// Save and refresh your page and you'll see that nothing happened.
// we need to either fill these guys with color or draw a border around them
// we do this with .fillstyle
// I highly recommend using rgba() because we can change the opacity very easily which could come in usefull in different projects


/*
c.fillRect(100, 100, 100, 100);
c.fillstyle = 'rgba(255, 0, 0, 1)';

c.fillRect(200, 300, 100, 100);
c.fillstyle = 'rgba(255, 0, 0, 1)';

c.fillRect(300, 100, 100, 100);
c.fillstyle = 'rgba(255, 0, 0, 1)';
*/


// Now that you know how to make a few blocks, you can start coding minecraft & become a billionaire

// Lets make something more interesting now, a circle!
// we start off by drawing the path of the circle which is a line .beginPath()
// now that we've done that we want to make it into a circle, this is done with arcing *.arc()* the line we're going to draw
// first we need the *x* and *y*, then lets choose a *radius*, the starting angle *radian* dont worry too much about this one just make it 0 for now,
// and our finishing angle =  "Math.PI * 2" this makes it so we have a full circle, if you don't want a full circle, change the *2* value,
// there is one more value but, it's going to be irrelevant for us = counterclockwise set this to false,
// your arc should look somehting like this
// c.arc(x, y, radius, 0, Math.PI * 2, false);
// once you're done creating the cirlce, just like the squares we actually need to fill up the circle before we can see it
// unlike the square we need to use the .fill() function to make sure it fills it with color;


/*
c.beginPath();
c.arc(300, 300, 100, 0, Math.PI * 2, false);
c.fillStyle = "red";
c.fill();
*/

// Congratz! you can now make a circle, but it's only 1 & you might aswell have done this 25 times faster in any other program.
// now comment the previous circle we made and lets make 500 of the buggers
// this is pretty simple, you can put the single circle in a loop
// first of all lets make the loop and write a few variables to randomize everything
// we need to randomize their positions or they would all just be drawn on top of each other
// setup your for loop and and write the variables (tip: "window.innerWidth" and "window.innerHeight" to use the full size of your canvas)
// we want to randomize 3 things, our x, y and radius,
// if you've used *Math.random()* before, you want to use this together with your canvas innerWidth and innerHeight to randomize the x & y value
// for the radius, use any number you like. Once we actually see the circles we can change this to our needs
// Now lets just do the exact same thing we did for the first circle
// write your beginPath, arc and fill
// (for your fillStyle if you want your colors to be random use this guy --> 'rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')')
// after you've done all this, you should be able to see your circles
// now lets give them a bit of shadow to create some depth
// also lets go to our css and make our background black


/*
for (var i = 0; i < 500; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var radius = Math.random() * 40;
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fill();
  c.fillStyle='rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')';
  c.shadowBlur = 7;
  c.shadowColor = "black";
}
*/

// look at that, it's starting to look pretty professional
