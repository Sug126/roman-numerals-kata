const romanConverter = require ('./roman-numeral-converter.js')


test("Convert roman numbers to Integers", () => {
    expect(romanConverter(1)).toBe('I');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(5)).toBe('V');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(10)).toBe('X');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(12)).toBe('XII');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(42)).toBe('XLII');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(40)).toBe('XL');
  });
  test("Convert numbers to Integers", () => {
    expect(romanConverter(50)).toBe('L');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(399)).toBe('CCCXCIX');
  });
  test("Convert numbers to Integers", () => {
    expect(romanConverter(1588)).toBe('MDLXXXVIII');
  });

  test("Convert numbers to Integers", () => {
    expect(romanConverter(3999)).toBe('MMMCMXCIX');
  });