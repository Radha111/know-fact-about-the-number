let fact = document.getElementById("fact");
let spinner = document.getElementById("spinner");
let userInput = document.getElementById("userInput");

function inputUser(event) {
    if (event.key === "Enter") {
        let userInputEl = userInput.value;


        if (userInputEl === "") {
            alert("Enter a number")
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputEl
        let options = {
            method: "GET"

        };
        spinner.classList.toggle("d-none")
        fact.classList.toggle("d-none")
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                spinner.classList.toggle("d-none")
                fact.classList.toggle("d-none")
                let factEl = jsonData.fact
                fact.textContent = factEl
            })
    }
}
userInput.addEventListener("keydown", inputUser)