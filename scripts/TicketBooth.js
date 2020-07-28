const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", eventObj =>{
    if(event.target.id === "rideTicket") {

        const rideEvent = new CustomEvent ("rideTicketPurchased")

    eventHub.dispatchEvent(rideEvent)

    }
})

eventHub.addEventListener("click", eventObj =>{
    if(event.target.id === "foodTicket") {

        const foodEvent = new CustomEvent ("foodTicketPurchased")

    eventHub.dispatchEvent(foodEvent)

    }
})

eventHub.addEventListener("click", eventObj => {
    if(event.target.id === "sideshowTicket") {

        const sideshowEvent = new CustomEvent ("sideshowTicketPurchased")

    eventHub.dispatchEvent(sideshowEvent)

    }
})

eventHub.addEventListener("click", eventObj => {
    if(event.target.id === "gameTicket") {

        const gameEvent = new CustomEvent ("gameTicketPurchased")

    eventHub.dispatchEvent(gameEvent)

    }
})

eventHub.addEventListener("click", eventObj => {
    if(event.target.id === "fullPackageTicket") {

        const fullPackageEvent = new CustomEvent ("fullPackageTicketPurchased")

    eventHub.dispatchEvent(fullPackageEvent)

    }
})

eventHub.addEventListener("click", eventObj => {
    if(event.target.id === "gameTicket" ||
    event.target.id === "rideTicket" ||
    event.target.id === "sideshowTicket" ||
    event.target.id === "foodTicket" ||
    event.target.id === "fullPackageTicket"
    ) {

        const ticketEvent = new CustomEvent ("ticketPurchased", {
            detail: {
                ticketCount: event.target.value,
                ticketType: event.target.id
            }
        })

    eventHub.dispatchEvent(ticketEvent)

    }
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket" value="1">Ride Ticket</button>
            <button id="foodTicket" value="1">Food Ticket</button>
            <button id="gameTicket" value="1">Game Ticket</button>
            <button id="sideshowTicket" value="1">Sideshow Ticket</button>
            <button id="fullPackageTicket" value="4">Full Package Ticket</button>
        </div>
    `
}

