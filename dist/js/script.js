// Change unit displays and button properties

const changeUnit = (unit, button) => {
    let currentUnit = sessionStorage.getItem("currentUnit")
    let currentButton = sessionStorage.getItem("currentButton")
    document.getElementById(currentUnit).classList.remove("block")
    document.getElementById(currentUnit).classList.add("hidden")
    document.getElementById(currentButton).classList.remove("text-lightBlue")
    document.getElementById(currentButton).classList.add("text-lightGray")
    sessionStorage.setItem("currentUnit", unit)
    sessionStorage.setItem("currentButton", button)
    document.getElementById(unit).classList.remove("hidden")
    document.getElementById(unit).classList.add("block")
    document.getElementById(button).classList.remove("text-lightGray")
    document.getElementById(button).classList.add("text-lightBlue")
}

// Set unit displays and button properties

const setStart = (unit, button) => {
    sessionStorage.setItem("currentUnit", unit)
    sessionStorage.setItem("currentButton", button)
    document.getElementById(unit).classList.remove("hidden")
    document.getElementById(unit).classList.add("block")
    document.getElementById("button2").classList.remove("text-lightGray")
    document.getElementById("button2").classList.add("text-lightBlue")
}

// MODAL

// Selectors

const openModalButtons = document.querySelectorAll("[data-modal-target]")
const overlay = document.getElementById("overlay")

// Event Listners

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener("click", ()=> {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

// Functions

const openModal = (modal) => {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

const closeModal = (modal) => {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}