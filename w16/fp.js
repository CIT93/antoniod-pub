class FP {
  constructor(first, last, houseHoldMembers, houseSize, food, foodSource, water) {
    this.first = first;
    this.last = last;
    this.houseHoldMembers = houseHoldMembers;
    this.houseSize = houseSize;
    this.foodChoice = food;
    this.foodSource = foodSource;
    this.waterPts = water
    this.calDetermineFoodIntake();
    this.calDetermineHouseHoldPts();
    this.calDetermineHouseSizePts();
    this.calFoodSourcePts();
    this.calTotal();
  }

  calDetermineHouseHoldPts() {
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

  calDetermineHouseSizePts() {
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

  calDetermineFoodIntake() {
    if (this.foodChoice === "daily") {
      this.foodChoicePts = 10;
    } else if (this.foodChoice === "weekly") {
      this.foodChoicePts = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePts = 4;
    } else if (this.foodChoice === "vegan") {
      this.foodChoicePts = 2;
    }
  }

  calFoodSourcePts() {
    if (this.foodSource === "packed") {
      this.foodSourcePts = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePts = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePts = 2;
    }
  }

  // calWaterPts() {
  //   if (this.water === "3") {
  //     this.waterPts === 3
  //   } else if (this.water === "2") {
  //     this.waterPts === 2
  //   } else if (this.water === "1") {
  //     this.waterPts === 1
  //   } else if (this.water === "0") {
  //     this.waterPts === 0
  //   }
  // }

  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePts +
      this.foodChoicePts +
      this.foodSourcePts +
      this.waterPts;
  }
}

export { FP };
