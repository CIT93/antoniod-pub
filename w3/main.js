function determineHouseholdPts(numberInHousehold) {
    console.log("Inside the function")
   if (numberInHousehold === 1) {
  carbonFootprintPoints = carbonFootprintPoints + 14
} else if (numberInHousehold === 2) {
  carbonFootprintPoints = carbonFootprintPoints + 12
} else if (numberInHousehold === 3) {
  carbonFootprintPoints = carbonFootprintPoints + 10
} else if (numberInHousehold === 4) {
  carbonFootprintPoints = carbonFootprintPoints + 8
} else if (numberInHousehold === 5) {
  carbonFootprintPoints = carbonFootprintPoints + 6
} else if (numberInHousehold === 6) {
  carbonFootprintPoints = carbonFootprintPoints + 4
} else if (numberInHousehold > 6) {
  carbonFootprintPoints = carbonFootprintPoints + 2
} 
}

let carbonFootprintPoints = 0
// const numberInHousehold =7



//Global Scope
determineHouseholdPts(3)
determineHouseholdPts(4)

let houseSize = "large";
let cfpHomesizePts = 0;

function determineHomesizePts(houseSize) {
  if (houseSize === "large") {
    cfpHomesizePts = cfpHomesizePts + 10;
  } else if (houseSize === "medium") {
    cfpHomesizePts = cfpHomesizePts + 7;
  } else if (houseSize === "small") {
    cfpHomesizePts = cfpHomesizePts + 4;
  } else if (houseSize === "apartment") {
    cfpHomesizePts = cfpHomesizePts + 2;
  }
}

determineHomesizePts(houseSize);

console.log(
  `Based on the size of your ${houseSize}, it will determine your environmental impact points: ${cfpHomesizePts}`
);

