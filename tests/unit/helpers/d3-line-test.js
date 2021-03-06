import Ember from 'ember';
import { d3Line } from 'dummy/helpers/d3-line';
import { module, test } from 'qunit';

module('Unit | Helper | d3 line');

const { K } = Ember;

test('it works', function(assert) {
  let options = {
    xAccessor: K,
    yAccessor: K
  };
  
  let line = d3Line([K, K], options);
  assert.equal(typeof line, 'function', 'returns a function');
});
