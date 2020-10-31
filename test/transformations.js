const assert = require('assert');
const S = require('../src/index.js');

describe('Translate', () => {
  it('should add translate transformation to existing object', () => {
    assert.deepEqual(
      S.square().translate([1, 2, 3]), 
      {
        type: 'translate',
        params: { v: [ 1, 2, 3 ] },
        children: [ S.square() ],
      },
    );
  });
});

describe('Scale', () => {
  it('should add scale transformation to existing object', () => {
    assert.deepEqual(
      S.square().scale([5, 2, 3]), 
      {
        type: 'scale',
        params: { v: [ 5, 2, 3 ] },
        children: [ S.square() ],
      },
    );
  });
});

describe('Resize', () => {
  it('should add resie transformation to existing object', () => {
    assert.deepEqual(
      S.square().resize([5, 2, 3]), 
      {
        type: 'resize',
        params: { v: [ 5, 2, 3 ], auto: false },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().resize([5, 2, 3], true), 
      {
        type: 'resize',
        params: { v: [ 5, 2, 3 ], auto: true },
        children: [ S.square() ],
      },
    );
  });
});

describe('Mirror', () => {
  it('should add mirror transformation to existing object', () => {
    assert.deepEqual(
      S.square().mirror([1, 0, 0]), 
      {
        type: 'mirror',
        params: { v: [ 1, 0, 0 ] },
        children: [ S.square() ],
      },
    );
  });
});

describe('Color', () => {
  it('should add color transformation to existing object', () => {
    assert.deepEqual(
      S.square().color('cerulean'), 
      {
        type: 'color',
        params: { c: 'cerulean', alpha: 1 },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().color('cerulean', 0.6), 
      {
        type: 'color',
        params: { c: 'cerulean', alpha: 0.6 },
        children: [ S.square() ],
      },
    );
  });
});

describe('rotate', () => {
  it('should add rotate transformation to existing object', () => {
    assert.deepEqual(
      S.square().rotate([1, 0, 0]), 
      {
        type: 'rotate',
        params: { a: [ 1, 0, 0 ], v: 'undef' },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().rotate(90, [1, 0, 0]), 
      {
        type: 'rotate',
        params: { a: 90, v: [ 1, 0, 0 ] },
        children: [ S.square() ],
      },
    );
  });
});

describe('Radius offset', () => {
  it('should add radius_offset transformation to existing object', () => {
    assert.deepEqual(
      S.square().radius_offset(5), 
      {
        type: 'offset',
        params: { r: 5, delta: 'undef', chamfer: 'undef' },
        children: [ S.square() ],
      },
    );
  });
});

describe('Delta offset', () => {
  it('should add delta_offset transformation to existing object', () => {
    assert.deepEqual(
      S.square().delta_offset(8), 
      {
        type: 'offset',
        params: { r: 'undef', delta: 8, chamfer: false },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().delta_offset(8), 
      {
        type: 'offset',
        params: { r: 'undef', delta: 8, chamfer: false },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().delta_offset(8, true), 
      {
        type: 'offset',
        params: { r: 'undef', delta: 8, chamfer: true },
        children: [ S.square() ],
      },
    );
  });
});

describe('Projection', () => {
  it('should add radius_offset transformation to existing object', () => {
    assert.deepEqual(
      S.square().projection(),
      {
        type: 'projection',
        params: { cut: false },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().projection(true),
      {
        type: 'projection',
        params: { cut: true },
        children: [ S.square() ],
      },
    );
  });
});


describe('Linear extrude', () => {
  it('should add linear_extrude transformation to existing object', () => {
    assert.deepEqual(
      S.square().linear_extrude(5),
      {
        type: 'linear_extrude',
        params: {
          height: 5,
          center: false,
          convexity: 'undef',
          twist: 'undef',
          slices: 'undef',
          scale: 1,
          $fn: 20,
        },
        children: [ S.square() ],
      },
    );
    assert.deepEqual(
      S.square().linear_extrude(5, { center: true, scale: 2 } ),
      {
        type: 'linear_extrude',
        params: {
          height: 5,
          center: true,
          convexity: 'undef',
          twist: 'undef',
          slices: 'undef',
          scale: 2,
          $fn: 20,
        },
        children: [ S.square() ],
      },
    );
  });
});

