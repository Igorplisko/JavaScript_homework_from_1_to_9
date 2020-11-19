function User(name) {
    this.name = name;
    this.id = this.counter()

}

User.prototype.counter = (function () {
    var id = 0;
    return function () {
        return typeof this.id === 'number' ? id : id++;
    }
})();

var users = [
    new User("Семен"),
    new User("Антон"),
    new User("Демьян"),
    new User("Василий")
];



// Нужно сделать так, чтобы у всех экзепляров, созданных конструктором User, был унаследованный метод counter(), который считает созданные конструктором экземпляры
// Каждый вызов конструктора увеличивает счетчик экземпляров на 1 и помещать новое значение счетчика в свойство id созданного экземпляра:
// function User ( name ) {
//     this.name = name
//     this.id = this.counter()
// }
// ...
// var users = [
//     new User ( "Семен" ),
//     new User ( "Антон" ),
//     new User ( "Демьян" ),
//     new User ( "Василий" )
// ]
// :warning: После выполнения кода:
// users[1].id = users[1].counter()
// свойство id экземпляра не должно измениться, так же, как и значение счетчика
