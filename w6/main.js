const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
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

function displayOutObj(obj) {
  const output = document.getElementById("output");
  const newH1 = document.createElement("h1");
  newH1.textContent = `${obj.firstName} ${obj.lastName} has a `;
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
  output.appendChild(newH1);
  output.appendChild(newH2);
}

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseHold: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPts: houseHoldPTS,
    houseSizePts: houseSizePts,
    cfpTotal: total,
  });
}

function displayOutput() {
  for (const obj of cfpData) {
    const newP = document.createElement("p");
    const newH1 = document.createElement("h1");
    newH1.textContent = `${obj.firstName} ${obj.lastName} has a `;
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in Household and size of home`;
    newP.textContent = `This number is based on the number of the household of ${obj.houseHold} (score: ${obj.houseHoldPts}) `;
    newP.textContent += `and a ${obj.houseSize} size of home (score ${obj.houseSizePts}).`;
    OUTPUT.appendChild(newH1);
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.householdmembers.value);
  const houseSize = FORM.housesize.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
});
