'use strict';

const input = document.getElementById('input');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const commands = input.value.split('\n');
    let horizontal = 0;
    let depth = 0;
    commands.forEach(function (e) {
        if (e.startsWith("forward")) {
            horizontal = horizontal + Number(e.split(" ").pop());
        } else if (e.startsWith("down")) {
            depth = depth + Number(e.split(" ").pop());
        } else if (e.startsWith("up")) {
            depth = depth - Number(e.split(" ").pop());
        }
    });
    console.log(horizontal * depth);
});

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const commands = input.value.split('\n');
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    commands.forEach(function (e) {
        const positions = Number(e.split(" ").pop());
        if (e.startsWith("forward")) {
            horizontal = horizontal + positions;
            depth = depth - aim * positions;
        } else if (e.startsWith("down")) {
            aim = aim - positions;
        } else if (e.startsWith("up")) {
            aim = aim + positions;
        }
    });
    console.log(horizontal);
    console.log(depth);
    console.log(`Aim: ${horizontal * depth}`);
});