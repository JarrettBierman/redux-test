import { useSelector } from 'react-redux';

function ArtistCard(props){
    return (
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title">Album: {props.album}</h5>
                <p className="card-subtitle">Artist: {props.artist}</p>
                <p className="card-text">Rating: {props.rating}</p>
            </div>
        </div>
    )
}
export default ArtistCard;