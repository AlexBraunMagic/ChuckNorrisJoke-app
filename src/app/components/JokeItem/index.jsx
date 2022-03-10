import './style.css';

export function JokeItem(props) {
    const {icon_url, value} = props.item;
    console.log(value);
    return (
        <div className="list-item">
            <div className="icon-box">
                <img className="chuck-icon" src={icon_url} />
            </div>
            <p className="joke-content">{value}</p>
        </div>
    )
}