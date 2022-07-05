import './style.css'

export default function Separator({title}) {
    return (
        <div className="separator">
            <span>{title}</span>
            <div className="line"></div>
        </div>
    )
}