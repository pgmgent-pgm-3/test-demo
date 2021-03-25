import compact from './compactArray.js';

it('should return a trimmed array', () => {
    expect(compact([2, null, null, 3]))
        .toEqual([2, 3]);
    
    expect(() => {compact('next Tinder date is handsome');})
        .toThrow('we expect an array');
});

