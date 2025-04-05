import { FaGlobeAmericas } from "react-icons/fa";

export default function Header () {
    return (
        <header className="header-container">
            <FaGlobeAmericas className="globe-icon" alt="globe-icon"/>
            <h1>my travel journal.</h1>
        </header>
    )
}