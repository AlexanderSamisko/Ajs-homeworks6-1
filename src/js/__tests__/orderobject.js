import orderobjectproperties from '../orderobject';

test('testing whether function has ability to reset property order of object accordingly to the frame', () => {
  const someHero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const properOrder = orderobjectproperties(someHero, ['name', 'level']);

  expect(properOrder).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('testing whether function will throw an Error if there is unexisted property in the frame', () => {
  const someHero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  expect(() => {
    orderobjectproperties(someHero, ['name', 'level', 'zodiac']);
  }).toThrow('В объекте нет крайней мере одного из искомых свойств!');
});
