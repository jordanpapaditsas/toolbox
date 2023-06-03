
let x;
let y; 
let z;

document.getElementById("roll-button").onclick = function() {

   x = Math.floor((Math.random()) * 6) + 1;
   y = Math.floor((Math.random()) * 6) + 1;
   z = Math.floor((Math.random()) * 6) + 1;

   document.getElementById("x-label").innerHTML = x;
   document.getElementById("y-label").innerHTML = y;
   document.getElementById("z-label").innerHTML = z;

}