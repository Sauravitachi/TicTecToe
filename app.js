let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turn0 = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "black";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disablBtn = () =>{
    for(let box of boxes){
        box.disabled = true;        
    }
}

const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerHTML = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablBtn();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {        
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val === pos1val && pos1val === pos2val) {                
                showWinner(pos0val);
            }
        }

    }
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);