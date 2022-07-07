class User {
    constructor() {
        this.name = sessionStorage.getItem('username')
    }

    changeUsername(newName) {
        this.name = newName
        sessionStorage.setItem("username", newName)
        document.location.reload()
    }
}

const user = new User()
export default user