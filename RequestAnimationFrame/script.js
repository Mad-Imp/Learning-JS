const btn = document.querySelector('.btn'), //получаем кнопку по селектору
      elem = document.querySelector('.box');  //получаем элемент по селектору
let pos = 0; //переменная, в которую будет записываться позиция элемента

function myAnimation() { //функция анимации
    pos++; //увеличивает переменную позиции
    elem.style.top = pos + "px"; //устанавливает новые значения для инлайн стилей элемента
    elem.style.left = pos + 'px'; //устанавливает новые значения для инлайн стилей элемента

    if (pos < 300) { //если позиция меньше 300, то будем запускать анимацию
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); //запуск функции анимации по клику мыши по кнопке

let id = requestAnimationFrame(myAnimation); //запись в переменную id данной анимации
cancelAnimationFrame(id); //остановка анимации