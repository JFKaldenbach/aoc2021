"use strict";

const entries = `OFSNKKHCBSNKBKFFCVNB

KC -> F
CO -> S
FH -> K
VP -> P
KF -> S
SV -> O
CB -> H
PN -> F
NC -> N
BC -> F
NP -> O
SK -> F
HS -> C
SN -> V
OP -> F
ON -> N
FK -> N
SH -> B
HN -> N
BO -> V
VK -> H
SC -> K
KP -> O
VO -> V
HC -> P
BK -> B
VH -> N
PV -> O
HB -> H
VS -> F
KK -> B
HH -> B
CF -> F
PH -> C
NS -> V
SO -> P
NV -> K
BP -> N
SF -> V
SS -> K
FP -> N
PC -> S
OH -> B
CH -> H
VV -> S
VN -> O
OB -> K
PF -> H
CS -> C
PP -> O
NF -> H
SP -> P
OS -> V
BB -> P
NO -> F
VB -> V
HK -> C
NK -> O
HP -> B
HV -> V
BF -> V
KO -> F
BV -> H
KV -> B
OF -> V
NB -> F
VF -> C
PB -> B
FF -> H
CP -> C
KH -> H
NH -> P
PS -> P
PK -> P
CC -> K
BS -> V
SB -> K
OO -> B
OK -> F
BH -> B
CV -> F
FN -> V
CN -> P
KB -> B
FO -> H
PO -> S
HO -> H
CK -> B
KN -> C
FS -> K
OC -> P
FV -> N
OV -> K
BN -> H
HF -> V
VC -> S
FB -> S
NN -> P
FC -> B
KS -> N`;

const starter = entries.split("\n")[0];
const pairs = entries
  .split("\n\n")[1]
  .split("\n")
  .map((e) => e.split(" -> "));

const uniques = Array.from(new Set(pairs.flat(1).join("")));

const lastCharacter = starter[starter.length - 1];

const pairResults = new Map();
pairs.forEach(function (e) {
  pairResults.set(e[0], [e[0][0] + e[1], e[1] + e[0][1]]);
});

const addToMap = function (map, key, value = 1) {
  if (!map.get(key)) map.set(key, value);
  else map.set(key, map.get(key) + value);
};

const part1 = function () {
  let result = starter.split("");
  for (let step = 0; step < 10; step++) {
    for (let i = result.length - 1; i > 0; i--) {
      for (const pair of pairs) {
        if (pair[0] === result[i - 1] + result[i]) {
          result.splice(i, 0, pair[1]);
          break;
        }
      }
    }
  }

  let uniqueCount = [];
  uniques.forEach(function (unique) {
    uniqueCount.push(result.filter((e) => e === unique).length);
  });
  uniqueCount.sort((a, b) => a - b);
  console.log(uniqueCount[uniqueCount.length - 1] - uniqueCount[0]);
};
part1();

const part2 = function () {
  let polymer = new Map();
  for (let i = 0; i < starter.length - 1; i++) {
    addToMap(polymer, starter[i] + starter[i + 1]);
  }
  for (let step = 0; step < 40; step++) {
    let current = new Map(polymer);
    current.forEach(function (count, pair) {
      addToMap(polymer, pairResults.get(pair)[0], count);
      addToMap(polymer, pairResults.get(pair)[1], count);
      addToMap(polymer, pair, -count);
    });
  }
  let uniqueCount = new Map();
  polymer.forEach(function (count, pair) {
    addToMap(uniqueCount, pair[0], count);
  });
  addToMap(uniqueCount, lastCharacter);
  const values = Array.from(uniqueCount.values()).sort((a, b) => a - b);
  console.log(values[values.length - 1] - values[0]);
};
part2();
