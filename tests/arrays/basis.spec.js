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

  it('should create an array by calling the Array constructor', () => {
    const numbers = Array(); //eslint-disable-line no-array-constructor

    expect(numbers).to.be.an.instanceof(Array);
    expect(numbers.length).to.equal(0);
  });
});
