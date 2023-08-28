const linkApi1 = "https://api.adviceslip.com/advice";
const linkApi2 = "https://api.quotable.io/random";
const timestamp = Date.now()

const id = document.getElementById("id")
const advice = document.getElementById("advice")
const btnAdvice = document.getElementById("btnAdvice")

btnAdvice.addEventListener("click", getAdvice)

function getAdvice() {
    fetch(`${linkApi1}?timestamp=${timestamp}`)
    .then(response => {
        if(!response.ok) {
            throw new Error("Error in the first API")
        }
        return response.json()
    })
    .then(data => {
        const adviceId = data.slip.id
        const adviceText = data.slip.advice
        id.textContent = adviceId
        advice.textContent = adviceText
    })
    .catch(error => {
        console.log("Error getting the advice from AdviceSlip: ", error)
        getSecondAdvice()
    })
}

function getSecondAdvice() {
    fetch(`${linkApi2}?timestamp=${timestamp}`)
    .then(response => {
        if(!response.ok) {
            throw new Error("You are very unlucky. Error in the second API as well")
        }
        return response.json()
    })
    .then(data => {
        const adviceId = data._id
        const adviceText = data.content
        id.textContent = adviceId
        advice.textContent = adviceText
        btnAdvice.removeEventListener("click", getAdvice)
    })
    .catch(error => {
        console.log("Error getting the advice from Quotable.io: ", error)
    })
}
