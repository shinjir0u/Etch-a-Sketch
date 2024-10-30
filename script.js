/*
Pseudocode
    CREATE variable container for grid-container
    CREATE variable boxes for each boxes inside the container
    CREATE 16x16 grid of div boxes 

    Boxes creation
        CREATE 16 divs each with 16 vertical boxes inside 
        ASSIGN each with class name (box)
        ADD black border to each box
        ADD mouse hover event

    Mouse Hover Event
        IF mouse pointer is over the element
            SET the color of the box black

    Change grid size 
        ADD button action if clicked
        PRoMPT users with a custom number for the grid
        CREATE a inputGrid variable and store the number
        CREATE grid variable and store inputGrid if present, otherwise store 16
*/

const container = document.querySelector(".grid");
const manualGridButton = document.querySelector(".manual-grid-button");
const resetButton = document.querySelector(".grid-reset");
const resetDefaultButton = document.querySelector(".grid-reset-default");
const DEFAULT_GRID = 16;
let manualGrid;
let grid = DEFAULT_GRID;

displayGrid(container, grid);

manualGridButton.addEventListener("click", () => {
    manualGrid = prompt("Enter the number of row and columns for the grid. (Maximum: 100)");
    removeBoxes(container);
    if (manualGrid > 0 && manualGrid <= 100) {
        grid = manualGrid;
        displayGrid(container, manualGrid);
    }
    else {
        alert("Invalid Input");
        displayGrid(container, DEFAULT_GRID);
    }
});

resetButton.addEventListener("click", () => {
    removeBoxes(container);
    displayGrid(container, grid)
});

resetDefaultButton.addEventListener("click", () => {
    removeBoxes(container);
    displayGrid(container, DEFAULT_GRID);
});

function displayGrid(container, grid) {
    for (let i = 0; i < grid; i++) {
        const verticalContainer = document.createElement("div");
        createBoxes(verticalContainer, grid);
        verticalContainer.style.cssText = `display: flex;
                                            flex-direction: column;
                                            gap: 2px;
                                            flex: auto;`;
        container.appendChild(verticalContainer);
    }
}

function createBoxes(verticalContainer, grid) {
    for (let i = 0; i < grid; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style = `border: 2px solid black; 
                    min-width: 10px; 
                    min-height: 10px;
                    flex: auto;`;
        box.addEventListener("mouseover", hoverChange);
        verticalContainer.appendChild(box);
    }
}

function removeBoxes(container) {
    for (let child of Array.from(container.children)) {
        child.remove();
        console.log(child);
    }
}

function hoverChange(event) {
    event.target.style.backgroundColor = "black";
}