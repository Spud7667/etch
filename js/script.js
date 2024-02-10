// Add functionallity to change color with button-press (ex red, white, black, orange)

// let classes = ["green", "red"]

document.querySelector("p.green").addEventListener("click", () => {
    green();
})

// document.querySelector("p.red").addEventListener("click", () => {
//     red();
// })

// document.querySelector("p.red").addEventListener("click", () => {
//     red();
// })

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
        });
    }
    createNew(value);
}

function erasePad() {
    let gridValue =  {
        green: document.querySelectorAll("div.green").length
    
    };
    console.log(gridValue)
    if(gridValue.green > 0) {
        document.querySelectorAll("div.green").forEach(element => {
            element.classList.replace("green", "grid")
        })
    }
}

document.querySelector("p.erase").addEventListener("click", () => {
    erasePad();
   
});

function green() {
    document.querySelector(".wrapper").addEventListener("mouseover", function(event) {
        if(event.target.classList.contains("grid")) {
            event.target.classList.replace("grid", "green");
        // } else if (event.target.classList.contains("green")) {
        //     event.target.classList.replace("green", "grid");
        }
    })    
}

// function red() {
//     document.querySelector(".wrapper").addEventListener("mouseover", function(event) {
//         if(event.target.classList.contains("grid")) {
//             event.target.classList.replace("grid", "red");
//         } else if (event.target.classList.contains(classes)) {
//             event.target.classList.replace(classes, "grid");
//         }
//     })    
// }