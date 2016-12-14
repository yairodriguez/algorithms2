import { expect } from 'chai';
import { copy } from '../../src/arrays/utils';

describe('Arrays :: Utils', () => {
  it('make a deep copy of given array', () => {
    let nums = [];

    for (let i = 0; i <= 100; ++i) {
      nums[i] = i;
    }

    const sameNums = copy(nums);

    nums[0] = 400;
    expect(sameNums[0]).to.equal(0);
  });
});
