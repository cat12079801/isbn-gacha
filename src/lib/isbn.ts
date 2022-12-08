/**
 * 旧規格と現行規格(通称ISBN-13)が存在するが、今回は現行規格を扱う。
 * ISBNは13桁のコードで表され、通常5つのパートからなる。
 * 詳しくはwikipedia参照
 * https://ja.wikipedia.org/wiki/ISBN
 *
 * 全ISBNを対象とはしないため部分的に固定値とする
 * ISBNnnn-●-AAAA-BBBB-C
 * - nnn : 「978」で固定
 * - ● : 「4」日本を意味する
 * - AAAA : 出版社記号
 * - BBBB : 書名記号
 * - C : チェックディジット(モジュラス10 ウェイト3)
 *
 * ※ ●、A、Bの各部分の割り当て桁数は決まっておらず、合計で9桁となる
 * 例えば「岩波書店」を表す出版社記号は「00」
 */
export function generateRandomIsbn(): string {
  const publisherAndBookTitleSymbol = generateRandomPublisherSymbolAndBookTitleSymbol();
  const checkDigit = calculateCheckDigit(`9784${publisherAndBookTitleSymbol}`);
  return `9784${publisherAndBookTitleSymbol}${checkDigit}`;
}

/**
 * 出版社記号と書籍記号をあわせた8桁のランダムな数値文字列を返却する
 */
export function generateRandomPublisherSymbolAndBookTitleSymbol(): string {
  return getRandomNumberString(8);
}

/**
 * 出版社記号を取得するハードルは低く、全出版社記号からランダムに返すことはできない
 * そのため著名なものであると仮定した出版社記号2桁と3桁の中からランダムに選択肢返却する
 * ref. * https://isbn.jpo.or.jp/doc/08.pdf#page=35
 */
export function selectFamousPublisherSymbol(): string {
  // TODO
  return "00";
}

export function generateRandomBookTitleSymbol(digits: number): string {
  return getRandomNumberString(digits);
}

/**
 * 12桁の数値文字列を入力に取る
 * @param target
 */
export function calculateCheckDigit(target: string): string {
  let sum = 0;
  target.split('').forEach((value, index) => {
    if (index % 2 === 0) {
      sum += parseInt(value) * 3;
    } else {
      sum += parseInt(value);
    }
  });

  const sumLastDigit = sum % 10;
  if (sumLastDigit === 0) {
    return "0";
  } else {
    return String(10 -sumLastDigit);
  }
}

/**
 * 指定された桁数の0埋めされたランダムな数値文字列を返却する
 * @param digits
 */
function getRandomNumberString(digits: number): string {
  return String(Math.floor(Math.random() * (10 ** digits))).padStart(digits, '0');
}
