const lowerCaseObjectKeys = require('./index');

describe('Test', () => {
  it('should be transform the non lowercased keys to lowercase', () => {
    const testObject = lowerCaseObjectKeys({ One: 1, TWO: 2 });
    expect(testObject.one).toBeDefined();
    expect(testObject.two).toBeDefined();
    expect(testObject.One).toBeUndefined();
    expect(testObject.TWO).toBeUndefined();
  });
});