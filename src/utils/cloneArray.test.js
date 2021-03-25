import clone from './cloneArray.js';
import compact from './compactArray.js';

it('should clone an array', () => {
    const randomarray = [3, "test", 1];
    expect(clone(randomarray)).toEqual(randomarray);
});