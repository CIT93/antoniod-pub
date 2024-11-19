import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { renderTbl} from "./render.js";
import { houseHoldPTS, houseHoldSize } from "./fp.js";
import { cfpData, saveLS } from "./storage.js";
import { FP } from "./fp.js"

  const start = (houseHoldMembers, houseSize) => {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseHoldSize = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseHoldSize;
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    cfpData.push({
      firstN: firstName,
      houseM: houseHoldMembers,
      hSize: houseSize,
      hHPTS: houseHoldPTS,
      hHSize: houseHoldSize,
      hTotal: total,
      lastN: lastName
    });
  }



FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
    const fpObj = new FP(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value)

    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData); 
    FORM.reset();
  }
  else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})


const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


// arrow function
const add2 = a => 2 + a; 


 const result = add2(100);

 //IIFE

const a = 3;

 (function(a) {
  console.log("Inside IIFE");
  console.log(a);
 })(a);



//Pizza Logic asychronis

// const pizza = '\uD83C\uDF55'
// console.log(pizza)
// let pizza;
// function orderPizza(){
    // console.log("order pizza");
    // setTimeout(() => {
        // pizza = `🍕`
        // console.log( "Pizza was Ordered")
    // },
        // 2000)

    // console.log("pizza was orderd");

// }

// function orderPizza (callback) {
    // setTimeout(() => {
        // const pizza = `🍕`
        // callback()
    // },2000)
// }
// function pizzaReady (pizza) {
    // console.log (`Eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`call Qoli`)

// window.addEventListener('click', callback) 

// function callback() {

    // console.log('Clicked')
// })

// function thing1(callback) {
    //call pizza shop
// }
// function thing2(callback) {

// }
// function thing3(callback) {

// }
//Callback Hell
// thing1(() => {
    // thing2(() => {
        // thing3(() => {

        // })
    // })
// })
//orderPizza();
// console.log("call Qoli");
// console.log( `eat ${pizza}` );