const transformations = require('./transformations.js');
const modifiers = require('./modifiers.js');
const serialize = require('./serialize.js');

const center = true;
const undef = 'undef';

const fn = 0;
const fa = 12;
const fs = 2;

const object = type => params => ({
  type,
  params,
  ...transformations,
  ...modifiers,
  serialize,
});

const circle = (r = 1, params = {}) => object('circle')({
  r,
  $fn: params?.$fn ?? fn,
  $fa: params?.$fa ?? fa,
  $fs: params?.$fs ?? fs,
});

const square = (size = [1, 1]) => object('square')({
  size,
  center,
});

const polygon = (points = undef, paths = undef, convexity = 1) => object('polygon')({
  points,
  paths,
  convexity,
});

const sphere = (r = 1, params = {}) => object('sphere')({
  r,
  $fn: params?.$fn ?? fn,
  $fa: params?.$fa ?? fa,
  $fs: params?.$fs ?? fs,
});

const cube = (size = [1, 1, 1]) => object('cube')({
  size,
  center,
});

const cylinder = (h = 1, r = 1, params = {}) => object('cylinder')({
  h,
  ...(Array.isArray(r) ? { r1: r[0], r2: r[1] } : { r }),
  center,
  $fn: params?.$fn ?? fn,
  $fa: params?.$fa ?? fa,
  $fs: params?.$fs ?? fs,
});
const polyhedron = (points = undef, faces = undef, convexity = 1) => object('polyhedron')({
  points,
  faces,
  convexity,
});

module.exports = { circle, square, polygon, sphere, cube, cylinder, polyhedron };
