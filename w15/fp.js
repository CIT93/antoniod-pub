class FP {
  constructor(first, last, houseHoldMembers, houseSize, food) {
    this.first = first;
    this.last = last;
    this.houseHoldMembers = houseHoldMembers;
    this.houseSize = houseSize;
    this.foodChoice = food;
    this.determineFoodIntake();
    this.determineHouseHoldPts();
    this.determineHouseSizePts();
    this.total();
  }

  determineHouseHoldPts() {
    if (this.houseHoldMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseHoldMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseHoldMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseHoldMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseHoldMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseHoldMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseHoldMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  determineHouseSizePts() {
    if (this.houseSize === "large") {
      this.houseSizePts = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePts = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePts = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePts = 2;
    }
  }

  determineFoodIntake() {
    if (this.foodChoice === "daily ") {
      this.foodChoicePts = 10;
    } else if (this.foodChoice === "weekly") {
      this.foodChoicePts = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePts = 4;
    } else if (this.foodChoice === "vegan") {
      this.foodChoicePts = 2;
    }
  }

  total() {
    this.total = this.houseHoldPoints + this.houseSizePts + this.foodChoicePts;
  }
}

export { FP };
