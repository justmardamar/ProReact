export default function Navbar(){
    
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                Film
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                <a href="/" className="navbar-link">Beranda</a>
                </li>
                <li className="navbar-item">
                <a href="/about" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                <a href="/film" className="navbar-link">Film</a>
                </li>
                <li className="navbar-item">
                <a href="#kontak" className="navbar-link">Kontak</a>
                </li>
            </ul>
        </nav>
    )
}