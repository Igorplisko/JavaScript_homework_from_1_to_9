var style = document.head.appendChild(document.createElement('style'));
style.textContent = `.redBack {
    background-color: red!important;
}`;

for(var elem of document.body.children){
     elem.tagName === 'SCRIPT' ? null : elem.className = 'redBack';
}



// Напилить код, который выбирает все элементы-потомки body ( :warning: кроме элементов script ) и добавляет им класc:
// .redBack {
//     background-color: red!important;
// }
// Запустить код в консоли любой страницы
// Подсказка: используйте методы объекта classList
