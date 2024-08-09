const imageElement = document.querySelector("#carImage");
const imageSources = ["car1.jpg", "car2.jpg", "car3.jpg"];
let currentImageNumber = 1;
function imageAhead() {
  switch(currentImageNumber) {
    case 1:
      imageElement.src = `/${imageSources[1]}`; 
      currentImageNumber = 2;
    break;
    case 2:
      imageElement.src = `/${imageSources[2]}`;
      currentImageNumber = 3;
    break;
    case 3:
      imageElement.src = `/${imageSources[0]}`;
      currentImageNumber = 1;
    break;
    default:
      console.log("Weird Case");
  }
}
function imageBehind() {
  switch(currentImageNumber) {
    case 1:
      imageElement.src = `/${imageSources[2]}`; 
      currentImageNumber = 3;
    break;
    case 2:
      imageElement.src = `/${imageSources[0]}`;
      currentImageNumber = 1;
    break;
    case 3:
      imageElement.src = `/${imageSources[1]}`;
      currentImageNumber = 2;
    break;
    default:
      console.log("Weird Case");
  }
}
document.querySelector("#ahead").addEventListener("click", imageAhead);
document.querySelector("#back").addEventListener("click", imageBehind);