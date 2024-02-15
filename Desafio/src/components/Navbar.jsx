import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive')
    
    return(
        <nav>
            <span></span>
            <div className='links'>
                <NavLink to='/' className={setActiveClass}>Pizzería Mamma Mia!</NavLink>
                <NavLink to='/carrito' className={setActiveClass}></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;