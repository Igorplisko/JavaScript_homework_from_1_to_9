function typeMessage ( message, velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        );
    container.style = `color: magenta;`;

    message.split("").reduce((prew, symb) => {
        setTimeout(()=> container.textContent += symb,(prew += velocity) * 1000);
        return prew
    },velocity)
}

typeMessage ( `Welcome to the hell`, 1 );




// Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду
// function typeMessage ( message, velocity ) {
//     var container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     ...
// }
// typeMessage ( `Welcome to the hell`, 1 )
