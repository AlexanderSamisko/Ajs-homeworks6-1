import orderobjectproperties from './orderobject';

const someHero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const properOrder = orderobjectproperties(someHero, ['name', 'level']);

console.log(properOrder);
