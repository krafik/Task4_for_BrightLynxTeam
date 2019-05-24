'use strict';
let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]; //двумерный массив, котрый характеризует модель шахматной доски. 

function draw() {
    let out = '';
    document.querySelector('#field').innerHTML = '';
    let m = 0;
    for (let i = 0; i < chess.length; i++) {//цикл который рисует горизонтальные строки.
        let arr = chess[i];
        for (let k = 0; k < arr.length; k++) {//рисует внутри строки ячейки. 
            if (m % 2 == 0) {
                
                document.querySelector('#field').innerHTML += '<div class="chess-block" data-x="' + k + '" data-y="' + i + '"></div>';

            }
            else {
                
                document.querySelector('#field').innerHTML += '<div class="chess-block bg-black" data-x="' + k + '" data-y="' + i + '"></div>';
            }
            m++;
        }
        m++;
    }
    document.querySelectorAll('.chess-block').forEach(function (element) {
        element.onclick = horse;
    });
}

function horse() {
    document.querySelectorAll('.chess-block').forEach(function (element) {
        element.classList.remove('active');
        element.classList.remove('green');
    });
    // console.log(this);
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('green');
    //ниже код с условиями для отрисовки ячеек в которые может ходить фигура
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector('.chess-block[data-x="' + (+x + 2) + '"][data-y="' + (+y + 1) + '"]').classList.add('active');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector('.chess-block[data-x="' + (+x + 2) + '"][data-y="' + (+y - 1) + '"]').classList.add('active');
    }
    if (+x + 1 < 8 && +y + 2 < 8) {
       
        document.querySelector('.chess-block[data-x="' + (+x + 1) + '"][data-y="' + (+y + 2) + '"]').classList.add('active');
    }
    if (x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector('.chess-block[data-x="' + (+x - 1) + '"][data-y="' + (+y + 2) + '"]').classList.add('active');
    }
    if (x - 2 >= 0 && +y + 1 < 8) {
        document.querySelector('.chess-block[data-x="' + (+x - 2) + '"][data-y="' + (+y + 1) + '"]').classList.add('active');
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
        document.querySelector('.chess-block[data-x="' + (+x - 2) + '"][data-y="' + (+y - 1) + '"]').classList.add('active');
    }
    if (+x + 1 < 8 && y - 2 >= 0) {
        document.querySelector('.chess-block[data-x="' + (+x + 1) + '"][data-y="' + (+y - 2) + '"]').classList.add('active');
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        document.querySelector('.chess-block[data-x="' + (+x - 1) + '"][data-y="' + (+y - 2) + '"]').classList.add('active');
    }
}

draw();