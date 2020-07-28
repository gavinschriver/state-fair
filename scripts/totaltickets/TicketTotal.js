
const contentTarget = document.querySelector(".counter")
const eventHub = document.querySelector("#state-fair")

let someVar = 0

contentTarget.innerHTML = `Total Tickets: ${someVar}` 

export const TicketTotal = () => {
    eventHub.addEventListener("ticketPurchased", customEvent => {
        someVar++
        
        contentTarget.innerHTML = `Total Tickets: ${someVar}
        `
    })
}
