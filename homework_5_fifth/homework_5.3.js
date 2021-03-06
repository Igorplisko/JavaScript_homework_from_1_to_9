function testArguments () {
    function generateError ( numArgs ) {
     var err = new Error('Invalide arguments')
     err.name = 'Application';
     err.stack = `Function needs 3 arguments, but only ${numArgs} present`
     throw err;
 }
 try {
    arguments.length >= 3 ? null : generateError ( arguments.length )
} 
catch ( err ) {
    console.error ( `${err.name}: ${err.message}\n${err.stack}` )
}
}

testArguments ( "Google" )


// Напилите код функции generateError, такой, чтобы в результате работы кода:
// в консоли было сообщение от ошибке:
// ► Application: Invalid arguments
// Function needs 3 arguments, but only 1 present
