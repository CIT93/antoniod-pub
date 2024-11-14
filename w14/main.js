const url = "https://jsonplaceholder.typicode.com/photos"


async function start() {
    try {
         const data = await fetch (url)
         const result = await data.json()
         onSuccess(result.data[1].json)

    } catch(e) {
        onerror(e);
    }

}

function onSuccess() {
    console.log(`Success: ${result}`)

}

function onFailure() {
            console.log(`ERROR: ${err}`)

}

start()
