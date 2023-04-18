import Book from "./Book";


class BookStore {
    books: Book[] = [];

    constructor() {
        this.books = []
        this.books.push(new Book("第一本书", "1"));
        this.books.push(new Book("第二本书", "2"));
        this.books.push(new Book("第三本书", "3"));
        this.books.push(new Book("第四本书", "4"));
        this.books.push(new Book("第五本书", "5"));
        this.books.push(new Book("第六本书", "6"));
        this.books.push(new Book("第7本书", "7"));

    }

    // addBook(name: string): Book {
    //     const id: string = Math.random().toString(36).substring(2, 9);
    //     const book: Book = new Book(name, id);
    //     this.books.push(book);
    //     console.log(`Add book ${name} with id ${id} success!`);
    //     return book;
    // }
    //
    getBookById(id: string): Book | undefined {
        return this.books.find((book) => book.id === id);
    }

    getAllBooks(): Book[] {
        return this.books;
    }
}
export default BookStore;