$(document).ready(function(){
    $("h1").animate({ 
      'font-size' : "3vw",
        'opacity': '1',
    },3000)});
let r,b,p,y,g;
// Unpack values rom array into variables
[r,b,p,y,g] = ['lightcoral','lightblue','lightpink','lightyellow','lightgreen'];
let array = [r,g,g,g,r,g,b,r,p,b,b,g,p,p,g,r,r,g,b,p,p,p,p,y,b,p,r,p,b,r,r,r,p,b,p,y,b];
let counter = 0;
let containers = document.querySelectorAll(".tl-timemarker .tl-timemarker-content-container");
for (x of containers) {
	x.style.backgroundColor = array[counter++];
}
// Checking code
console.log(document.querySelectorAll(".tl-timegroup-message"));
console.log(containers);
console.log("hello");
