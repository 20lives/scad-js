const S = require('../src/index.js');

const cube1 = x => S.cube({size: x, center: true});
const cylinder1 = x => S.cylinder({d: x, h: 12, center: true});

const cy3 = x => S.union(
  cylinder1(x).rotate({a: [90, 0, 0]}),
  cylinder1(x).rotate({a: [0, 90, 0]}),
  cylinder1(x).rotate({a: [0, 0, 90]}),
);

const cutCube = x => S.difference(cube1(x), cy3(x - 0.5));


const x = S.union(...[4, 6, 8, 10].map(x =>cutCube(x))).serialize();

console.log(x);
