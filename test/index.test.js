'use strict';

const calc = require('../index');
const assert = require('chai').assert;

describe('Calculator', () => {
    it('should add numbers', () => {
        assert.equal(calc.add(3, 7), 10, 'Can add normal numbers');
        assert.equal(calc.add(-5, 3), -2, 'Can add negative numbers');
    });

    it('should subtract numbers', () => {
        assert.equal(calc.subtract(7, 4), 3, 'Can subtract normal numbers');
        assert.equal(calc.subtract(2, -3), 5, 'Can subtract negative numbers');
    });
});
