const cfpData = [];

const determineHouseSizePts = (Housesize = "medium") => {
    let carbonFootprintPoints = 0;
    if ( Housesize === "large") {
        carbonFootprintPoints = 10;
    } else if (Housesize === "medium") {
        carbonFootprintPoints = 7;
    } else if (Housesize === "small") {
        carbonFootprintPoints = 4;
    } else if (Housesize === "apartment") {
        carbonFootprintPoints = 2;
    }
    return carbonFootprintPoints;
}


const determineHouseHoldPts = (numberInHousehold = 1) => {
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
        houseHoldPoints =4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    } 
    return houseHoldPoints
}


export { determineHouseSizePts, determineHouseHoldPts };