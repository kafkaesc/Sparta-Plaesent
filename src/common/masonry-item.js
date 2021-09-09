import './masonry-item.css';

function MasonryItem(props) {
    return (
        <div className="masonry-item">
            <img alt="Inkana Logo" src={props.img} />
            <p className="mason-date">{props.date}</p>
            <h3>
                <a href="#">{props.headline}</a>
            </h3>
            <p className="mason-presenter">
                Presented by <a href={props.presenterUrl}>{props.presenterName}</a>
            </p>
            <hr />
        </div>
    );
}

export default MasonryItem;
