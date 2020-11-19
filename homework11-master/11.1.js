

let promise  = new Promise(
  function(resolve, reject){

const request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/user/1')
request.onreadystatechange = function(event){
  event.target.readyState === 4 ?
    event.target.status === 200 ?
          resolve(event.target.responseText):    
        reject(event.target.responseText): null

    }
    request.send()
    }
)
promise.then(
    response => console.log(response),
    err => console.log(err)
)


// Предварительная подготовка:
// Создать файл с данными в формате JSON

// Это должен быть массив объектов с двумя свойствами: title и ref

// title - название картинки
// ref - ссылка на картинку
// Задание:
// Загрузить данные из JSON-файла
// Распарсить данные в массив
// Вывести на страницу картинки и подписи к ним
