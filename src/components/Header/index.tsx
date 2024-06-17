export const Header = ()=>{
    return(
        <header className="header"> 
 

            <div className="header-bottom" data-header>
                <div className="container">   
                    <a href="#" className="logo">Dentelo.</a>   
                    <nav className="navbar container" data-navbar>
                    <ul className="navbar-list">  
                        <li>
                        <a href="#home" className="navbar-link" data-nav-link>Home</a>
                        </li>   
                        <li>
                        <a href="#natureone" className="navbar-link" data-nav-link>natureones</a>
                        </li>   
                        <li>
                        <a href="#about" className="navbar-link" data-nav-link>About Us</a>
                        </li>   
                        <li>
                        <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                        </li>   
                        <li>
                        <a href="#" className="navbar-link" data-nav-link>Contact</a>
                        </li>   
                    </ul>
                    </nav>  
                    <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
                    {/* <ion-icon name="menu-sharp" aria-hidden="true" className="menu-icon"></ion-icon> */}
                    {/* <ion-icon name="close-sharp" aria-hidden="true" className="close-icon"></ion-icon> */}
                    </button>   
                </div>
            </div>  
        </header>
    )
}

export default Header;