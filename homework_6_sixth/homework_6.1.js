var tags = ["header", "footer", "main", "div", "p" ]
var classes = ["nav", "wrap", "page", "frame", "paragraf"]

var style = document.head.appendChild(document.createElement('style'))

style.innerHTML = `
.nav{
	background-color: silver;
	width: 600px;
	height: 100px;
}
.wrap{
	background-color: blue;
	width: 200px;
	height: 300px;

}
.page{
	background-color: red;
	width: 200px;
	height: 50px;
}
.frame{
	background-color: green;
	width: 200px;
	height: 50px;

}
.paragraf{
	background-color: yellow;
	width: 200px;
	height: 50px;
}
`
for(var tag in tags){
	document.body.appendChild(
		document.createElement(`${tags[tag]}`))
	.setAttribute('class',`${classes[tag]}`)
}


// Создайте массив tags с именами валидных тегов HTML5
// Теперь создайте массив classes с именами классов
// ( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )
// Создайте элемент style и вставьте его в head документа
// Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes
// Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes
