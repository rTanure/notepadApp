import { useEffect, useState } from 'react'
import user from '../../public/scripts/user'

import './style.css'

export default function Header() {
    const [username, setUsername] = useState(user.name)

    useEffect(()=>{
        setUsername(user.name)
    }, [user.name])

    let usernameField = username

    function updateUser() {
        setUsername(usernameField)
    }

    return (
        <header>
            <div className="left">
                <div className="logo">
                    <h1>NotepadApp</h1>
                </div>
                <div className="atual_user">
                    <p id='atualUserName'>Usuário atual: <span id='atualUserName'>{username}</span></p>
                </div>
            </div>
            <div className="right">
                <div className="menu">
                    <div className="username_container">
                        <input 
                            type="text" 
                            name="username"
                            defaultValue={username} 
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