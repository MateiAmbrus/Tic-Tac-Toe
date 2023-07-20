let action = true;
let clicks = 0;
const inputs = document.querySelectorAll(".square");
inputs.forEach(input => {
    input.addEventListener("click",()=>{
        clicks++;
        switch(true){
            case input.textContent==="" && action===true:
                input.textContent ="X";
                action=false;
                break;
            case input.textContent==="" && action===false:
                input.textContent ="O";
                action=true;
                break;
            default:
                console.log("The Game is Over");
        }
        switch(true){
            case inputs[0].textContent === "X" && inputs[1].textContent === "X" && inputs[2].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[0].textContent === "O" && inputs[1].textContent === "O" && inputs[2].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[3].textContent === "X" && inputs[4].textContent === "X" && inputs[5].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[3].textContent === "O" && inputs[4].textContent === "O" && inputs[5].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;    
            case inputs[6].textContent === "X" && inputs[7].textContent === "X" && inputs[8].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[6].textContent === "O" && inputs[7].textContent === "O" && inputs[8].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;    
            case inputs[0].textContent === "X" && inputs[3].textContent === "X" && inputs[6].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[0].textContent === "O" && inputs[3].textContent === "O" && inputs[6].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;    
            case inputs[1].textContent === "X" && inputs[4].textContent === "X" && inputs[7].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[1].textContent === "O" && inputs[4].textContent === "O" && inputs[7].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;    
            case inputs[2].textContent === "X" && inputs[5].textContent === "X" && inputs[8].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[2].textContent === "O" && inputs[5].textContent === "O" && inputs[8].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;    
            case inputs[0].textContent === "X" && inputs[4].textContent === "X" && inputs[8].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[0].textContent === "O" && inputs[4].textContent === "O" && inputs[8].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;    
            case inputs[2].textContent === "X" && inputs[4].textContent === "X" && inputs[6].textContent === "X":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player X Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case inputs[2].textContent === "O" && inputs[4].textContent === "O" && inputs[6].textContent === "O":
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Player O Wins!";
                document.querySelector(".last-message").style.display="block";
            break;
            case clicks === 9:
                document.querySelector(".game-over").style.display="block";
                document.querySelector(".last-message").textContent="Tie!";
                document.querySelector(".last-message").style.display="block";        
        }
        
    });
});
