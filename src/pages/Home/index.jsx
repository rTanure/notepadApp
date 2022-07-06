import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import Separator from '../../components/Separator'
import SmallCard from '../../components/SmallCard'
import Footer from '../../components/Footer'

import './style.css'

export default function Home() {
    // const APIUrl = "https://notepad-app-api.vercel.app/api/notes"
    const APIUrl = "http://localhost:8080/api/notes"


    const [notes, setNotes] = useState({ "content": {}})

    useEffect(()=>{
        axios.get(APIUrl)
            .then(response => console.log("conectado"))
            .catch(error => console.error("Erro -> " + error))
    })

    return (
        <>
            <Header />
            <section>
                <Separator title="Suas notas"/>
                <div className="notes_container">
                    <SmallCard title="Titulo da nota 1" author="Autor da nota 1" id="1"/>
                    <SmallCard title="Titulo da nota 2" author="Autor da nota 2" id="2"/>
                    <SmallCard title="Titulo da nota 3" author="Autor da nota 3" id="3"/>
                    <SmallCard title="Titulo da nota 4" author="Autor da  l sdfna sdf,m alsn dfamsnd f,amsnd fa,msnd fa,msdn fa,nota 4" id="4"/>
                    <SmallCard title="Titulo da nota 5" author="Autor da nota 5" id="5"/>
                    <SmallCard title="Titulo da nota 6" author="Autor da nota 6" id="6"/>
                    <SmallCard title="Titulo da nota 7" author="Autor da nota 7" id="7"/>
                </div>
                <Separator title="Outras notas"/>
                <div className="notes_container">
                    <SmallCard title="Titulo da nota 1" author="Autor da nota 1" id="1"/>
                    <SmallCard title="Titulo da nota 2" author="Autor da nota 2" id="2"/>
                    <SmallCard title="Titulo da nota 3" author="Autor da nota 3" id="3"/>
                    <SmallCard title="Titulo da nota 4" author="Autor da  l sdfna sdf,m alsn dfamsnd f,amsnd fa,msnd fa,msdn fa,nota 4" id="4"/>
                    <SmallCard title="Titulo da nota 5" author="Autor da nota 5" id="5"/>
                    <SmallCard title="Titulo da nota 6" author="Autor da nota 6" id="6"/>
                    <SmallCard title="Titulo da nota 7" author="Autor da nota 7" id="7"/>
                </div>
            </section>
            <Footer />
        </>
    )
}