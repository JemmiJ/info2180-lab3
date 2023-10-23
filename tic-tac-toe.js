document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById("board");
    const gamestat = document.getElementById("status");
    const game = document.getElementById("game")
    const gamecontrols = document.getElementsByClassName("controls");
    const startbutton = document.getElementsByClassName("btn")[0];
    const boxes = board.querySelectorAll('div');
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
        boxes[i].setAttribute("class", "square");

    }
    function squareclick (ele, i)
    {
        console.log(ele.innerHTML)
        if(ele.innerHTML === "" && !gameends/*||ele.innerHTML !== "O"*/){
            ele.innerHTML = playerx;
            ele.classList.add(playerx);
            cells[i] = playerx;
            console.log(cells);
            //checkwin();
            if(playerx ==="X"){
                playerx = "O";
            }
            else{
                playerx = "X";
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
 /*   boxes.forEach((element) =>{
        element.addEventListener("click", ()=>{
            if(playerX){
                playerX = false;
                element.innerText='X';
                element.disabled =true;
            }else{
                playerX = true;
                element.innerText='O';
                element.disabled =true;
            }
        })
    })*/
})
/*window.onload = function() {
    const board = document.getElementById("board");
    const gamestat = document.getElementById("status");
    const game = document.getElementById("game")
    const gamecontrols = document.getElementsByClassName("controls");
    const startbutton = document.getElementsByClassName("btn")[0];
    const boxes = board.querySelectorAll('div');
    const cells = ["","","","","","","","",""];
    const playerX = 'x';
    const playerO = 'circle';
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

    for (let i=0; i<=8; i++){
        boxes[i].setAttribute("class", "square");
    }

}*/

/*window.onload = function(){
    const game=document.getElementById("game");
    const status=document.getElementById("status");
    const board=document.getElementById("board");
    const controls=document.getElementsByClassName("controls");
    const button=document.getElementsByClassName("btn")[0];

    const e= board.querySelectorAll('div');
    let play = 'X';
    let poslst=['', '', '', '', '', '', '', '', ''];

    const wincrit= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let z=0; z<=8; z++){
        e[z].setAttribute("class", "square");
    }

    const user= (element,index) =>{
        console.log(element.innerText)
        if(element.innerText !== 'X' || element.innerText !== 'O'){
            element.innerText= play;
            element.classList.add(play);
            poslst[index]=play;
            console.log(poslst);
            verifywin();
            if(play === 'X'){
                play='O';
            }
            else
            {
                play='X';
            }
        }

    }
    
    e.forEach( (element, index) => {
        element.addEventListener('click', () => user(element, index));
        element.addEventListener('mouseover', function(){
            element.classList.add('hover');
        });
        element.addEventListener('mouseout', function(){
            element.classList.remove('hover');
        });
    });
   
    
    button.addEventListener('click', ()=>{
        poslst=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won');
        e.forEach(element =>{
            element.innerText ='';
            element.classList.remove('X');
            element.classList.remove('O');
        });
    });

    function verifywin(){
        for(let w=0; w<=7; w++){
            const win = wincrit[w];
    
            const pos1= poslst[win[0]];
            const pos2 = poslst[win[1]];
            const pos3 = poslst[win[2]];
            if (pos1 === ''|| pos2 === ''|| pos3===''){
                continue;
            }  
            if (pos1=== pos2 && pos2 === pos3){
                status.innerHTML= 'Congratulations! ' + pos1 +' is the winner';                
                status.classList.add('you-won');
                break;
            }  

        }
    }
}*/