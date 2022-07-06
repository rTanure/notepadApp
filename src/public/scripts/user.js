class User {
    constructor(name) {
        this.name = undefined
    }

    changeName(newName) {
        this.name = newName
    }
}

const user = new User()
export default {user}