var username = document.getElementById('username');
var usernameerror = document.getElementById('username_error');
var password = document.getElementById('password');
var psd = document.getElementById('psd');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var birthday = document.getElementById('birthday');

username.addEventListener('change',()=>{
    if(username.value.length < 2 || username.value.length > 6){
        usernameerror.innerText = '用户名不正确';
    }else{
        if(/[a-z]{2,6}/.test(username.value) === false){
            usernameerror.innerText = '用户名不正确';
        }
    }
});












