

// Объявите функцию userInfo, которая выводит в консоль:
// свойство "Дата регистрации: " + свойство data контекста вызова, если свойство registered имеет значение true
// сообщение "Незарегистрированный пользователь: " + свойство name в противном случае
// ( используйте переменные в литералах )
// Создайте два объекта с одинаковым набором свойств:
// name ( строка )
// registered ( логическое значение )
// data ( дата в формате "дд.мм.гг" )
// Добавьте каждому объекту метод getInfo, который будет ссылкой на функцию userInfo
// Вызовите каждый метод






function userInfo () {
	return this.registered ? 
	`Дата регистрации:  ${this.data}` : 
	`Незарегистрированный пользователь: ${this.name}`;
}

var user1 = {
	name : 'Kris',
	registered : true,
	data : new Date().toLocaleString(),
	getInfo : userInfo
};

var user2 = {
	name : 'Dasha',
	registered : false,
	data : new Date().toLocaleString(),
	getInfo : userInfo
};

console.log(user1.getInfo());
console.log(user2.getInfo());

//version2

function userInfo() {
	this.registered == true ? alert(`Дата регистрации: ${this.data}`)
	: alert(`Незарегистрированный пользователь: ${this.name}`)
}

var user1 = {
	name: "Kris",
	registered: true,
	data: new Date(1995, 8, 11),
	getInfo: userInfo
}
var user2 = {
	name: "Dasha",
	registered: false,
	data: new Date(),
	getInfo: userInfo
}

