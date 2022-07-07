import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import api from '../../public/scripts/api'
import isAuthor from '../../public/scripts/isAuthor'
import user from '../../public/scripts/user'
import deleteNote from '../../public/scripts/deleteNote'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import './style.css'

export default function Note() {
    
    const { id } = useParams()

    const [note, setNote] = useState({
        "id": "",
        "title": "",
        "content": "",
        "creationDate": "",
        "updateDate": ""
    })

    useEffect(()=>{
        axios.get(`${api.api.url}/note/${id}`)
            .then(response => response.data.data)
            .then(note => {
                setNote({
                    "id": note.id,
                    "title": note.title,
                    "content": note.content,
                    "author": note.author,
                    "creationDate": note.creationDate,
                    "updateDate": note.updateDate
                })
            })
            .catch(error => console.error("Erro =>" + error))
    }, [])

    

    return (
        <div className='note_page'>
            <Header />
            <section>
                <div className="note_area">
                    <div className="note_header">
                        <div className="left">
                            <h1>{note.title}</h1>
                            <span>Autor: {note.author}</span>
                        </div>
                        {isAuthor(user.name, note.author) &&
                            <div className="right">
                                <button className='edit'>Editar</button>
                                <button className='delete' onClick={e => {deleteNote(id, user.name)}}>Excluir</button>
                            </div>
                        }
                        
                    </div>
                    <hr />
                    <p>{note.content}</p>
                    <span className='date'>Criado em: {note.creationDate}</span>
                    <span className='date'>Editado em: {note.updateDate}</span>
                </div>
            </section>
            <Footer />
        </div>
    )
}