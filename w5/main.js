// const cfpData = [];

// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if (size === "large") {
//     houseSizePoints = 10;
//   } else if (size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//   return houseSizePoints;
// }

// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//   return houseHoldPoints;
// }

// function displayOutObj(obj) {
//   const output = document.getElementById("output");
//   const newH2 = document.createElement("h2");
//   newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
//   output.appendChild(newH2);
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     houseHold: houseHoldMembers,
//     houseSize: houseSize,
//     houseHoldPts: houseHoldPTS,
//     houseSizePts: houseSizePts,
//     cfpTotal: total,
//   });
// }

// function displayOutput() {
//   for (obj of cfpData) {
//     console.log(obj);
//     const output = document.getElementById("output");
//     const newP = document.createElement("p");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in Household and size of home`;
//     newP.textContent = `This number is based on the number of the household of ${obj.houseHold} (score: ${obj.houseHoldPts}`;
//     newP.textContent += `and a ${obj.houseSize} size of home (score ${obj.houseSizePts})`;
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

// // function displayOutput() {
// //   for ( let i = 0; i < cfpData.length; i++) {
// //     console.log(i)
// //     const output = document.getElementById("output");
// //     const newP = document.createElement("p");
// //     const newH2 = document.createElement("h2");
// //     newH2.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
// //     // const newH3 = document.createElement("h3");
// //     // newH3.textContent = `Based on number in Household and size of home`;
// //     // newP.textContent = `This number is based on the number of the household of ${arr[0]} (score: ${arr[3]})`;
// //     // newP.textContent += `and a ${arr[1]} size of home (score ${arr[2]})`;
// //     output.appendChild(newH2);
// //     // output.appendChild(newH3);
// //     // output.appendChild(newP);
// //   }
// // }

// start(1, "apt");
// start(2, "small");
// start(3, "medium");
// start(4, "large");

// displayOutput();



const movieArray = [];

function addMovie(movieTitle, movieYear, movieRating, timesWatched) {
    const movieObj = {
        movieTitle: movieTitle,
        movieYear: movieYear,
        movieRating: movieRating,
        watched: timesWatched
    };

    movieArray.push(movieObj);
}

function displayMovies() {
    const output = document.getElementById("output");

    movieArray.forEach(movie => {
        const newH2 = document.createElement("h2");
        if (movie.movieRating >= 7 && movie.watched >= 3) {
            newH2.textContent = `The movie ${movie.movieTitle} released in the year (${movie.movieYear}) has a rating of ${movie.movieRating}/10`;
        } else {
            newH2.textContent = `null`;
        }
        output.appendChild(newH2);
    });
}

addMovie("The Lion King", 1994, 8.5, 5);
addMovie("Romy and Michele's High School Reunion", 1997, 6.3, 2);
addMovie("But I'm a Cheerleader", 1999, 6.8, 1);
addMovie("Wicked", 2024, 7.6, 4);
displayMovies();
