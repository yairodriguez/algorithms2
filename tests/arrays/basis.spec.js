import { expect } from 'chai';

describe('Arrays :: Basis', () => {
  it('should create an array using [] operator', () => {
    const numbers = [];

    expect(numbers).to.be.an.instanceof(Array);
    expect(numbers.length).to.equal(0);
  });
});
