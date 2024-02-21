const toggle = document.querySelector(".toggle")
const showCase = document.querySelector(".show-case")

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active")
    showCase.classList.toggle("active")
})