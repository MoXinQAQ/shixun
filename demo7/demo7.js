
// // typeof判断类型
// (function tpof(){
//     console.log(typeof 123);
//     console.log(typeof '123');
// })();


// // parseInt把字符串转换为整数
// // parseFloat把字符串转化为浮点数
// (function zhuanhuan(){
//     console.log(parseInt('1.23'));
//     console.log(parseInt('12a34'));

//     console.log(parseFloat('1.23'));
//     console.log(parseFloat('12a12'));
// })();


// var denglu = document.getElementsByClassName('denglu');
// console.log(denglu);

// var height = document.documentElement.clientHeight;
// console.log(height);


var imagins =[
    '../project1/imagins/home/1.webp',
    '../project1/imagins/home/2.jpeg',
    '../project1/imagins/home/3.webp',
    '../project1/imagins/home/4.webp',
    '../project1/imagins/home/5.webp',
]

var imgElements = document.querySelector('.home_img');
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













