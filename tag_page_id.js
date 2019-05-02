// Selects all references to pages
let text = document.querySelectorAll("span.pb");
// Sets counter to equal the value of the first page encountered. If first page is 'pg:1', then
// counter = 1. If first page is 'pg:50', then counter = 50.
let counter = (text[0].textContent.replace(/\D/g, ''));
console.log(counter);
// Selects all images
let imgs = document.querySelectorAll('img')
let imgCount = counter;

//Attaches id to each of the pages corresponding to the their number. Page 50 will have id 50.
for (let x of imgs) {
	x.setAttribute("id", `${imgCount++}` )
}
console.log(imgCount)
//Attaches id to each of the images corresponding to their page number. Pg 50 will have id 50.
for (let x of text) {

	x.setAttribute("id", `${counter++}`);
}
