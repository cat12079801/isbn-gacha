import * as isbn from "../isbn";

test("ランダムなISBNを生成", () => {
  expect(isbn.generateRandomIsbn()).toMatch(/^978-4-[\d-]{10}-\d$/);
});

test("ランダムな出版社記号+書籍記号を生成", () => {
  expect(isbn.generateRandomPublisherSymbolAndBookTitleSymbol()).toMatch(
    /^\d{8}$/
  );
});

test("著名な出版社記号を選択", () => {
  expect(isbn.selectFamousPublisherSymbol()).toMatch(/^([01]\d|[2-6]\d\d)$/);
});

describe("ランダムな書名記号を生成", () => {
  test("1桁", () => {
    expect(isbn.generateRandomBookTitleSymbol(1)).toMatch(/^\d$/);
  });
  test("2桁", () => {
    expect(isbn.generateRandomBookTitleSymbol(2)).toMatch(/^\d{2}$/);
  });
  test("3桁", () => {
    expect(isbn.generateRandomBookTitleSymbol(3)).toMatch(/^\d{3}$/);
  });
  test("4桁", () => {
    expect(isbn.generateRandomBookTitleSymbol(4)).toMatch(/^\d{4}$/);
  });
  test("5桁", () => {
    expect(isbn.generateRandomBookTitleSymbol(5)).toMatch(/^\d{5}$/);
  });
  test("6桁", () => {
    expect(isbn.generateRandomBookTitleSymbol(6)).toMatch(/^\d{6}$/);
  });
});

describe("チェックディジットの確認", () => {
  test("978-4-10-109205", () => {
    expect(isbn.calculateCheckDigit("978-4-10-109205")).toBe("8");
  });

  test("000-0-00-000000", () => {
    expect(isbn.calculateCheckDigit("000-0-00-000000")).toBe("0");
  });
});
