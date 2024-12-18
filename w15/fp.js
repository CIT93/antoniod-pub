class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first
        this.last = last
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.foodChoice = foodChoice
        this.houseHoldPoints();
        this.houseSizePoints();
        this.foodChoicePts()
        this.total();

    }
    houseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
          } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
          } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
          } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
          } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
          } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
          } else if (this.houseMembers >= 7) {
            this.houseHoldPoints = 2;
          }
    }
    houseSizePoints() {
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
          } else if (this.houseSize === "medium") {
              this.houseSizePoints = 7;
          } else if (this.houseSize === "small") {
              this.houseSizePoints = 4;
          } else if (this.houseSize === "apt") {
              this.houseSizePoints = 2;
          }
    }
    foodChoicePts() {
      if (this.foodChoice === "dailyMeat") {
        this.foodChoicePts = 10;
      } else if (this.foodChoice === "weeklyMeat") {
        this.foodChoicePts = 8;
      } else if (this.foodChoice === "vegitarian") {
        this.foodChoicePts = 4;
      } else if (this.foodChoice === "vegan") {
        this.foodChoicePts = 2;
      }

    }



    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePts;
    }
}
export { FP }