// creating a computer class as a function
function Computer(index, model, photoLink, features, description, price, currency) {
        this.index = index;
        this.model = model;
        this.photoLink = photoLink;
        this.features = features;
        this.description = description;
        this.price = price;
        this.currency = currency;
}

// creating Computer as an array of objects
let computersArray = [];
function addComputer(index, model, photoLink, features, description, price, currency) {
    let c = new Computer(index, model, photoLink, features, description, price, currency); // creating new instance
    computersArray.push(c);
}

// filling computer objects with the info
const computerHP = addComputer(
    0,
    "HP Flyer Red",
    "images/computerHP.jpg",
    "<li>Deep, metallic shade</li><li>Ample storage space</li><li>15.6 Inch Screen</li>",
    "Stream shows, catch the latest movie trailers, or explore an online video game’s vivid fantasyland in crisp, clear detail. Saturated with about 1 million pixels, the display produces image quality similar to what you’d see on an HDTV with 720p HD resolution. Such sharpness and clarity also make the text on your favorite news and social-media sites clear and easy to read.",
    2000,
    "DKK"
)

const computerLenovo = addComputer(
    1,
    "Lenovo ThinkPad E495",
    "images/computerLenovo.jpg",
    "<li>High performance</li><li>Business-ready system</li><li>14 Inch Screen</li>",
    "The ThinkPad E495 lets users multitask with ease. It boasts a TPM chip to encrypt sensitive data. Together with built-in durability and reliability, it's easy to see why the E495 is appreciated by IT managers.",
    1800,
    "DKK"
)

const computerMac = addComputer(
    2,
    "Macbook Air",
    "images/computerMac.jpg",
    "<li>Turbo Boost up to 3.5GHz</li><li>Magic Keyboard</li><li>13 Inch Screen</li>",
    "The incredibly thin and light MacBook Air features a brillian Retina display with True Tone technology, Magic Keyboard, processors with up to twice the performance, faster graphics, Touch Id, and all-day battery life.",
    8000,
    "DKK"
)

const computerXiaomi = addComputer(
    3,
    "Xiaomi Mi Pro 15",
    "images/computerXiaomi.jpg",
    "<li>Intel Core i7 processor</li><li>Dual heat pipe</li><li>15.6 Inch Screen</li>",
    "Mi Notebook Pro 15 2020 is made from the inside with high quality. Ergonomically shaped keys with a length of 19,5 mm and a stroke of 1,5 mm will be ideal companions for your everyday use. As you can see, the numeric keypad did not find a place here. The touchpad measuring 127 x 83,6 mm hides fast in its upper right corner fingerprint readerwith which you can playfully unlock the laptop in a second.",
    7500,
    "DKK"
)

const computerSamsung = addComputer(
    4,
    "Samsung Notebook 9 Pro",
    "images/computerSamsung.jpg",
    "<li>Versatile inside & out</li><li>Unparalleled performance</li><li>15 Inch Screen</li>",
    "The Notebook 9 Pro weighs in at 2.85lbs and is only 0.55” thick.  Rotate the full HD screen 360 degrees to use it in notebook mode or tablet mode. With that kind of versatility, you can use this 2-in-1 device for work, home, travel, or even at the neighborhood park.",
    5000,
    "DKK"
)

//storing DOM manipulators as variables
const computerList = document.getElementById('computers');
const laptopFeatures = document.getElementById("laptop_features_list");
const laptopPhoto = document.getElementById("computer-photo");
const laptopModel = document.getElementById("description-title");
const laptopDescription = document.getElementById("laptop-description");
const laptopPrice = document.getElementById("laptop-price");
const bankSumDiv = document.getElementById("bankSum");
const loanSumDiv = document.getElementById("loanSum");
const earnedSumDiv = document.getElementById("earnedSum");
const outstandingLoan = document.getElementById("outstanding_loan");
const repayButton = document.getElementById("repay-button");

// adding datalyst options with JS variables
let options = '';
for (let i = 0; i < computersArray.length; i++) {
    options += '<option value="' + computersArray[i].model + '" />' + computersArray[i].model + '</option>'; // filling the select list
}
computerList.innerHTML = options;

// setting the default computer description (HP)
laptopFeatures.innerHTML = computersArray[0].features;
laptopPhoto.src = computersArray[0].photoLink;
laptopModel.innerHTML = computersArray[0].model;
laptopDescription.innerHTML = computersArray[0].description;
laptopPrice.innerHTML = computersArray[0].price + ' ' + computersArray[0].currency;


// changing computer info depending on the form choice
function changeComputerInfo() {
    let selection = computerList;
    let getIndexOfSelectedComputer = selection.getElementsByTagName("option")[selection.selectedIndex].index;
    // console.log(getIndexOfSelectedComputer);
    for (let i = 0; i < computersArray.length; i++) {
        if(getIndexOfSelectedComputer == computersArray[i].index) {
            laptopFeatures.innerHTML = computersArray[i].features;
            laptopPhoto.src = computersArray[i].photoLink;
            laptopModel.innerHTML = computersArray[i].model;
            laptopDescription.innerHTML = computersArray[i].description;
            laptopPrice.innerHTML = computersArray[i].price + ' ' + computersArray[i].currency;
        }
    }
}

// initializing money variables
let bankSum = 500;
let loanSum = 0;
let earnedSum = 0;

// showing the initial values
bankSumDiv.innerHTML = bankSum + " " + "DKK";
loanSumDiv.innerHTML = loanSum + " " + "DKK";
earnedSumDiv.innerHTML = earnedSum + " " + "DKK";
if (loanSum == 0) {
    outstandingLoan.style.visibility = "hidden";
}

// get a loan button at work
function getALoan() {
    if(loanSum == 0) {
        let promptSum = parseInt(prompt("Enter the amount of DKK you'd like to loan:", ""), 10);
        if((promptSum < (bankSum * 2)) && promptSum > 0) { // limiting prompt loan
            loanSum = promptSum;
            loanSumDiv.innerHTML = loanSum + " " + "DKK";
            outstandingLoan.style.visibility = "visible";
            repayButton.style.visibility = "visible";
        } else if(promptSum == 0 || promptSum == null) {
            window.alert("The amount can't be null.");
        } else if(promptSum > (bankSum * 2)) {
            window.alert("The loan amount can't be more than double of your bank balance!");
        } else {
            window.alert("Please enter only numbers!");
        }
    } else {
        window.alert("You can't get a new loan until you have returned the previous one!");
    }
}

// work button that adds 100kr to work account clicked
function workForFood() {
    earnedSum += 100;
    earnedSumDiv.innerHTML = earnedSum + " " + "DKK";
}

// bank button transferring money to pay balance minus 10% to outstanding loan (if present)
function bankToBalance() {
    if(loanSum !== 0 && earnedSum !== 0) {
        loanSum -= earnedSum * 0.1;
        bankSum += earnedSum * 0.9;
        earnedSum = 0;
        loanSumDiv.innerHTML = loanSum + " " + "DKK";
        bankSumDiv.innerHTML = bankSum + " " + "DKK";
        earnedSumDiv.innerHTML = earnedSum + " " + "DKK";
    } else if(loanSum == 0 && earnedSum !== 0) {
        bankSum += earnedSum;
        earnedSum = 0;
        bankSumDiv.innerHTML = bankSum + " " + "DKK";
        earnedSumDiv.innerHTML = earnedSum + " " + "DKK";
    } else if(earnedSum == 0) {
        window.alert("You haven't earned any money to transfer to your bank acount!");
    }
}
