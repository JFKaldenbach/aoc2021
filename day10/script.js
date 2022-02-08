"use strict";

const entries = `[({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]`;

const entriesArr = entries.split("\n").map((entry) => entry.trim());

const part1 = function () {
  /*   const completeArr = entriesArr.filter(function (e) {
    if (/>|\)|\}|\]/.test(e[e.length - 1]) && e.length % 2 === 0) return e;
  });
  const complete = completeArr.map((e) => e.reduce((a, b) => a + b));

  const reduced = complete.map(function (e) {
    while (e.match(/\(\)|<>|\{\}|\[\]/)) {
      e = e.replace(/\(\)|<>|\{\}|\[\]/, "");
    }
    return e;
  });

  complete.forEach((e) => console.log(e.length));
  console.log(completeArr);
  console.log(complete);
  console.log(reduced);
  */

  const pairMap = { "(": ")", "[": "]", "{": "}", "<": ">" };
  const scoreMapping = { ")": 3, "]": 57, "}": 1197, ">": 25137 };
  let score = 0;

  for (const line of entriesArr) {
    const stack = [];
    for (const character of line) {
      if ("([{<".includes(character)) {
        stack.push(character);
      } else if (character !== pairMap[stack.pop()]) {
        score += scoreMapping[character];
        break;
      }
    }
  }
  console.log(score);
};

part1();

const part2 = function () {
  const pairMap = { "(": ")", "[": "]", "{": "}", "<": ">" };
  const scoreMapping = { ")": 1, "]": 2, "}": 3, ">": 4 };
  let totalScore = [];

  for (const line of entriesArr) {
    const stack = [];
    let isValid = true;

    for (const character of line) {
      if ("([{<".includes(character)) {
        stack.push(character);
      } else if (character !== pairMap[stack.pop()]) {
        isValid = false;
      }
    }

    if (isValid) {
      let score = 0;
      while (stack.length > 0) {
        score *= 5;
        score += scoreMapping[pairMap[[stack.pop()]]];
      }
      console.log(stack);
      totalScore.push(score);
    }
  }

  totalScore.sort((a, b) => a - b);
  console.log(totalScore[Math.floor(totalScore.length / 2)]);
};

part2();

//
