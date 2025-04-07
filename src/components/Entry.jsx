import { FaMapMarkerAlt } from "react-icons/fa";

export default function Entry(props) {
    return (
        <article className="main-container">
            <div className="img-container">
                <img src= {props.img} alt="mount-fuji-img" className="mount-fuji-img"/>
            </div>
            <div className="text-block">
                <FaMapMarkerAlt className="marker-icon" alt="marker icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} className="map-link">
                    <span className="map-text">view on Google Maps</span>
                </a>
                <h1 className="entry-title">{props.title}</h1>
                <h5 className="strip-dates">{props.dates}</h5>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}