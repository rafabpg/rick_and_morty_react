import { NavLink } from "react-router-dom";


export function Header(){

    return(
        <header className="flex flex-row justify-between items-center px-24 py-8 bg-black">
            <h1 className="font-bold text-white text-3xl">Rick&Morty Wiki</h1>
            <nav className="flex  flex-row gap-10 text-white text-2xl">
                <NavLink
                    to='/characters'
                    className={({ isActive }) =>
                        `${isActive ? 'underline cursor-default'  : ' hover:text-gray-400'}`
                    }
                >
                    Characters
                </NavLink>
            </nav>
        </header>
    )
}