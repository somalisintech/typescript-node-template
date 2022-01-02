import helloWorld from '../../src/helloWorld';

test('returns hello world', () => {
  // arrange
  const expectedValue = expect.stringMatching(/hello world/i);
  // act
  const actualValue = helloWorld();
  // assert
  expect(actualValue).toEqual(expectedValue);
});
