import * as openbd from "../openbd";

describe("openBDからの情報取得", () => {
  test("書籍1", async () => {
    expect(await openbd.getFromOpenbd("9784780802047")).toBe("おにぎりレシピ101");
  });

  test("書籍2", async () => {
    expect(await openbd.getFromOpenbd("9784274064531")).toBe("マスタリングTCP/IP");
  });
});
