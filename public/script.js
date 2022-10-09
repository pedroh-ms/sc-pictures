
let request;
let space;
let rect;


const seps = document.querySelectorAll(".sep");
const images = document.querySelectorAll(".image");

const scaleImage = () => {
    seps.forEach((sep, i) => {
	rect = sep.getBoundingClientRect();
	space = ((window.innerHeight - rect.height) / 2) / 2;
	if (rect.top >= space && rect.bottom <= (window.innerHeight - space)) {
	    images[i].style.cssText += `transform:scale(1.8);z-index:${images.length};`;
	} else {
	    images[i].style.cssText += `transform:scale(1);z-index:${i};`;
	}
    });
    request = requestAnimationFrame(scaleImage);
}

scaleImage();
