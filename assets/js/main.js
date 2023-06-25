const id = document.getElementById("id")
const advice = document.getElementById("advice")
const btnAdvice = document.getElementById("btnAdvice")

btnAdvice.addEventListener("click", getAdvice)

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        const adviceId = data.slip.id
        const adviceText = data.slip.advice
        id.textContent = adviceId
        advice.textContent = adviceText
    })
    .catch(error => {
        console.log("Erro ao obter conselho:", error)
    })
}
