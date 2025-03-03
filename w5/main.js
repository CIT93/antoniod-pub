const output = document.getElementById("output");
const moviesTable = document.getElementById("movies-data");
const movieArray = [
    { movieTitle: "The Lion King", movieYear: 1994, movieRating: 8.5, watched: 5 },
    { movieTitle: "Romy and Michele's High School Reunion", movieYear: 1997, movieRating: 6.3, watched: 2 },
    { movieTitle: "But I'm a Cheerleader", movieYear: 1999, movieRating: 6.8, watched: 1 },
    { movieTitle: "Wicked", movieYear: 2024, movieRating: 7.6, watched: 4 }
];

function displayOutMovies() {
    moviesTable.innerHTML = "";
    output.innerHTML = ""; 
  
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    const headingTextArr = ["Title", "Year", "Rating", "Watched"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    movieArray.forEach(function (obj) {
        if (obj.movieRating > 6 && obj.watched < 5) {
            const newH1 = document.createElement("h1");
            newH1.textContent = `Antonio's favorite movies`;
            output.appendChild(newH1);

            const tr = document.createElement("tr");

            const tdTitle = document.createElement("td");
            const tdYear = document.createElement("td");
            const tdRating = document.createElement("td");
            const tdWatched = document.createElement("td");

            tdTitle.textContent = obj.movieTitle;
            tdYear.textContent = obj.movieYear;
            tdRating.textContent = obj.movieRating;
            tdWatched.textContent = obj.watched;

            tr.appendChild(tdTitle);
            tr.appendChild(tdYear);
            tr.appendChild(tdRating);
            tr.appendChild(tdWatched);

            tbody.appendChild(tr);
        }
    });

    table.appendChild(tbody);
    moviesTable.appendChild(table);
}

displayOutMovies();