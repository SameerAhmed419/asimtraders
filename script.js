//Handles the car showcase
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
        imageElements[2].style.display = "none";
        currentImageNumber = 2;
      break;
      case 2:
        imageElements[2].style.display = "inline";
        imageElements[1].style.display = "none";
        imageElements[0].style.display = "none";
        currentImageNumber = 3;
      break;
      case 3:
        imageElements[0].style.display = "inline";
        imageElements[2].style.display = "none";
        imageElements[1].style.display = "none";
        currentImageNumber = 1;
      break;
      default:
        console.log("Weird Case");
    }
}
imageElement.addEventListener("animationiteration", imageAhead);
//Handles the car-buying functionality
const buttonToBuyCar = document.querySelector("#buyCarButton");
const carDetailCollection = document.getElementsByClassName("carDetails");
buttonToBuyCar.addEventListener("click", () => {
  const model = carDetailCollection[0].value;
  const color = carDetailCollection[1].value;
  const year = carDetailCollection[2].value;
  const price = Math.floor(Math.random() * (20000 - 5000));
  const transactionConfirmation = confirm(`The current price of a ${color} ${model} from ${year} is ${price}£. Do you want to buy?`);
  if (transactionConfirmation === true) {
    alert("Thanks for buying!");
  } 
  else {
    alert("Transaction cancelled!");
  }
});
//Love Declaration
function love() {
  const allElements = document.body.querySelectorAll("*");
  setTimeout(()=>turnPink(allElements), 10000);
  setTimeout(()=>showLoveImage(allElements), 15000);
}
love();
function turnPink(allElements) {
  allElements.forEach(element => {
      element.style = "font-family: cursive; color: red; font-weight: bold; background-color: lightpink; transition: all 3s;";
    });
  document.body.style.backgroundColor = "lightpink";
}
function showLoveImage(allElements) {
  const loveImage = document.getElementById("loveImage");
  const loveDiv = document.getElementById("loveDiv");
  const audioPlay = document.getElementById("playAudio");
  allElements.forEach(element => element.style.opacity = "0");
  allElements[0].ontransitionend = () => {
    allElements.forEach(element => element.style.display = "none");
    document.body.style.display = "block";
    loveImage.style.display = "inline-block";
    loveDiv.style.display = "block";
    audioPlay.style.display = "inline-block";
    setTimeout(() => {
      loveImage.style.opacity = "1";
      loveDiv.style.opacity = "1";
      audioPlay.style.opacity = "1";
      loveDiv.style.marginTop = "25vh";
      audioPlay.addEventListener("click", playAudio);
      audioPlay.focus();
    }, 100);
  };
}
function playAudio() {
  const loveAudio = document.getElementById("loveAudio");
  loveAudio.play();
  loveAudio.onended = () => {
    setTimeout(()=>{
      location.reload();
    }, 10000);
  };
}