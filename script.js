const imageElement = document.querySelector("#imageSpan");
const imageElements = imageElement.children;
let currentImageNumber = 1;
let iterationCount = 9;
function imageAhead() {
  iterationCount++;
  if ((iterationCount % 2) !== 0) {
    return;
  }
  switch(currentImageNumber) {
      case 1:
        imageElements[1].style.display = "inline";
        imageElements[0].style.display = "none";
        currentImageNumber = 2;
      break;
      case 2:
        imageElements[2].style.display = "inline";
        imageElements[1].style.display = "none";
        currentImageNumber = 3;
      break;
      case 3:
        imageElements[0].style.display = "inline";
        imageElements[2].style.display = "none";
        currentImageNumber = 1;
      break;
      default:
        console.log("Weird Case");
    }
}
imageElement.addEventListener("animationiteration", imageAhead);