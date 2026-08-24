

const buttons = document.querySelectorAll(".color-btn");
const box = document.querySelector(".preview-box");

buttons.forEach((button) => { 
    button.addEventListener("click", () => {
        box.className = "preview-box";
        box.classList.add(button.classList[1])
    })

});
