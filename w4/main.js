const cfpData = [

function determineHouseholdPts(numberInHousehold) {
    let houseHoldPoints=0;

let carbonFootprintPoints = 0;


if (numberInHousehold === 1) {
    houseHoldPoints = 14;
} else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
} else {   
}
if (numberInHousehold === 3) {
    houseHoldPoints = 10;
} else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
} else if (numberInHousehold === 5) {
    houseHoldPoints = 4;
} else if (numberInHousehold === 6) {
    houseHoldPoints = 2;
} else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
}



let homeSize = "none";
let cfpImpact = 0;

function determinecfpImpactpts(homeSize) {
  if (homeSize === "large") {
    houseSizePts = 10;
  } else if (homeSize === "medium") {
    houseSizePts = 7;
  } else if (homeSize === "small") {
    houseSizePts = 4;
  } else if (homeSize === "apartment") {
    houseSizePts = 2;
  }
}


function start(homeSize, numberInHousehold) {
const houseHoldPts = determineHouseholdPts(homeSize);
const houseSizePts = determinecfpImpactpts(numberInHousehold);
const toatl = houseHoldPts + houseSizePts
return houseHoldPts
cfpData.push(numberInHousehold, homeSize, houseHoldPts, houseSizePts, toatl)


console.log(`based on the size of your ${homeSize} it will determine your enviormental inmpact points ${cfpImpact}`
);
return houseSizePts
}



function displayOutput() {
  for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `cardon Footprint total is ${arr["small"]}`;
    output.appendChild(newP);
  }
}

start(5, "apartment");
start(4,"large");
start(3,"medium");
start(2,"small");
start(4, houseHoldPoints);

displayOutput();

}
]