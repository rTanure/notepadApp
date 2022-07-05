import './style.css'

export default function Header() {
    return (
        <header>
            <div className="left">
                <div className="logo">
                    <h1>NotepadApp</h1>
                </div>
            </div>
            <div className="right">
                <div className="menu">
                    <div className="username_container">
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="button_container">
                        <button>Adicionar nota</button>
                    </div>
                </div>
            </div>
        </header>
    )
}