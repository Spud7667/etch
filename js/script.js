document.querySelector("p.green").addEventListener("click", () => {
    removeColorChangeEventListener();
    green();
});

document.querySelector("p.red").addEventListener("click", () => {
    removeColorChangeEventListener();
    red();
});

document.querySelector("p.random").addEventListener("click", () => {
    removeColorChangeEventListener();
    random();
});

for(let i = 0; i < 1089; i++) {

let newDiv = document.createElement("div");
newDiv.classList.add("grid");
document.querySelector(".wrapper").appendChild(newDiv);

}


document.querySelector("p.button").addEventListener("click", () => {
    getNewValue();
   
});

function createNew(value) {
    if(value <= 33) {
for(let i = 0; i < value*value; i++) {

    let newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    document.querySelector(".wrapper").appendChild(newDiv);
    
    }
} else { 
    getNewValue();
}
}

function getNewValue() {
    let value = prompt("Create a new Grid: Enter a number between 1 - 33");
    if (value > 0) {
        document.querySelectorAll("div").forEach(element => {
            element.classList.remove("grid");
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.remove("random");
            element.style.background = ``;
        });
    }
    createNew(value);
}

function erasePad() {
    let gridValue =  {
        green: document.querySelectorAll("div.green").length,
        red: document.querySelectorAll("div.red").length,
        random: document.querySelectorAll("div.random").length
    
    };
    console.log(gridValue)
    if(gridValue.green > 0) {
        document.querySelectorAll("div.green").forEach(element => {
            element.classList.replace("green", "grid")
        })
    }
    if(gridValue.red > 0) {
        document.querySelectorAll("div.red").forEach(element => {
            element.classList.replace("red", "grid")
        })
    }
    if(gridValue.random > 0) {
        document.querySelectorAll("div.random").forEach(element => {
            element.classList.replace("random", "grid");
            element.style.background = ``;

        })
    }
}

document.querySelector("p.erase").addEventListener("click", () => {
    erasePad();
   
});

function green() {
    document.querySelector(".wrapper").addEventListener("mouseover", handleMouseoverGreen);  
}

function red() {
    document.querySelector(".wrapper").addEventListener("mouseover", handleMouseoverRed);
}

function random() {
    document.querySelector(".wrapper").addEventListener("mouseover", handleMouseoverRandom);  
}

function handleMouseoverGreen(event) {
    if(event.target.classList.contains("grid")) {
        event.target.classList.replace("grid", "green");
    }
}

function handleMouseoverRed(event) {
    if(event.target.classList.contains("grid")) {
        event.target.classList.replace("grid", "red");
    }
}


function handleMouseoverRandom(event) {
    if(event.target.classList.contains("grid")) {
        event.target.classList.replace("grid", "random");
        event.target.style.background = (randomColor());
    }
}

function removeColorChangeEventListener() {
    document.querySelector(".wrapper").removeEventListener("mouseover", handleMouseoverGreen);
    document.querySelector(".wrapper").removeEventListener("mouseover", handleMouseoverRed);
    document.querySelector(".wrapper").removeEventListener("mouseover", handleMouseoverRandom);
}

function randomColor() {
    return `#`+ Math.floor(Math.random()*16777215).toString(16);
}

let randomColors = document.querySelectorAll(".random");