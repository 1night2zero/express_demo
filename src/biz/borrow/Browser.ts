class Browser {
    private _book: string;
    private _user: string;
    private _borrowTime: Date;

    constructor(userId: string, bookId: string, borrowTime: Date = new Date()) {
        this._user = userId
        this._book = bookId
        this._borrowTime = borrowTime
    }

    get book(): string {
        return this._book;
    }

    set book(value: string) {
        this._book = value;
    }

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get borrowTime(): Date {
        return this._borrowTime;
    }

    set borrowTime(value: Date) {
        this._borrowTime = value;
    }

}

export default Browser