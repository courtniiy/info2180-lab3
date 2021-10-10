window.onload = function(){
    tic_tac_toe()
};


function tic_tac_toe(){
   let board = document.querySelector('#board');
   let tiles = board.querySelectorAll('div');

   let cur_player = 'O';


   for(let tile of tiles) {
       tile.setAttribute('class', 'square')

       tile.onclick = function on_click(){

        if (cur_player === 'X'){
            tile.innerText = 'O';
            tile.classList.add('O');
            cur_player = 'O';
        }
        else if (cur_player === 'O'){
            tile.innerText = 'X';
            tile.classList.add('X');
            cur_player = 'X';
        }
       }
   }
   
   

}
