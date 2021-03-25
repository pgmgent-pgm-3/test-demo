import sum from './sum.js';

test('properly add two parameters', () => {
    expect(sum(5, 6)).toBe(11);
    expect(sum(5, 6)).toBeGreaterThan(9);
});