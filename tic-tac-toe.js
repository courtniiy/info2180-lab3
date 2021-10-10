window.onload = function(){
    tic_tac_toe()
};


function tic_tac_toe(){
   let board = document.querySelector('#board');
   let tiles = board.querySelectorAll('div');

   let cur_player = 'O';
   let gameTracker= ['h','h','h','h','h','h','h','h','h']
   let tile_address = 0;
   let status =document.getElementById('status')


   for(let tile of tiles) {
       tile.setAttribute('class', 'square')
       tile.id = tile_address ++;

       tile.onclick = function on_click(){

        if (cur_player === 'X'){
            tile.innerText = 'O';
            tile.classList.add('O');
            cur_player = 'O';
            gameTracker[tile.id] = "O";
        }
        else if (cur_player === 'O'){
            tile.innerText = 'X';
            tile.classList.add('X');
            cur_player = 'X';
            gameTracker[tile.id] = "X";
        }

        if (gameTracker[0]!== 'h' && (gameTracker[0]== gameTracker[1] && gameTracker[1]==gameTracker[2])){
            status.innerText = 'Congratulations! ' + gameTracker[0] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }
        else if (gameTracker[3]!== 'h' && (gameTracker[3]== gameTracker[4] && gameTracker[4]==gameTracker[5])){
            status.innerText = 'Congratulations! ' + gameTracker[3] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }

        else if (gameTracker[6]!== 'h' && (gameTracker[6]== gameTracker[7] && gameTracker[7]==gameTracker[8])){
            status.innerText = 'Congratulations! ' + gameTracker[6] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }

        else if (gameTracker[0]!== 'h' && (gameTracker[0]== gameTracker[3] && gameTracker[3]==gameTracker[6])){
            status.innerText = 'Congratulations! ' + gameTracker[0] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }

        else if (gameTracker[2]!== 'h' && (gameTracker[2]== gameTracker[4] && gameTracker[4]==gameTracker[6])){
            status.innerText = 'Congratulations! ' + gameTracker[1] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }

        else if (gameTracker[4]!== 'h' && (gameTracker[1]== gameTracker[4] && gameTracker[4]==gameTracker[7])){
            status.innerText = 'Congratulations! ' + gameTracker[1] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }

        else if (gameTracker[2]!== 'h' && (gameTracker[2]== gameTracker[5] && gameTracker[5]==gameTracker[8])){
            status.innerText = 'Congratulations! ' + gameTracker[2] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }

        else if (gameTracker[0]!== 'h' && (gameTracker[0]== gameTracker[4] && gameTracker[4]==gameTracker[8])){
            status.innerText = 'Congratulations! ' + gameTracker[0] + ' is the Winner!'
            status.setAttribute('class','you-won');
        }






       }

       tile.onmouseover = function mouse_over(){
        tile.classList.add('hover');
       }

       tile.onmouseout = function mouse_out(){
           tile.classList.remove('hover');
       }


   }
   
   

}
