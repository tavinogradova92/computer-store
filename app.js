let computersArray = [];

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
    "The Notebook 9 Pro weighs in at 2.85lbs and is only 0.55” thick.  Rotate the full HD screen 360 degrees to use it in notebook mode or tablet mode.  With that kind of versatility, you can use this 2-in-1 device for work, home, travel, or even at the neighborhood park.",
    5000,
    "DKK"
)

// adding datalyst options with JS variables
let options = '';
for (let i = 0; i < computersArray.length; i++) {
    options += '<option value="' + computersArray[i].model + '" />' + computersArray[i].model + '</option>'; // filling the select list
}
document.getElementById('computers').innerHTML = options;

// setting the default computer description (HP)
document.getElementById("laptop_features_list").innerHTML = computersArray[0].features;
document.getElementById("computer-photo").src = computersArray[0].photoLink;
document.getElementById("description-title").innerHTML = computersArray[0].model;
document.getElementById("laptop-description").innerHTML = computersArray[0].description;
document.getElementById("laptop-price").innerHTML = computersArray[0].price + ' ' + computersArray[0].currency;


// changing computer info depending on the form choice
function changeComputerInfo() {
    let selection = document.getElementById('computers');
    let getIndexOfSelectedComputer = selection.getElementsByTagName("option")[selection.selectedIndex].index;
    // console.log(getIndexOfSelectedComputer);
    for (let i = 0; i < computersArray.length; i++) {
        if(getIndexOfSelectedComputer == computersArray[i].index) {
            document.getElementById("laptop_features_list").innerHTML = computersArray[i].features;
            document.getElementById("computer-photo").src = computersArray[i].photoLink;
            document.getElementById("description-title").innerHTML = computersArray[i].model;
            document.getElementById("laptop-description").innerHTML = computersArray[i].description;
            document.getElementById("laptop-price").innerHTML = computersArray[i].price + ' ' + computersArray[i].currency;
        }
    }
}

// initializing money variables
let bankSum = 500;
let loanSum = 0;
let earnedSum = 0;

// showing the initial values
document.getElementById("bankSum").innerHTML = bankSum + " " + "DKK";
document.getElementById("loanSum").innerHTML = loanSum + " " + "DKK";
if (loanSum == 0) {
    document.getElementById("outstanding_loan").style.visibility = "hidden";
}

// showing an outstanding loan in case of getting a loan
function getALoan() {
    if(loanSum == 0) {
        loanSum = 500;
        document.getElementById("loanSum").innerHTML = loanSum + " " + "DKK";
        document.getElementById("outstanding_loan").style.visibility = "visible";
    } else {
        window.alert("You can't get a new loan until you have returned the previous one!");
    }
}
