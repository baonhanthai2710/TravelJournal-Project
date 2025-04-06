import { FaMapMarkerAlt } from "react-icons/fa";
import MountFujiImg from "../assets/mount-fuji.png"

export default function Entry() {
    return (
        <article className="main-container">
            <div className="img-container">
                <img src={MountFujiImg} alt="mount-fuji-img" className="mount-fuji-img"/>
            </div>
            <div className="text-block">
                <FaMapMarkerAlt className="marker-icon" alt="marker icon" />
                <span className="country">JAPAN</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="map-link">
                    <span className="map-text">view on Google Maps</span>
                </a>
                <h1 className="entry-title">Mount Fuji</h1>
                <h5 className="strip-dates">12 Jan, 2021 - 24 Jan, 2021</h5>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}