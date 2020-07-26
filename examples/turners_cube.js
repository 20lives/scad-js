const S = require('../src/index.js');

const cylinder1 = x => S.cylinder(12, x / 2);

const cy3 = x => S.union(
  cylinder1(x).rotate([90, 0, 0]),
  cylinder1(x).rotate([0, 90, 0]),
  cylinder1(x).rotate([0, 0, 90]),
);

const cutCube = x => S.difference(S.cube(x), cy3(x - 0.5));

const x = S.union(...[4, 6, 8, 10].map(x => cutCube(x))).serialize();

console.log(x);
