import { twoSum } from '../../src/twoSum';

describe('Two Sum', function () {
  it.each`
    nums              | target | expectedValue
    ${[2, 7, 11, 15]} | ${9}   | ${[0, 1]}
    ${[3, 2, 4]}      | ${6}   | ${[1, 2]}
    ${[3, 3]}         | ${6}   | ${[0, 1]}
    ${[3, 2, 3]}      | ${6}   | ${[0, 2]}
  `(
    'should return $expectedValue when nums = $nums and target = $target',
    ({ nums, target, expectedValue }) => {
      expect(twoSum(nums, target)).toEqual(expectedValue);
    }
  );
});
