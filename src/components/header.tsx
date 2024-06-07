import { Link } from "react-router-dom";


export function Header(){

    return(
        <header className="justify-between px-22">
            <h1>Rick and Morty Wiki</h1>
            <nav>
                <ul>
                    <li><Link to='/characters'>Characters</Link></li>
                    <li><Link to='/characters'>Locations</Link></li>
                    <li><Link to='/characters'>Episodes</Link></li>
                </ul>
            </nav>
        </header>
    )
}