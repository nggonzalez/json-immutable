import immutable from 'immutable';
import it from 'ava';

import helpers from './_helpers';

it('should mark an immutable.Map as __collection=Map', (test) => {
  const data = immutable.Map({
    a: 5,
    b: 6,
  });

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.is(result['__collection'], 'Map');
    test.truthy(result['data']);
    test.pass();
  });
});

it('should serialize a nested immutable.Map as a nested array of entries', (test) => {
  const data = immutable.Map({
    a: 5,
    b: immutable.Map({
      c: 6,
    }),
  });

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [
      ['a', 5],
      [
        'b',
        {
          __collection: 'Map',
          data: [['c', 6]],
        },
      ],
    ]);
    test.pass();
  });
});

it('should serialize an immutable.Map nested in a plain object', (test) => {
  const data = {
    x: immutable.Map({
      a: 5,
      b: 6,
    }),
  };

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['x']['data'], [['a', 5], ['b', 6]]);
    test.pass();
  });
});

it('should preserve immutable.Map key types', (test) => {
  let data = immutable.Map();
  data = data.set(5, 'a');
  data = data.set(6, 'b');

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [[5, 'a'], [6, 'b']]);
    test.pass();
  });
});

it('should mark an immutable.OrderedMap as __collection=OrderedMap', (test) => {
  const data = immutable.OrderedMap({
    a: 5,
    b: 6,
  });

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.is(result['__collection'], 'OrderedMap');
    test.truthy(result['data']);
    test.pass();
  });
});

it('should serialize an immutable.OrderedMap as an array of entries', (test) => {
  const data = immutable.OrderedMap({
    a: 5,
    b: 6,
  });

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [['a', 5], ['b', 6]]);
    test.pass();
  });
});

it('should serialize an immutable.Map as an array of entries', (test) => {
  const data = immutable.Map({
    a: 5,
    b: 6,
  });

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [['a', 5], ['b', 6]]);
    test.pass();
  });
});

it('should mark an immutable.List as __collection=List', (test) => {
  const data = immutable.List.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.is(result['__collection'], 'List');
    test.truthy(result['data']);
    test.pass();
  });
});

it('should serialize an immutable.List as an array of values', (test) => {
  const data = immutable.List.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [5, 6]);
    test.pass();
  });
});

it('should mark an immutable.Set as __collection=Set', (test) => {
  const data = immutable.Set.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.is(result['__collection'], 'Set');
    test.truthy(result['data']);
    test.pass();
  });
});

it('should serialize an immutable.Set as an array of values', (test) => {
  const data = immutable.Set.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [5, 6]);
    test.pass();
  });
});

it('should mark an immutable.OrderedSet as __collection=OrderedSet', (test) => {
  const data = immutable.OrderedSet.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.is(result['__collection'], 'OrderedSet');
    test.truthy(result['data']);
    test.pass();
  });
});

it('should serialize an immutable.OrderedSet as an array of values', (test) => {
  const data = immutable.OrderedSet.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [5, 6]);
    test.pass();
  });
});

it('should mark an immutable.Stack as __collection=Stack', (test) => {
  const data = immutable.Stack.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.is(result['__collection'], 'Stack');
    test.truthy(result['data']);
    test.pass();
  });
});

it('should serialize an immutable.Stack as an array of values', (test) => {
  const data = immutable.Stack.of(5, 6);

  const result = helpers.getSerializationStreamResult(data);
  return result.then((result) => {
    test.deepEqual(result['data'], [5, 6]);
    test.pass();
  });
});
