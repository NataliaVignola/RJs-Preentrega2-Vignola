import CartWidget from "./components/CartWidget/CartWidget"

const NavBar = () => {
    return(
    <nav>
        <h3>Locker</h3>
        <div>
            <button>Muebles</button>
            <button>Asientos</button>
            <button>Deco</button>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar