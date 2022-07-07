import axios from "axios";
import api from "./api";

export default function deleteNote(id, username) {
    axios.delete(`${api.api.url}/notes/${id}/${username}`)
        .then(response => {
            window.location.href = '/'
        })
        .catch(error => console.error(error))
}