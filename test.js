const groupArrayElements = require('.');

describe('groupArrayElements tests', () => {
    test('If groupArrayElements is called then it must be defined.', () => {
        expect(typeof groupArrayElements).toBe('function');
    });

    test('If first parameter is not an array.', () => {
        expect(groupArrayElements('not array', 2)).toMatch('First argument must be an array.');
    });

    test('If second parameter is not a number.', () => {
        expect(groupArrayElements([1, 2, 3], 'not number')).toMatch('Second argument must be a number and greater than zero.');
    });
    
    test('If array of numbers 1 to 5 is passed as the first argument and the second argument divisor is 2.', () => {
        expect(groupArrayElements([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('If array of numbers 1 to 6 is passed as the first argument and the second argument divisor is 2.', () => {
        expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });
});