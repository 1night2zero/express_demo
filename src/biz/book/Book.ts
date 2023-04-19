class Book {
    private _name: string;
    private _id: string;

    constructor(name: string, id: string) {
        this._name = name;
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}

export default Book;