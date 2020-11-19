let changeClass = ( classname, styleString ) =>  
    Array.from(document.styleSheets).filter(
    sheet => !sheet.href
  ).forEach(
    sheet => 
      Array.from(sheet.cssRules)
        .filter(
          rule => rule.selectorText === classname
        ).forEach(
          rule => rule.style[styleString.split(':')[0]] =   styleString.split(':')[1]
        )
  )
changeClass ( "paper-button", "opacity:0" )



// Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса, а затем меняет атрибуты стиля этого класса
// let changeClass = ( classname, styleString ) => ( 
//    ...
// ).length > 0 ? console.log ( "found" ) : 
//     document.head.appendChild (
//         document.createElement ( "style" )
//     ).textContent = `.${classname} {${styleString}}`
// После вызова функции:
// changeClass ( "second-level-menu", "background-color: red!important;" )
// в консоли страницы, где есть элементы с классом second-level-menu, у всех элементов этого класса цвет фона должен измениться на красный
