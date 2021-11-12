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
const plate1 = document.getElementById("pl1");
const plate2 = document.getElementById("pl2");
const plate3 = document.getElementById("pl3");
const plate4 = document.getElementById("pl4");
const plates = [plate1, plate2, plate3, plate4];
const logo = document.getElementById("logo");

//GLOBAL VARIABLES
const BORDER_INTERVAL = 2000;
let borderNumber = 0;

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

//FUNCTION THAT FILLS PLATES WITH DATA
const fillPlates = (offers) => {
    offers.forEach((offer, it) => {
        const img = document.createElement("img");
        img.src = images[offer-1];
        plates[it].appendChild(img);
        plates[it].title = data[offer-1].name;

        const price = document.createElement("div");
        price.classList = "price";

        let currency = "";
        if (data[offer-1].currency == "PLN") currency = " PLN";
        else if (data[offer-1].currency == "EUR") currency = " EUR";
        else if (data[offer-1].currency == "USD") currency = " USD";
        else currency = "";

        price.innerHTML = data[offer-1].price + currency;
        plates[it].appendChild(price);
    });
};

//------------
//MAIN PROGRAM
//------------
window.onload = () => {
    console.log(typeof images[0]);
    const GITHUB = document.createElement("img");
    GITHUB.src = logo_GITHUB;
    logo.appendChild(GITHUB);

    const offers = generateRandomOffers(4);
    fillPlates(offers);

    setInterval(() => {
        plates.forEach(plate => plate.classList.remove("border"));
        
        plates[borderNumber].classList.add("border");

        borderNumber == 3 ? borderNumber = 0 : borderNumber++;
    }, BORDER_INTERVAL);
};