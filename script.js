function randomNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function randomColor() {
    let r = randomNum(0, 254);
    let g = randomNum(0, 254);
    let b = randomNum(0, 254);
    return `rgb(${r}, ${g}, ${b})`;
}

function randomShape() {
    return randomNum(1, 2);
}

function sizing() {
    let l = randomNum(20, 300);
    shape.style.width = `${l}px`;
    shape.style.height = `${l}px`;
}

function pos(){
    let h = randomNum(-3, 603);
    let w = randomNum(-3, 603);
    let i = randomNum(1, 4);
    switch (i) {
        case 1:
            shape.style.top = `${h}px`;
            shape.style.left = `${w}px`;
            break;

        case 2:
            shape.style.top = `${h}px`;
            shape.style.right = `${h}px`;
            break; 

        case 3:
            shape.style.bottom = `${h}px`;
            shape.style.left = `${h}px`;
            break; 
            
        case 4:
            shape.style.bottom = `${h}px`;
            shape.style.right = `${h}px`;
            break;
        default:
            console.log("Error!");
            break;
    }
}

let shape = document.querySelector(".shape");
sizing();
pos();
shape.style.background = randomColor();

shape.addEventListener("click", () => {
    sizing();
    let n = randomShape();
    switch (n) {
        case 1:
            shape.style.background = randomColor();
            shape.style.borderRadius = "0";
            pos();
            break;
        case 2:
            shape.style.background = randomColor();
            shape.style.borderRadius = "50%";
            pos(); 
            break;
        default:
            console.log("Error!");
            break;
    }
});

