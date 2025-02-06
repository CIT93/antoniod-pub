const cfpData = []

function determineHouseholdPts(numberInHousehold) {
  let carbonFootprintPoints = 0;
  if (numberInHousehold === 1) {
    carbonFootprintPoints = 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = 2;
  }
  return carbonFootprintPoints;
}

function determineHomesizePts(houseSize) {
  let cfpHomesizePts = 0;
  if (houseSize === "large") {
    cfpHomesizePts = 10;
  } else if (houseSize === "medium") {
    cfpHomesizePts = 7;
  } else if (houseSize === "small") {
    cfpHomesizePts = 4;
  } else if (houseSize === "apartment") {
    cfpHomesizePts = 2;
  }
  return cfpHomesizePts;
}

function start(houseSize, numberInHousehold) {
  const cfpHomesizePts = determineHomesizePts(houseSize);
  const carbonFootprintPoints = determineHouseholdPts(numberInHousehold);
  const total = cfpHomesizePts + carbonFootprintPoints;
  cfpData.push([numberInHousehold, houseSize, cfpHomesizePts, carbonFootprintPoints, total])
}

function displayOutput() {
    
}

start(1, "small");
start(5, "medium");
start(6, "large");
start(7, "apartment");


displayOutput()

