'use strict'

var imagins =[
    '../project1/imagins/home/1.webp',
    '../project1/imagins/home/2.jpeg',
    '../project1/imagins/home/3.webp',
    '../project1/imagins/home/4.webp',
    '../project1/imagins/home/5.webp',
]

var imgElements = document.querySelector('.body_home_1_img');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var dots = document.querySelectorAll('.dot');
var imgarr = 0;

function showimg(imgarr){
    imgElements.src = imagins[imgarr];

    dots.forEach(function (dot){
        dot.classList.remove('active');
    });
    dots[imgarr].classList.add('active');
}

prevButton.addEventListener('click', function (){
    if(imgarr==0){
        imgarr = 4;
    }else{
        imgarr--;
    }
    showimg(imgarr);
});

nextButton.addEventListener('click', function (){
    if(imgarr==4){
        imgarr = 0;
    }else{
        imgarr++;
    }
    showimg(imgarr);
});

dots.forEach(function (dot,i){
    dot.addEventListener('click',function (){
        imgarr = i;
        showimg(imgarr);
    });
});

setInterval(function (){
    if(imgarr==4){
        imgarr = 0;
    }
    else{
        imgarr++;
    }
    showimg(imgarr);
},5000);
