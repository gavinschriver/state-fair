
const contentTarget = document.querySelector(".counter")
const eventHub = document.querySelector("#state-fair")

let someVar = 0

contentTarget.innerHTML = `Total Tickets: ${someVar}` 

export const TicketTotal = () => {
    eventHub.addEventListener("ticketPurchased", customEvent => {
        console.log(customEvent.detail)
        if (customEvent.detail.ticketType === "fullPackageTicket") {
            someVar = someVar + parseInt(customEvent.detail.ticketCount)
        } else 
        someVar++
        
        contentTarget.innerHTML = `Total Tickets: ${someVar}
        `
    })
}
