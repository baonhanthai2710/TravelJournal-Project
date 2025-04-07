import { FaMapMarkerAlt } from "react-icons/fa";

export default function Entry(props) {
    return (
        <article className="main-container">
            <div className="img-container">
                <img src= {props.object.img} alt={props.object.alt} className="mount-fuji-img"/>
            </div>
            <div className="text-block">
                <FaMapMarkerAlt className="marker-icon" alt="marker icon" />
                <span className="country">{props.object.country}</span>
                <a href={props.object.googleMapsLink} className="map-link">
                    <span className="map-text">view on Google Maps</span>
                </a>
                <h1 className="entry-title">{props.object.title}</h1>
                <h5 className="strip-dates">{props.object.dates}</h5>
                <p className="entry-text">{props.object.text}</p>
            </div>
        </article>
    )
}