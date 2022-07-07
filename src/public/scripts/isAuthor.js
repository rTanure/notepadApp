export default function isAuthor(username, noteAuthor) {
    if (username === noteAuthor) {
        return true
    } else {
        return false
    }
}