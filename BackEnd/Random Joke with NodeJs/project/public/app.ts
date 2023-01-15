const jokeContainer = document.querySelector("#joke")

async function getJoke() {
    try{
        //@ts-ignore
        const { data } = await axios.get("/api/jokes")
        console.log(data)
        jokeContainer.textContent = `${data.Joke}`
    } catch (error){
        console.error(error)
    }
}