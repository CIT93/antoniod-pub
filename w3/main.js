//function determinHouseHoldPts(numberInHousehold) {
  //console.log("Inside the function");

  //if (numberInHousehold === 1) {
    //carbonFootprintPoints = carbonFootprintPoints + 14;
  //} else if (numberInHousehold === 2) {
  //  carbonFootprintPoints = carbonFootprintPoints + 12;
  //} else if (numberInHousehold === 3) {
  //  carbonFootprintPoints = carbonFootprintPoints + 10;
  //} else if (numberInHousehold === 4) {
  //  carbonFootprintPoints = carbonFootprintPoints + 8;
  //} else if (numberInHousehold === 5) {
 //   carbonFootprintPoints = carbonFootprintPoints + 4;
  //} else if (numberInHousehold === 6) {
   // carbonFootprintPoints = carbonFootprintPoints + 2;
  //} else if (numberInHousehold > 6) {
    //carbonFootprintPoints = carbonFootprintPoints + 2;
  //}
  //console.log(`based on the mumber of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`);
//}

//let carbonFootprintPoints = 0;
//let numberInHousehold = 1;

//global scope


//determinHouseHoldPts (3)
//determinHouseHoldPts (4)

//Discussion Post Code

let homeSize = "none";
let cfpImpact = 0;

function enviormentalImpactPoints(homeSize) {
  if (homeSize === "large") {
    cfpImpact = cfpImpact + 10;
  } else if (homeSize === "medium") {
    cfpImpact = cfpImpact + 7;
  } else if (homeSize === "small") {
    cfpImpact = cfpImpact + 4;
  } else if (homeSize === "apartment") {
    cfpImpact = cfpImpact + 2;
  }
}
console.log(
  `based on the size of your ${homeSize} it will determine your enviormental inmpact points ${cfpImpact}`
);

enviormentalImpactPoints("apartment");
enviormentalImpactPoints("apartment");