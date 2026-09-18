
const MovieInput = document.getElementById("MovieInput")
const SearchBtn = document.getElementById("SearchBtn")
const MovieResult = document.getElementById("MovieResult")

const apiKey = "YOUR_API_KEY";

SearchBtn.addEventListener("click",async () => {
    const movieName = MovieInput.value.trim()
    console.log("Movie Name")

    if (movieName === "") {
        alert("Plz Enter a movie name")
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
})