import User from "./User";

class UserStore {
    private users: User[] = [];

    constructor() {
        this.users.push(new User("1", "c"))
        this.users.push(new User("2", "李四"))
        this.users.push(new User("3", "王五"))
        this.users.push(new User("4", "mier"))
    }

    // addUser(user: User) {
    //     this.users.push(user);
    // }
    //
    // removeUser(id: string) {
    //     this.users = this.users.filter(user => user.id !== id);
    // }

    getUserById(id: string) {
        return this.users.find(user => user.id === id);
    }

    getAllUsers() {
        return this.users;
    }

}

export default UserStore;