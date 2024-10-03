import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbon.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL = document.getElementById("tab-data")
const cfpData = [];




function start(numberInHousehold, houseSize, firstname, lastname) {
  const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstname,
    lastName: lastname,
    houseM: numberInHousehold,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });

}



FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();


})