const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


export const GameTicketHolder = () => {
    eventHub.addEventListener("ticketPurchased", customEvent => {
        
        contentTarget.innerHTML += `
        <div class="person player"></div>
        `
    })
}