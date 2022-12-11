/**
 * まずは書籍名のみを返却する
 * @param isbn
 */
export async function getFromOpenbd(isbn: string): Promise<string | null> {
  // ex. GET https://api.openbd.jp/v1/get?isbn=9784780802047
  return fetch(`https://api.openbd.jp/v1/get?isbn=${isbn}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data[0] === null) {
        return null;
      }
      return data[0]["summary"]["title"];
    })
    .catch((error) => {
      console.log("openBD APIを利用できません");
      throw error;
    });
}
