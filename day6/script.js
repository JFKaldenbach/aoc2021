"use strict";

const initialFishies = `1,1,5,2,1,1,5,5,3,1,1,1,1,1,1,3,4,5,2,1,2,1,1,1,1,1,1,1,1,3,1,1,5,4,5,1,5,3,1,3,2,1,1,1,1,2,4,1,5,1,1,1,4,4,1,1,1,1,1,1,3,4,5,1,1,2,1,1,5,1,1,4,1,4,4,2,4,4,2,2,1,2,3,1,1,2,5,3,1,1,1,4,1,2,2,1,4,1,1,2,5,1,3,2,5,2,5,1,1,1,5,3,1,3,1,5,3,3,4,1,1,4,4,1,3,3,2,5,5,1,1,1,1,3,1,5,2,1,3,5,1,4,3,1,3,1,1,3,1,1,1,1,1,1,5,1,1,5,5,2,1,5,1,4,1,1,5,1,1,1,5,5,5,1,4,5,1,3,1,2,5,1,1,1,5,1,1,4,1,1,2,3,1,3,4,1,2,1,4,3,1,2,4,1,5,1,1,1,1,1,3,4,1,1,5,1,1,3,1,1,2,1,3,1,2,1,1,3,3,4,5,3,5,1,1,1,1,1,1,1,1,1,5,4,1,5,1,3,1,1,2,5,1,1,4,1,1,4,4,3,1,2,1,2,4,4,4,1,2,1,3,2,4,4,1,1,1,1,4,1,1,1,1,1,4,1,5,4,1,5,4,1,1,2,5,5,1,1,1,5`;

const initialFishiesArr = initialFishies.split(",").map(Number);

// After 1 day
/* initialFishiesArr.forEach(function (fishy, i) {
  if (fishy > 0) {
    initialFishiesArr[i] = fishy-1;
  } else if (fishy === 0) {
    initialFishiesArr.push(8);
    initialFishiesArr[i] = 6;
  }
}); */

/* for (let day = 0; day < 80; day++) {
  initialFishiesArr.forEach(function (fishy, i) {
    if (fishy > 0) {
      initialFishiesArr[i] = fishy - 1;
    } else if (fishy === 0) {
      initialFishiesArr.push(8);
      initialFishiesArr[i] = 6;
    }
  });
}
console.log(initialFishiesArr.length); */

const countFishiesPerAge = function (age) {
  return initialFishiesArr.filter((e) => e === age).length;
};
const fishiesPerAge = new Array(9).fill(0, 0, 9);

for (let age = 0; age < 8; age++) {
  fishiesPerAge[age] = countFishiesPerAge(age);
}

for (let day = 0; day < 256; day++) {
  let gaveBirth = fishiesPerAge.shift();
  if (gaveBirth > 0) {
    fishiesPerAge.push(gaveBirth);
    fishiesPerAge[6] = fishiesPerAge[6] + gaveBirth;
  } else {
    fishiesPerAge.push(0);
  }
}

console.log(fishiesPerAge);

console.log(`Total fishies: ${fishiesPerAge.reduce((a, b) => a + b)}`);
