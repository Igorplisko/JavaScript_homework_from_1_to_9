var users = (
  function ( list ) {
    var users = []
    for ( var user of list )
      users.push ({
        name: user,
        present: false
      })

    return {
      setUserPresent ( userName, present ) {
        let user = users.find(
          item => item.name === userName
          )
        user ? user.present = present : null
      },
      showPresent () {
        console.log(
          users.filter(
            item => item.present
            )

          )
      },
      showAbsent () {
       console.log(
        users.filter(
          item => !item.present
          )

        )   
     }
   }
 }
 )( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )



// Напилите код методов setUserPresent, showPresent и showAbsent
// var users = (
//     function ( list ) {
//         var users = []
//         for ( var user of list )
//             users.push ({
//                 name: user,
//                 present: false
//             })

//         return {
//             setUserPresent ( userName, present ) {
//                 ...
//             },
//             showPresent () {
//                 ...
//             },
//             showAbsent () {
//                 ...
//             }
//         }
//     }
// )( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

// users.showAbsent()
// После запуска кода результат в консоли должен быть таким:

// Иван
// Дмитрий
// Степан
// Михаил
// а после выполнения кода:

// users.setUserPresent( "Иван", "+" )
// users.setUserPresent( "Михаил", "присутствовал" )
// users.setUserPresent( "Степан", true )

// users.showPresent()
// результат в консоли должен быть таким:

// Иван
// Степан
// Михаил
