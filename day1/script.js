'use strict';

const input = document.getElementById('input');
const submit = document.getElementById('submit')
const input2 = document.getElementById('input2');
const submit2 = document.getElementById('submit2')

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const inputArr = input.value.split("\n").map(Number);
    let increaseCount = 0;
    inputArr.forEach(function (_, i) {
        if (inputArr[i] > inputArr[i - 1]) {
            increaseCount++
        }
    });
    console.log(increaseCount);
});

submit2.addEventListener('click', function (e) {
    e.preventDefault();
    const inputArr = input2.value.split("\n").map(Number);
    console.log(inputArr);
    let increaseCount = 0;
    inputArr.forEach(function (_, i) {
        if (i > 2 && (inputArr[i] + inputArr[i - 1] + inputArr[i - 2]) > (inputArr[i - 1]) + inputArr[i - 2] + inputArr[i - 3]) {
            increaseCount++
        }
    });
    console.log(increaseCount);
});