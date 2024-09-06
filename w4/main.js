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
    return houseSize
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
      return houseHoldPoints
  }
  

  function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseHoldSize = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseHoldSize;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseHoldSize, total]);
  }

function displayOutput() {
  for (arr of cfpData)  {
    console.log(arr)
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `there are ${arr[0]} people in your household and ${arr[1]} size of your house is ${arr[2]} and your score is ${arr[3]} total ${arr[4]}`;
    output.appendChild(newP)
  }
}

  start(5, "apt");
  start(4, "large");
  start(3, "medium");

  

  displayOutput()