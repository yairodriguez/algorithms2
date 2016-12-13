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

  it('should create an array with a single argument specifying the length of array', () => {
    const numbers = Array(10); //eslint-disable-line no-array-constructor

    expect(numbers).to.be.an.instanceof(Array);
    expect(numbers.length).to.equal(10);
  });

  it('Arrays do not all have to be of the same type', () => {
    const objects = [1, 'Jair', true, null];

    expect(objects).to.be.an.instanceof(Array);
    expect(objects).to.include('Jair');
    expect(objects.length).to.equal(4);
  });

  it('should be possible verify than an object is an array by calling Array.isArray() function', () => {
    const number = 3;
    const array = [7, 4, 1776];

    expect(Array.isArray(number)).to.be.false; // eslint-disable-line no-unused-expressions
    expect(Array.isArray(array)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it('should assign the values 1 through 100 to an array', () => {
    let numbers = [];

    for (let i = 0; i <= 100; ++i) {
      numbers[i] = i;
    }

    expect(numbers[0]).to.equal(0);
    expect(numbers[10]).to.equal(10);
    expect(numbers[100]).to.equal(100);
  });

  it('Arrays are also accessed using [] operator', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

    expect(sum).to.equal(15);
  });
});
