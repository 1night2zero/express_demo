import Browser from "./Browser";

class BrowserStore {
    private borrowRecords: Browser[]

    constructor() {
        this.borrowRecords = [
            new Browser("1", "1", new Date("2020-04-03")),
            new Browser("1", "2", new Date("2020-04-03")),
            new Browser("2", "3", new Date("2020-04-03")),
            new Browser("3", "4", new Date("2020-04-03")),
            new Browser("3", "5", new Date("2020-04-03")),
            new Browser("3", "6", new Date("2020-04-03"))
        ]
    }

    addBorrowRecord(user: string, book: string) {
        const record = new Browser(user, book, new Date())
        this.borrowRecords.push(record)
    }

    getUserBorrowRecord(userId: string) {
        return this.borrowRecords.filter(borrow => borrow.user === userId)
    }

}

export default BrowserStore