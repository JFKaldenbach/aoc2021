"use strict";

const entries = `LA-sn
LA-mo
LA-zs
end-RD
sn-mo
end-zs
vx-start
mh-mo
mh-start
zs-JI
JQ-mo
zs-mo
start-JQ
rk-zs
mh-sn
mh-JQ
RD-mo
zs-JQ
vx-sn
RD-sn
vx-mh
JQ-vx
LA-end
JQ-sn`;

const isLowercase = (string) => /[a-z]/.test(string);

const mapping = {};

entries.split("\n").map((entry) => {
  const [e, f] = entry.split("-");
  if (!mapping[e]) mapping[e] = [];
  if (!mapping[f]) mapping[f] = [];
  mapping[e].push(f);
  mapping[f].push(e);
});

const part1 = function () {
  let paths = [];

  const dfs = function (cave, path = []) {
    path.push(cave);
    if (cave === "end") {
      paths.push(path);
      return;
    }
    for (const partner of mapping[cave]) {
      if (
        (isLowercase(partner) && path.includes(partner)) ||
        partner === "start"
      ) {
        continue;
      }
      dfs(partner, [...path]);
    }
  };
  dfs("start");
  console.log(`Part 1: ${paths.length}`);
};
part1();

const part2 = function () {
  let paths = [];

  const dfs = function (cave, once, path = []) {
    path.push(cave);

    if (cave === "end") {
      paths.push(path);
      return;
    }

    for (const partner of mapping[cave]) {
      if (partner === "start") continue;
      if (isLowercase(partner) && path.includes(partner)) {
        if (once) {
          continue;
        } else {
          dfs(partner, true, [...path]);
        }
      } else {
        dfs(partner, once, [...path]);
      }
    }
  };
  dfs("start", false);
  console.log(`Part 2: ${paths.length}`);
};
part2();

//
