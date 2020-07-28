
const contentTarget = document.querySelector(".counter")
const eventHub = document.querySelector("#state-fair")

let someVar = 0

contentTarget.innerHTML = `Total Tickets: ${someVar}` 

export const TicketTotal = () => {
    eventHub.addEventListener("ticketPurchased", customEvent => {
        console.log(customEvent.detail)
        someVar = someVar + parseInt(customEvent.detail.ticketCount)        
        contentTarget.innerHTML = `Total Tickets: ${someVar}`
    })
}
