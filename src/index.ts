import { getFromOpenbd } from "./lib/openbd";
import { generateRandomIsbn } from "./lib/isbn";

const main = async () => {
  let isbn;
  let bookTitle;
  while (true) {
    isbn = generateRandomIsbn();
    bookTitle = await getFromOpenbd(isbn);
    if (bookTitle) {
      break;
    }
  }
  console.log(`isbn: ${isbn}`);
  console.log(`title: ${bookTitle}`);
};

main();
