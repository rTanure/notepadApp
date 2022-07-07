import { useEffect, useState } from 'react'
import user from '../../public/scripts/user'

import './style.css'

export default function Header() {
    // Seta o estado do nome de usuário que será exibido na página
    const [username, setUsername] = useState(user.name)
    // Recebe o valor do input do header a cada alteração feita
    let usernameField = username

    // seta o nome de usuário assim que a págnia é carregada
    useEffect(()=>{
        setUsername(user.name)
    }, [])

    // Altera o nome de usuário assim que a ação é requisitada na página
    function updateUser() {
        setUsername(usernameField)
        user.changeUsername(usernameField)
    }

    return (
        <header>
            <div className="left">
                <div className="logo">
                    <a href="/"><h1>NotepadApp</h1></a>
                </div>
                <div className="atual_user">
                    <p id='atualUserName'>Usuário atual: <span id='atualUserName'>{username}</span></p>
                </div>
            </div>
            <div className="right">
                <div className="menu">
                    <div className="username_container">
                        <input 
                            onKeyDown={e => {
                                if(e.code == "Enter"){
                                    updateUser()
                                }
                            }}
                            type="text" 
                            name="username"
                            placeholder="Nome de usuário"
                            onChange={e => usernameField = e.target.value}
                        />
                    </div>
                    <div className="button_container">
                        <button onClick={()=>{updateUser()}}>Atualizar usuário</button>
                    </div>
                    <div className="button_container">
                        <button>Adicionar nota</button>
                    </div>
                </div>
            </div>
        </header>
    )
}