document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById("board");
    const gamestat = document.getElementById("status");
    const game = document.getElementById("game")
    const gamecontrols = document.getElementsByClassName("controls");
    const startbutton = document.getElementsByClassName("btn");
    const boxes = board.querySelectorAll("div");
    const cells = ["","","","","","","","",""];
    let playerx = "X";
    let gameends = false;
    const win_methods = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ];

    for (let i=0; i<=8; i++)
    {
        boxes[i].classList.add("square");

    }
    function squareclick (ele, i)
    {
        if(ele.innerHTML === "" && !gameends){
            ele.innerHTML = playerx;
            ele.classList.add(playerx);
            cells[i] = playerx;
            console.log(cells);

            if(playerx ==="X"){
                playerx = "O";
                checkwin();
            }
            else{
                playerx = "X";
                checkwin();
            }
        }
    }

    boxes.forEach((element,index)=>{
        element.addEventListener('click', () => squareclick(element,index));
        element.addEventListener('mouseover', function(){
            element.classList.add("hover");
        });
        element.addEventListener('mouseout', function(){
            element.classList.remove("hover");
        })
    })

    function checkwin(){
        for (i=0;i<=win_methods.length;i++){
            const wins = win_methods[i]
            const elem1= cells[wins[0]]
            const elem2= cells[wins[1]]
            const elem3 = cells[wins[2]]
            if (elem1 === playerx && elem2===playerx && elem3===playerx){
                gameends = true;
                gamestat.innerHTML= 'Congratulations ' + playerx+ ' is the winner';
                gamestat.classList.add("you-won");
            }
            if (elem1===" "||elem2===" "||elem3===" "){
                continue;
            }
        }
    }
    startbutton.addEventListener('click', ()=>{
        cells = ["","","","","","","","",""];
        gamestat.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        gamestat.classList.remove("you-won");
        boxes.forEach(element=>{
                element.innerText=""
                element.className = "square"
        })
        playerx = "X"
        gameends = false;
    })
})