import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar()
{
    return (
        <nav className="navBar">
            <div className="content">
                <span className="logo">
                <img src="https://student-store.surge.sh/static/media/codepath.70a9a31f.svg" alt="CodePath logo"></img>
                </span>
                <ul className="links">
                <Link to="/"><li>Home</li></Link>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Buy Now</li>
                </ul>
            </div>
        </nav>
    )
}
