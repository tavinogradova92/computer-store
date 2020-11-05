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

// adding datalyst options with JS variables from './computer-data.js'
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

// repay loan button transferring money to to outstanding loan
function bankToLoan() {
    if(loanSum !== 0 && earnedSum !== 0 && loanSum > earnedSum) {
        loanSum -= earnedSum;
        earnedSum = 0;
        loanSumDiv.innerHTML = loanSum + " " + "DKK";
        earnedSumDiv.innerHTML = earnedSum + " " + "DKK";
    } else if(loanSum > 0 && loanSum < earnedSum && earnedSum !== 0) {
        loanSum -= earnedSum;
        if(loanSum < 0) {
            earnedSum = (0 - loanSum);
            loanSum = 0;
            loanSumDiv.innerHTML = loanSum + " " + "DKK";
            earnedSumDiv.innerHTML = earnedSum + " " + "DKK";
        }
    } else if(earnedSum == 0) {
        window.alert("You haven't earned any money to pay for your loan!");
    }
}
