function testingConstr(age, hobby){
    this.age = age || 25
    this.hobby = hobby || "Football"
    this.addProperty = function( name, value){
        this[name] = value
    }
}
var test = new testingConstr


// Объявите конструктор, который создает экземпляры с унаследованным методом addProperty
// Метод addProperty должен принимать два аргумента:
// имя свойства
// значение свойства
// и добавлять экземпляру новое свойство с указанным именем и значением
