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
*/

const container = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    const verticalContainer = document.createElement("div");
    for (let i = 0; i < 16; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style = `border: 2px solid black; 
                    min-width: 40px; 
                    min-height: 40px;
                    flex: auto;`;
        box.addEventListener("mouseover", hoverChange);
        verticalContainer.appendChild(box);
    }
    verticalContainer.style.cssText = `display: flex;
                                        flex-direction: column;
                                        gap: 5px;
                                        flex: auto;`;
    container.appendChild(verticalContainer);
}

function hoverChange(event) {
    event.target.style.backgroundColor = "black";
}