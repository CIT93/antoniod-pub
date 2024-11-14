const url = "https://jsonplaceholder.typicode.com/photos";

async function start() {
    try {
        const data = await fetch(url);
        const result = await data.json();
        onSuccess(result[1]);

    } catch (e) {
        onFailure(e);
    }
}

function onSuccess(result) {
    console.log(`Success: ${JSON.stringify(result)}`);
}

function onFailure(err) {
    console.log(`ERROR: ${err}`);
}

start();
