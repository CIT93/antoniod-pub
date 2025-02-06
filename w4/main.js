const cfpData = [];
function determineHouseSizePts(size) {
  let houseSizePoint = 0;
  if (size === "large") {
    houseSizePoint = 10;
  } else if (size === "medium") {
    houseSizePoint = 7;
  } else if (size === "small") {
    houseSizePoint = 4;
  } else if (size === "apt") {
    houseSizePoint = 2;
  }
  return houseSizePoint;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }

  return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([
    houseHoldMembers,
    houseSize,
    houseHoldPTS,
    houseSizePTS,
    total,
  ]);
}
function displayOutput() {
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");

    newP.textContent = `Number of household menbers: ${arr[0]}, Score based on Number of Household Members: ${arr[2]}, Size of House: ${arr[1]}, Score base on Size of House: ${arr[3]}, Total Carbon Footprint: ${arr[4]}`;
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(5, "large");
start(5, "medium");
start(5, "small");
start(4, "apt");
start(4, "medium");
start(4, "small");
start(3, "large");
start(3, "aprt");
start(3, "small");
start(2, "large");
start(2, "medium");
start(2, "small");
start(2, "apt");
start(1, "large");
start(1, "medium");
start(1, "small");
start(1, "apt");

displayOutput();
