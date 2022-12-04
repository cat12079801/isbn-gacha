import * as isbn from "../isbn";

test("空文字のISBNを生成", () => {
  expect(isbn.generateRandomIsbn()).toBe("");
});
