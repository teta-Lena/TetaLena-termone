const CalcService = require('../../services/calcService');

describe('calculator service tests', () => {
    it('should throw an error when dividing number by 0', () => {
        const result = CalcService.doMath(5, 0, '/');
        expect(result).toThrow(Error);
        expect(result).toThrow("Cannot divide by 0")
    });

    it('should throw an error when operation is not known', () => {
        const result = CalcService.doMath(4, 4, 'e');

        expect(result).toThrow(Error);
        expect(result).toThrow("Unknown operation");
    });

    it('should return the correct sum', () => {
        const result = CalcService.doMath(5, 10, '+');
        expect(result).toBe(15);
    })

    it('should return the correct product', () => {
        const result = CalcService.doMath(5, 10, '*');

        expect(result).toBe(50);
    })
    it('should return the correct difference', () => {
        const result = CalcService.doMath(5, 10, '-');

        expect(result).toBe(-5);
    })
    it('should return the correct quotient', () => {
        const result = CalcService.doMath(5, 10, '/');

        expect(result).toBe(0.5);
    })
})