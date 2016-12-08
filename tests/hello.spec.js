import { expect } from 'chai';
import sayHello from '../src/hello';

describe('Hello World', () => {
  it('should work', () => {
    expect(sayHello('Jair')).to.equal('Hello Jair');
  });
});
