const url = "https://jsonplaceholder.typicode.com/photos";

async function start() {
    try {
        const data = await fetch(url);
        const result = await data.json();
        onSuccess(result);
    } catch (e) {
        onFailure(e);
    }
}

function onSuccess(result) {
    console.log(`Success: ${JSON.stringify(result)}`);
    renderPhotos(result);
}

function onFailure(err) {
    console.log(`ERROR: ${err}`);
}

function renderPhotos(photos) {
    const output = document.getElementById("output");

    
    output.innerHTML = "";

    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        imgEl.setAttribute("alt", img.title); 
        output.appendChild(imgEl);
    });
}

document.addEventListener("DOMContentLoaded", start);
