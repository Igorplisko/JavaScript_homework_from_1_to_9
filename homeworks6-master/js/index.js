

 //6 (3 points)
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

 
 
 
 
 
 //6 (4 points)
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

 
 
 
 
 
 //6 (5 points)
 var style = document.head.appendChild(document.createElement('style'))
style.textContent = `.redBack {
    background-color: red!important;
}`

for(var elem of document.body.children){
  elem.tagName === 'SCRIPT' ? null : elem.className = 'redBack'
}






