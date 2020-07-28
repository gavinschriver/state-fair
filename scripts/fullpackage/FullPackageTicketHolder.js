const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        contentTarget.forEach(target => {
        target.innerHTML += `
        <div class="person bigSpender"></div>
        `
        })
    })
}