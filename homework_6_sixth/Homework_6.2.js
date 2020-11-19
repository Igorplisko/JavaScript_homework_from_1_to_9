var tags = [
{
    name:'p',
    attrs:{
        className: 'paragraf',
        innerText:'Hello p'
}
},
{
  name: 'img',
  attrs : {
    className: 'elem_img',
    src: 'https://pbs.twimg.com/profile_images/970300343425945601/5LeEUlpw.jpg',
    title: 'Its cool',
}
},

{
 name:'header',
 attrs:{
    title: 'Its great',
    className: 'nav',
    innerText:'Hello nav'
}
},

{
    name:'footer',
    attrs:{
        className: 'wrap',
        innerText:'Hello footer'
    }
},
{
    name:'main',
    attrs:{
        className: 'page',
        innerText:'Hello main'

    }
},

{
    name:'div',
    attrs:{
        className: 'frame',
        innerText:'Hello div'

    }
}]



var style = document.head.appendChild(document.createElement('style'))

style.textContent = `
.nav, .wrap, .page, .frame, .paragraf{
   width: 200px;
   height: 300px;
}
img{
    width: 200px;
}

.nav{
    background-color: silver;

}
.wrap{
    background-color: blue;


}
.page{
    background-color: red;
}
.frame{
   background-color: green;

}
.paragraf{
   background-color: yellow;
}
`
function clickHandler(event){
  function randomColor(){
    return Math.round(Math.random() * 255)
}
event.target.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}
for(var tag of tags){
 var elem = document.body.appendChild(
    document.createElement(`${tag.name}`)
    )
 for(var attr in tag.attrs)
    elem[attr] = tag.attrs[attr]
elem.onclick = function (event){
    clickHandler(event)
}
}

// Результат должен быть аналогичен тому, что получится в предыдущем упражнении
// Однако исходный массив tags должен быть массивом объектов, каждый из которых содержит не только имя тега элемента, но и его атрибуты, а так же хотя бы один обработчик события
// Таким образом, массив classes нам уже не нужен, но кроме стилизации элементов нужно еще добавить их контент, используя как атрибуты тегов, так и свойства элементов DOM





