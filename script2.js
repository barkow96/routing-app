//LOAD DATA FROM LOCAL FILES
import data from "./data/data.js";

const logo_GITHUB = "./data/logo.png";
const images = [
    "./data/offer1.jpg",
    "./data/offer2.jpg",
    "./data/offer3.jpg",
    "./data/offer4.jpg",
    "./data/offer5.jpg",
    "./data/offer6.jpg"
];

//GET ACCESS TO HTML ELEMENTS
const plateImg = document.getElementById("plateImg");
const description = document.getElementById("description");
const price = document.getElementById("price");
const button = document.getElementById("button");
const logo = document.getElementById("logo");

//GLOBAL VARIABLES
const SLIDER_INTERVAL = 2000;
let offerNumber = 0;
let sliderON = true;

//FUNCTION THAT GENERATES N RANDOM OFFER NUMBERS (NUMBERS BETWEEN 1 AND 6)
const generateRandomOffers = (N) => {
    const randomOffers = new Array(N);
    let number, iterator = 0;

    while (iterator <= N-1) {
        number = Math.floor(Math.random()*6+1);

        if (randomOffers.includes(number)) continue;
        else randomOffers[iterator] = number;
        iterator++;
    }

    return randomOffers;
}

//FUNCTION THAT FILLS BANNER WITH OFFER DATA
const fillProduct = (offer) => {
        plateImg.src = images[offer-1];

        description.innerHTML = data[offer-1].name;

        let currency = "";
        if (data[offer-1].currency == "PLN") currency = " PLN";
        else if (data[offer-1].currency == "EUR") currency = " EUR";
        else if (data[offer-1].currency == "USD") currency = " USD";
        else currency = "";
        price.innerHTML = data[offer-1].price + currency;
};

//FUNCTION THAT RUNS THE SLIDER
const runSlider = () => {
    const slider = setInterval(() => {
        fillProduct(offers[offerNumber]);
        offerNumber == 2 ? offerNumber = 0 : offerNumber++;
    }, SLIDER_INTERVAL);

    return slider;
};

//------------
//MAIN PROGRAM
//------------
const offers = generateRandomOffers(3);
window.onload = () => {
    const GITHUB = document.createElement("img");
    GITHUB.src = logo_GITHUB;
    logo.appendChild(GITHUB);

    fillProduct(offers[0]);
    offerNumber++;

    let slider = runSlider();

    button.addEventListener("click", () => {
        if (sliderON) {
            clearInterval(slider);
            button.innerHTML = "Continue";
            sliderON = false;
        }
        else {
            slider = runSlider();
            button.innerHTML = "Check";
            sliderON = true;
        }
    });
};