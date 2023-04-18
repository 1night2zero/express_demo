class User {
    private _name: string = "";
    private _id: string = "";

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}

export default User