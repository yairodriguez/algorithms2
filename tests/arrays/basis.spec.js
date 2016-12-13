import { expect } from 'chai';

describe('Arrays :: Basis', () => {
  it('should create an array using [] operator', () => {
    const numbers = [];

    expect(numbers).to.be.an.instanceof(Array);
    expect(numbers.length).to.equal(0);
  });

  it('should create an array with a set of elements', () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(numbers).to.be.an.instanceof(Array);
    expect(numbers.length).to.equal(5);
  });
});
