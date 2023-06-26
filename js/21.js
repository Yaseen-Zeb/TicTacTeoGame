// VARIABLES----------->>>
let game_music = new Audio("Tools/mainMusic.mp3")
let turnChange_music = new Audio("Tools/turn.wav")
let turn = "X"
let boxes = document.querySelectorAll(".box")
let info = document.querySelector(".info")
let play_board = document.querySelector(".first")
let gif = document.querySelector(".gif")
let line = document.querySelector(".line")
let reset = document.querySelector(".reset")
let boxtext = document.querySelectorAll(".boxText")
let gameOver = false;

console.log(boxtext);
boxes.forEach((box) => {
    
});



// Function making------>>>>
function turnChange() {
  return turn === "X" ? "0":"X";
}





function CheckWin() {
    let win = [
        [0,1,2,85,54,0],
        [3,4,5,243,54,0],
        [6,7,8,404,54,0],
        [1,4,7,241,61,90],
        [0,3,6,241,-104,90],                             
        [2,5,8,241,216,90],
        [0,4,8,237,54,45],
        [2,4,6,241,54,135]
    ]
    win.forEach((e) => {
    if ((boxtext[e[0]].textContent === boxtext[e[1]].textContent) && (boxtext[e[1]].textContent === boxtext[e[2]].textContent) &&  (boxtext[e[1]].textContent !== "")){
        
        $('.show_model').click();
            gif.style.height = "150px"
            gif.style.width = "150px"
            gameOver = true;
            play_board.style.pointerEvents = "none"
    }
    });
}


// GAME LOGIC--------->>>
boxes.forEach((box) => {
    let boxText = box.querySelector(".boxText")
    box.addEventListener("click",()=>{
        if (boxText.innerText === '') {
            turnChange_music.play()
            boxText.innerText = turn;
            turn=turnChange();
           CheckWin();
           let result_info = document.querySelector(".result_info");
            if (gameOver === false){
                info.textContent = `Turn for ${turn}`
        }else{
            
            // $jQuery(".show_model").click();
           
            result_info.textContent = `${turn = turnChange()} WON`
        }
            
        }
    })
})


reset.addEventListener("click",()=>{
    window.location.href = window.location.href
 })
