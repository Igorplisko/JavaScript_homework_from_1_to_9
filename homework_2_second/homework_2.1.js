
 var letters = []
    var str = "Backend As A Service"
    newStr = str.split(' ')
    for (var i = 0; i < newStr.length; i++){
        letters.push((newStr[i].charAt(0)))
    }
    alert(letters)


// Создайте пустой массив letters
// Создайте строку из нескольких слов, например "Backend As A Service"
// Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова
// Выведите результат в консоль
// Объедините все элементы массива letters в одну строку и выведите ее в консоль
