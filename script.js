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
  const password = "qeedi";
  const userEnteredPassword = prompt("Enter the password: ");
  const allElements = document.body.querySelectorAll("*");
  //This is just a joke
  alert("This website is nothing serious. It is just a demo. Thanks for visiting :)");
  if (userEnteredPassword !== password) {
    return;
  }
  setTimeout(() => {
    allElements.forEach(element => {
      element.style = "font-family: cursive; color: red; font-weight: bold; background-color: lightpink; transition: all 3s;";
    });
  }, 10000);
  setTimeout(() => {
    allElements.forEach(element => element.style.opacity = "0");
    document.body.addEventListener("transitionend", () => {
      allElements.forEach(element => element.style.display = "none");
      document.body.style.display = "block";
      document.body.style.backgroundColor = "lightpink";
      const loveImage = document.getElementById("loveImage");
      loveImage.style.display = "inline-block";
      loveImage.style.opacity = "1";
      loveImage.style.marginTop = "30vh";
    });
  }, 15000);
}
love();
