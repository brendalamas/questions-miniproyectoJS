const iconPlus = document.querySelectorAll("button.plus-icon");
const iconMinus = document.querySelectorAll("button.minus-icon");
const text = document.querySelectorAll(".question-text");

for (let i = 0; i < iconPlus.length; i++) {
    iconPlus[i].onclick = () => {
        text[i].style.display="flex";
        iconPlus[i].style.display="none";
        iconMinus[i].style.display="flex";
    }
}

for (let i = 0; i < iconMinus.length; i++) {
    iconMinus[i].onclick = () => {
        text[i].style.display="none";
        iconMinus[i].style.display="none";
        iconPlus[i].style.display="flex";
    }
}

