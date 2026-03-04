const divWrap = document.querySelector("#wrap");
const btnCreate = document.querySelector("#create");

btnCreate.addEventListener("click", () => {
    let square = prompt("Insert the size (1 to 100):");
    if(square > 100){
        alert("Sorry, try again, invalid number");
    }
    createGrid()
})

function createGrid(size = 16){

    divWrap.innerHTML = '';

    const squareSize = 100 / size;

    for(let i = 0; i < size * size; i++){
    const square = document.createElement("div");
    square.style.height = `${squareSize}%`;
    square.style.width = `${squareSize}%`;
    square.style.boxSizing = 'border-box';
    square.style.border = '1px solid black';
    divWrap.appendChild(square);
    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "black";
})
    }
}

createGrid(16);

