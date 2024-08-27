import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
       <nav className="header-nav">
       <ul className="header-menu">
                <Link to="/">
                <li>HOME</li>
                </Link>
                <Link to="/Oferta">
                <li>OFERTAS</li>
                </Link>
                <Link to="/Produtos">
                <li>MAIS PRODUTOS</li>
                </Link>
                </ul>
                </nav>
                </>
    )
}