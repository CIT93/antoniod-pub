import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

// const start =(first, last, houseHoldMembers, houseSize) => {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: first,
//     lastName: last,
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// };

const start =(...i) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: i[0],
    lastName: i[1],
    houseM: i[2],
    houseS: i[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
};


renderTbl(cfpData);

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

//attach Blur listners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener(`submit`, function (e) {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.housem.value),
      FORM.houses.value
    );
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});


