//--------------- Operating Hours ----------------------
let ohTitle = document.querySelectorAll(".oh-title");
let ohTimes = document.querySelectorAll(".oh-times");
let chevron = document.querySelectorAll(".fa-chevron-down");
ohTitle.forEach((element, index) => {
    element.addEventListener("click", () => {
        ohTimes.forEach((item, i) => {
            if (i != index) {
                item.classList.remove("active");
                chevron[i].classList.replace("fa-chevron-up", "fa-chevron-down")
            }
        })
        ohTimes[index].classList.toggle("active");
        if (chevron[index].classList.contains("fa-chevron-down")) {
            chevron[index].classList.replace("fa-chevron-down", "fa-chevron-up")
        }
        else if (chevron[index].classList.contains("fa-chevron-up")) {
            chevron[index].classList.replace("fa-chevron-up", "fa-chevron-down")
        }

    })
});

//--------------- map ----------------------
let pins = document.querySelectorAll(".pin");
pins.forEach((pin, index) => {
    pin.addEventListener("click", () => {
        pins.forEach((item, i) => {
            if (i != index) {
                item.classList.remove("active")
            }
        });
        pin.classList.toggle("active")
    })
});
