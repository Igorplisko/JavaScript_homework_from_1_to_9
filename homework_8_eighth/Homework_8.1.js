(function(){
    var wrapper = document.body.appendChild(document.createElement('div'));

    var timer = setInterval( () => {
        var date = new Date().toLocaleString();
        return wrapper.innerText = `${date}`
    },1000);

    setTimeout(  () => {
        clearInterval(timer);
         wrapper.innerText = ''
    },100000)
})();


// Напилите код, выводящий на страницу текущее время в течение 100 секунд
// Подсказка: создайте элемент, в котором будет отображаться текущее время
// Контент элемента должен обновляться каждую секунду
