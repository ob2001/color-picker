var css = document.querySelector("h3");
var colors = [];
colors.push(document.querySelector(".color1"));
colors.push(document.querySelector(".color2"));
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var addColorBtn = document.getElementById("add-color");
var removeColorBtn = document.getElementById("remove-color");
var inputs = document.getElementById("inputs");

function setGradient() {
    var newGrad = "linear-gradient(to right";
    colors.forEach(color => {
        newGrad += ", " + color.value;
    });
    newGrad += ")";

    // console.log(newGrad);

    body.style.background = newGrad;
    css.textContent = body.style.background + ";";
}

function setRandom() {
    colors.forEach(color => {
        color.value = "#" + randomHex();
    });
    setGradient();
}

function randomHex() {
    return Math.floor(
        Math.random()*16777215)
        .toString(16)
        .padStart(6, "0");
}

function addColorPicker() {
    var newColor = document.createElement("input");
    newColor.setAttribute("type", "color")
    newColor.classList.add(`color${colors.length}`);
    newColor.name = `color${colors.length}`;
    newColor.value = "#" + randomHex();
    newColor.addEventListener("input", setGradient);

    colors.push(newColor);
    inputs.appendChild(newColor);

    setGradient();
}

function removeColorPicker() {
    if(colors.length > 2) {
        inputs.removeChild(inputs.lastChild);
        colors.pop();
        setGradient();
    }
}

setGradient();

colors.forEach(color => {
    color.addEventListener("input", setGradient)
});
random.addEventListener("click", setRandom);
addColorBtn.addEventListener("click", addColorPicker);
removeColorBtn.addEventListener("click", removeColorPicker);