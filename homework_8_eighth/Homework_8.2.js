var typeMessage = (function (velocity) {
    let container = document.getElementById("demo") ?
        document.getElementById("demo") :
        document.body.appendChild(
            document.createElement("h3")
        );
    container.style = `color: magenta;`;

    return function (message) {
        message = String(message);
        var strArr = message.split('');
        setTimeout(() => {
            if (strArr.length) {
                container.textContent += strArr.shift();
                arguments.callee(strArr.join(''))
            }
        }, 1000 * velocity)
    }
})(1);

typeMessage(`Welcome to the hell`);





//version 2 
var typeMessage = ( function ( velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    let index = 0
  
    return function recurs ( message ) {
      let letter = message.split("").shift()
      message = message.slise(1)
      setTimeout(
      () => conteiner.textContent += letter
      , 1000 * index++ * velocity  
      )
  
    while (message.length) recurs(message)
    }
})( 1 )

typeMessage ( `Welcome to the hell` )



// Завершите код рекурсивной функции typeMessage так, чтобы при ее вызове на страницу выводился один символ в секунду
// var typeMessage = ( function ( velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     var index = 0
//     return function ( message ) {
//         ...
//     }
// })( 1 )

// typeMessage ( `Welcome to the hell` )
