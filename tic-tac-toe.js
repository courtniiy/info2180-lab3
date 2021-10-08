
window.onload = function() {myFunction()};


function myFunction(){
    let el_list = document.getElementById('board');
    let add_class = el_list.querySelectorAll('div');
    
    add_class.forEach(element => element.setAttribute('class', 'square'));
}
