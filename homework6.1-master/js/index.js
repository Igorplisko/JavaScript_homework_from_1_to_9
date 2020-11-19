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