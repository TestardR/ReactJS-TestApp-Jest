describe('The question list', () => {
  beforeEach(() => {
    console.log('Before each!');
  });
  beforeAll(() => {
    console.log('Before all!');
  });
  afterEach(() => {
    console.log('After each!');
  });
  afterAll(() => {
    console.log('After all!');
  });
  it('should display a list of items', () => {
    expect(2 + 2).toEqual(4);
  });
  it.skip('should be the meaning of life', () => {
    expect(2 + 2).toEqual(4);
  });
});
