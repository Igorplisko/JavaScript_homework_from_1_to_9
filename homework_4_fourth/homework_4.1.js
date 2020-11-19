// Обязательная часть ( 3 балла )
// Создайте объект, свойства которого описывают содержимое дамской сумочки
// Создайте метод объекта, позволяющий удалить что-то из сумочки
// Создайте метод объекта, позволяющий положить что-то в сумочку



var handbag = {
    keys: 'keys',
    hairbrush: 'hairbrush',
    mirror: ' mirror',
    cosmetic: 'cosmetic',
    cologne: 'cologne',
    wallet: 'wallet',
  	phone: 'phone',
  
    delete: function () {
        delete this.par_key;

    },

   adding: function (par_key = name, name ='not found') {
        this.par_key = name;
    }
}
handbag.adding('pamada'); 




//version2
var handbag  = {
	content: [
	'keys',
	'hairbrush',
	'mirror',
	'cosmetic',
	'cologne',
	'wallet',
	'phone'

	],
	addElem: function ( item ) {
		this.content.push ( item )
	} ,
	deleteElem: function ( num ) {
		this.content.splice ( num, 1 )
	}
}
console.log (handbag)
