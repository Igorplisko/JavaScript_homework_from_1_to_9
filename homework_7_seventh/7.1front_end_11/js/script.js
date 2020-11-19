
//homework 6--------------------------------------homework 6
var myBody = document.body;
var paragraf = document.createElement('p');
var myImg = document.createElement('img');
var text = 'Click on the Paracraf'
// text.style.fontSize = "medium";

myBody.appendChild(paragraf).innerHTML = text;
myImg.style = 'width : 200px';
paragraf.addEventListener('click',get_img);

function get_img( ){
    paragraf.appendChild(myImg);
    myImg.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtovAdIQkG3RVzET-Sai17OuVWhd8bGEbG059N9iE6ci_ciRV7');

}

myImg.addEventListener('mouseover',enlarge_img);
function enlarge_img( ){
    myImg.style.width = "300px";
}

myImg.addEventListener('mouseout',reduce_img);
function reduce_img( ){
    myImg.style.width = "200px";
}




//galery-----------------------------------------------galery
var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;

btn_prev.onclick = function(){
     images[i].style.display = 'none';
     i = i - 1; /* i-- */
     
     if(i < 0){
         i = images.length - 1;
     }
     
     images[i].style.display = 'block';
}

btn_next.onclick = function(){
     images[i].style.display = 'none';
     i = i + 1; /* i++ */
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].style.display = 'block';
}


// document.body.appendChild(document.createElement('div')).appendChild(document.createElement('span')).innerHTML='GALLERY';

