const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let someVar = 0

contentTarget.innerHTML = `Total Tickets: `

export const TicketTotal = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        someVar++
        
        contentTarget.innerHTML = `
        <div class="person rider">${someVar}</div>
        `
    })
}
