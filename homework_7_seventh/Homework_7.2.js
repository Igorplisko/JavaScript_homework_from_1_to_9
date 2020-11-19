var collection = []

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
   event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.target.remove()
}


[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
    let x = ( index ? collection[index-1] : document.body ).appendChild(
      document.createElement('div')
    )
    collection.push(x)
    x.style = ` 
      width: ${400 - index * 50}px;
      height: ${400 - index * 50}px;
      background-color: #ff00ff50;
      border: dotted 1px yellow;
    `
    x.title = tag;

    x.onmouseover = over;
    x.onmouseout = out;
    x.onclick = clickHandler;
    }
)

// Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout
// var collection = []
// function over ( event ) {
//     ...
// }
// function out ( event ) {
//     ...
// }
// function clickHandler ( event ) {
//     ...
// }
// [ "first", "second", "third", "fourth" ].forEach (
//     function ( tag, index, arr  ) {
//         ...
//     }
// )
// Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель
// Установите значение #ff00ff50 атрибута background-color каждому элементу
// Установите значение dotted 1px yellow; атрибута border каждому элементу
// При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050
// При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение
// При наступлении события click элемент должен быть удален
// При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", "fourth" )
