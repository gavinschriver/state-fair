const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

let someVar = 0

export const GameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        someVar++
        
        contentTarget.innerHTML += `
        <div class="person rider">${someVar}</div>
        `
    })
}