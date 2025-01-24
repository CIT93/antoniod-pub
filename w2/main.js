// How to calculate your footprint

//1. Count the members of you household.
const myHouseMembers = 12;
//2. Size of your home
const myHomesize = 2;
//3. Your food consumption
const myFood = 10;
//4. Your water comsumption
const myWater = 2;
//5. Yearly Purchases.
const myPurchases = 6;
//6. Your waste.
const myWaste = 30;
//7. your recycle habbits.
const myRecycle = 24;
//8. You transportation.
const myRide = 6;
//9. My Total Carbon Foot print

const cfpTotal = myFood + myHomesize + myHouseMembers + myPurchases + myRecycle + myRide + myWaste + myWater

const myHeading = document.querySelector("h2");
myHeading.textContent = cfpTotal;