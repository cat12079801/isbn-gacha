import { getFromOpenbd } from "./lib/openbd";
import { generateRandomIsbn } from "./lib/isbn";

const MAX_RETRY_COUNT = 500;

const main = async () => {
  let retryCount = 0;

  while (retryCount++ < MAX_RETRY_COUNT) {
    const isbn = generateRandomIsbn();
    const bookTitle = await getFromOpenbd(isbn);
    if (bookTitle) {
      console.log(`isbn: ${isbn}`);
      console.log(`title: ${bookTitle}`);
      return;
    }
  }

  console.log("一定回数ガチャに失敗しました");
};

main();
