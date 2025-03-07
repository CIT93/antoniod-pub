import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.householdmembers.value);
  const houseSize = FORM.housesize.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});
