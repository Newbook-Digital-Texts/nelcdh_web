$(document).ready(function(){
    $("h1").animate({ 
      'font-size' : "3vw",
        'opacity': '1',
    },3000)});

$(document).ready(function(){
    $("h1").animate({ 
      'font-size' : "3vw",
        'opacity': '1',
    },3000);
});
let array = ['lightyellow','lightgreen','lightblue']
let containers = document.querySelectorAll(".tl-timemarker .tl-timemarker-content-container");
for (x of containers) {
	//console.log(array[Math.floor(Math.random()*3)]);
	//console.log(x)
	x.style.backgroundColor = array[Math.floor(Math.random()*3)];
}
console.log(containers);
console.log("hello");
