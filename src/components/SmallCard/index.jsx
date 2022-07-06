import './style.css'

export default function SmallCard({title, author, id}) {
    const cardUrl = "/note/" + id
    return (
        <div className="small_card">
            <a href={cardUrl}>
                <h3 className="title">{title}</h3>
                <span className="author">{author}</span>
            </a>
        </div>
    )
}