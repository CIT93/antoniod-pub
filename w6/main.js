const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSize = 0;
  if (size === "large") {
    houseSize = 10;
  } else if (size === "medium") {
    houseSize = 7;
  } else if (size === "small") {
    houseSize = 4;
  } else if (size === "apt") {
    houseSize = 2;
  }
  return houseSize;
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
  } else if (numberInHousehold >= 7) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function start(houseHoldMembers, houseSize, firstname, lastname) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseHoldSize = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseHoldSize;
  cfpData.push({
    firstName: firstname,
    lastName: lastname,
    houseMem: houseHoldMembers,
    homeSize: houseSize,
    hHPTS: houseHoldPTS,
    hHSize: houseHoldSize,
    cfpTotal: total,
  });

  cfpData.push(cfpData);
}
function displayOutput() {
  
  for (obj of cfpData) {
    console.log(obj);
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `size of home ${obj.homeSize}`;
    const newP = document.createElement("p");
    newP.textContent = `The household members ${obj.firstname.value} ${obj.lastname.value} ${obj.houseMem} (score:${obj.hHPTS}).`;
    newP.textContent += ` and ${obj.homeSize} size of home (score:${obj.hHSize}).`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium")
start(2, "small");



FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value
    const lastName = FORM.lastname.value
    const houseMembers = parseInt (FORM.housemembers.value)
    const houseSize = FORM.houses.value
    start(houseMembers, houseSize)
    OUTPUT.innerHTML ="";
    displayOutput();
    FORM.reset();
})


