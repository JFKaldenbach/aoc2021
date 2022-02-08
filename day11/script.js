"use strict";

const entries = `4743378318
4664212844
2535667884
3273363861
2282432612
2166612134
3776334513
8123852583
8181786685
4362533174`;

const part1 = function () {
  // Increase energy of all by 1
  // If value > 9
  //// => flash
  //// => increase energy of all surrounding by 1
  //// Repeat this step
  // Everything that flashed back to 0;

  const entriesArr = entries
    .split("\n")
    .map((entry) => entry.trim().split("").map(Number));

  const flashStep = function (arr, row, column) {
    if (arr[row][column] !== 0) {
      arr[row][column]++;
    }
  };
  // deze 100 keer runnen
  let flashes = 0;
  for (let i = 0; i < 1000; i++) {
    let flashesStep = 0;

    for (let row = 0; row < entriesArr.length; row++) {
      for (let column = 0; column < entriesArr[row].length; column++) {
        if (entriesArr[row][column] < 10) {
          entriesArr[row][column]++;
        }
      }
    }

    let flashed;
    do {
      flashed = false;
      for (let row = 0; row < entriesArr.length; row++) {
        for (let column = 0; column < entriesArr[row].length; column++) {
          if (entriesArr[row][column] > 9) {
            entriesArr[row][column] = 0;
            if ([row - 1] >= 0 && [column - 1] >= 0) {
              flashStep(entriesArr, [row - 1], [column - 1]);
            }
            if ([row - 1] >= 0) flashStep(entriesArr, [row - 1], [column]);
            if ([row - 1] >= 0 && [column + 1] < entriesArr[row].length)
              flashStep(entriesArr, [row - 1], [column + 1]);
            if ([column + 1] < entriesArr[row].length)
              flashStep(entriesArr, [row], [column + 1]);
            if (
              [column + 1] < entriesArr[row].length &&
              [row + 1] < entriesArr.length
            )
              flashStep(entriesArr, [row + 1], [column + 1]);
            if ([row + 1] < entriesArr.length)
              flashStep(entriesArr, [row + 1], [column]);
            if ([row + 1] < entriesArr.length && [column - 1] >= 0)
              flashStep(entriesArr, [row + 1], [column - 1]);
            if ([column - 1] >= 0) flashStep(entriesArr, [row], [column - 1]);
            flashed = true;
            flashesStep++;
          }
        }
      }
    } while (flashed);
    if (flashesStep === entriesArr.flat(2).length) console.log(i + 1);
  }
};
part1();

const part2 = function () {};

part2();

//
