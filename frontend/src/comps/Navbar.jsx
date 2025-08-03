import "./Navbar.css";

function Navbar() {

    return (
        <div className="navbar">
            <NavbarItem>
                <a>Navbar item</a>
            </NavbarItem> 
            <NavbarItem>
                <a>Navbar item</a>
            </NavbarItem> 
            <NavbarItem>
                <a>Navbar item</a>
            </NavbarItem> 
            <NavbarItem>
                <a>Navbar item</a>
            </NavbarItem> 
            <NavbarItem>
                <a>Navbar item</a>
            </NavbarItem> 
            <NavbarItem>
                <a>Navbar item</a>
            </NavbarItem> 
        </div>
    );
}

export default Navbar;

function NavbarItem(props) {
    return (
        <div className="navbarItem">
            {props.children}
        </div>
    );
}
