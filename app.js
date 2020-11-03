let computersArray = [];

// creating a computer class as a function
function Computer(model, photoLink, features, description, price, currency) {
        this.model = model;
        this.photoLink = photoLink;
        this.feautures = features;
        this.description = description;
        this.price = price;
        this.currency = currency;
}

// creating Computer as an array of objects
function addComputer(model, photoLink, features, description, price, currency) {
    let c = new Computer(model, photoLink, features, description, price, currency); // creating new instance
    computersArray.push(c);
}

// filling computer objects with the info
const computerHP = addComputer(
    "HP Flyer Red",
    "images/computerHP.jpg",
    `<li>Deep, metallic shade</li>
    <li>Ample storage space</li>
    <li>15.6 Inch Screen</li>`,
    "Stream shows, catch the latest movie trailers, or explore an online video game’s vivid fantasyland in crisp, clear detail. Saturated with about 1 million pixels, the display produces image quality similar to what you’d see on an HDTV with 720p HD resolution. Such sharpness and clarity also make the text on your favorite news and social-media sites clear and easy to read.",
    2000,
    "DKK"
)

const computerLenovo = addComputer(
    "Lenovo ThinkPad E495",
    "images/computerLenovo.jpg",
    `<li>High performance</li>
    <li>Business-ready system</li>
    <li>14 Inch Screen</li>`,
    "The ThinkPad E495 lets users multitask with ease. It boasts a TPM chip to encrypt sensitive data. Together with built-in durability and reliability, it's easy to see why the E495 is appreciated by IT managers.",
    1800,
    "DKK"
)

const computerMac = addComputer(
    "Macbook Air",
    "images/computerMac.jpg",
    `<li>Turbo Boost up to 3.5GHz</li>
    <li>Magic Keyboard</li>
    <li>13 Inch Screen</li>`,
    "The incredibly thin and light MacBook Air features a brillian Retina display with True Tone technology, Magic Keyboard, processors with up to twice the performance, faster graphics, Touch Id, and all-day battery life.",
    8000,
    "DKK"
)

const computerXiaomi = addComputer(
    "Xiaomi Mi Pro 15",
    "images/computerXiaomi.jpg",
    `<li>Intel Core i7 processor</li>
    <li>Dual heat pipe</li>
    <li>15.6 Inch Screen</li>`,
    "Mi Notebook Pro 15 2020 is made from the inside with high quality. Ergonomically shaped keys with a length of 19,5 mm and a stroke of 1,5 mm will be ideal companions for your everyday use. As you can see, the numeric keypad did not find a place here. The touchpad measuring 127 x 83,6 mm hides fast in its upper right corner fingerprint readerwith which you can playfully unlock the laptop in a second.",
    7500,
    "DKK"
)

const computerSamsung = addComputer(
    "Samsung Notebook 9 Pro",
    "images/computerSamsung.jpg",
    `<li>Versatile inside & out</li>
    <li>Unparalleled performance</li>
    <li>15 Inch Screen</li>`,
    "The Notebook 9 Pro weighs in at 2.85lbs and is only 0.55” thick.  Rotate the full HD screen 360 degrees to use it in notebook mode or tablet mode.  With that kind of versatility, you can use this 2-in-1 device for work, home, travel, or even at the neighborhood park.",
    5000,
    "DKK"
)

// adding datalyst options with JS variables
let options = '';

for (let i = 0; i < computersArray.length; i++) {
  options += '<option value="' + computersArray[i].model + '" />';
}

document.getElementById('computers').innerHTML = options;