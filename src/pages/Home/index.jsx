// Dependences
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Scripts
import user from '../../public/scripts/user'

// Components
import Header from '../../components/Header'
import Separator from '../../components/Separator'
import SmallCard from '../../components/SmallCard'
import Footer from '../../components/Footer'

// Css
import './style.css'

export default function Home() {
    // URL da api que retornará todas as notas
    const APIUrl = "https://notepad-app-api.vercel.app/api/notes"

    // Estado das notas na página 
    const [notes, setNotes] = useState({ "notes": [] })

    // Verifica se o usuário da página é o autor da nota
    function isAuthor(noteAuthor) {
        if(noteAuthor === user.name) {
            return true
        } else {
            return false
        }
    }

    // Recupera os dados da API e passa para os estados
    useEffect(()=>{
        axios.get(APIUrl)
            .then(response => response.data)
            .then(data => setNotes({"notes": data.data}))
            .catch(error => console.error("Erro -> " + error))
    }, [])

    return (    
        <>
            <Header />
            <section>
                <Separator title="Suas notas"/>
                <div className="notes_container">
                    {
                        notes.notes.map((note)=>{
                            if(isAuthor(note.author)) {
                                return (
                                    <SmallCard  
                                    title= {note.title}
                                    author= {note.author}
                                    id= {note.id}
                                />)
                            }
                        })
                    }
                </div>
                <Separator title="Outras notas"/>
                <div className="notes_container">
                    {
                        notes.notes.map((note)=>{
                            if(isAuthor(note.author) === false) {
                                return (
                                    <SmallCard  
                                    title= {note.title}
                                    author= {note.author}
                                    id= {note.id}
                                />)
                            }
                        })
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}