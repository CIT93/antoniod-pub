import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js"

 const start =(first, last, houseHoldMembers, houseSize, dailyFood) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const foodIntakePTS = determineFoodIntake(dailyFood)
  const total = houseHoldPTS + houseSizePTS + foodIntakePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    foodChoice: food,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
};

// const start =(...i) => {
//   const houseHoldPTS = determineHouseHoldPts(i[2]);
//   const houseSizePTS = determineHouseSizePts(i[3]);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: i[0],
//     lastName: i[1],
//     houseM: i[2],
//     houseS: i[3],
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// };


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
    const foodChoice = FORM.foodchoice.value
    // start(
    //   FNAME.value,
    //   LNAME.value,
    //   parseInt(FORM.housem.value),
    //   FORM.houses.value
    // );
    const fpObj = new FP (
      FNAME.value,
      LNAME.value,
      parseInt(FORM.housem.value),
      FORM.houses.value,
      FORM.foodchoice.value)
    // fpObj.determineHouseHoldPts()
    // fpObj.determineHouseSizePts()
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

// const me = {
//   name: "antonio",
//   hairColor: "brown",
//   location: "office",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//   }
// }


// const you = {
//   name: "jan",
//   hairColor: "blonde",
//   location: "home",
//   sleepScore: 55,
//   introduce: function() {
//     console.log(this)
//     console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//   }
// }

// me.introduce()
// you.introduce()

// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleep score of ${this.sleepScore}`)
//   }
// }

// const rio = new Human("rio", "red", "office", 95)
// const jane = new Human("jane", "brown", "home", 55)
// rio.introduce()
// jane.introduce()

// rio.hrv = 50
