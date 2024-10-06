var one = document.getElementById('one');
var two = document.getElementById('two');
var yun = document.getElementById('yun');
var three = document.getElementById('three');

var first, second, third, op;

one.addEventListener('input', calculate);
two.addEventListener('input', calculate);
yun.addEventListener('change', calculate);

function calculate(){

    op = yun.value;
    first = parseFloat(one.value);
    second = parseFloat(two.value);

    if ( op === '+') {
        third = first + second;
    } else if (op === '-') {
        third = first - second;
    } else if (op === '*') {
        third = first * second;
    } else if (op === '/') {
        third = first / second;
    } else {
        third = '';
    }
}

three.addEventListener('mouseenter', function () {
    three.innerText = third;
});
