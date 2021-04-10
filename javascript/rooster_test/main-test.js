const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('return a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';

      //exercise
      const result = Rooster.announceDawn();

      //verify
      assert.strictEqual(result, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const test = 6;
      const expected = '6';

      //exercise
      const result = Rooster.timeAtDawn(test);

      //verify
      assert.strictEqual(result, expected);
    });

    it('throws an error if passed a number less than 0', () => {
      //setup
      const hour = -1;
      const expected = RangeError;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
        }, expected);
    });

    it('throws an error if passed a number more than 23', () => {
      //setup
      const hour = 24;
      const expected = RangeError;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
        }, expected);
    });
  });
});