import React, { useEffect, useState } from 'react'
import axios from 'axios'
import user from '../../public/scripts/user'

import Header from '../../components/Header'
import Separator from '../../components/Separator'
import SmallCard from '../../components/SmallCard'
import Footer from '../../components/Footer'

import './style.css'

export default function Home() {
    const APIUrl = "https://notepad-app-api.vercel.app/api/notes"
    // const APIUrl = "http://localhost:8080/api/notes"


    const [notes, setNotes] = useState({ "notes": [] })
    const [separetedNotes, setSeparatedNotes] = useState({"userNotes": [], "anotherNotes": []})

    function isAuthor(noteAuthor) {
        if(noteAuthor === user.name) {
            return true
        } else {
            return false
        }
    }

    function checkIfIsAuthor() {
        let userNotes = []
        let anotherNotes = []

        notes.notes.map((note)=>{
            if(note.author === user.name) {
                userNotes.push(note)
            } else {
                anotherNotes.push(note)
            }
        })

        setSeparatedNotes({
            "userNotes": userNotes, 
            "anotherNotes": anotherNotes
        })

        return(setSeparatedNotes)
    }

    useEffect(()=>{
        axios.get(APIUrl)
            .then(response => response.data)
            .then(data => setNotes({"notes": data.data}))
            .then(()=> checkIfIsAuthor())
            .then(e => console.log(separetedNotes))
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
                            return (
                                <SmallCard  
                                title= {note.title}
                                author= {note.author}
                                id= {note.id}
                            />)
                        })
                    }
                </div>
                <Separator title="Outras notas"/>
                <div className="notes_container">
                    <SmallCard title="Titulo da nota 1" author="Autor da nota 1" id="1"/>
                </div>
            </section>
            <Footer />
        </>
    )
}