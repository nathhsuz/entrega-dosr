import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


    const Navbar = () => {
        return (
            <nav className="navbar">
             
                <ul>
                    <li><Link className="menu-link" to="/">Inicio</Link></li>
                    <li><Link className="menu-link" to="/productos">Productos</Link></li>
                    <li><Link className="menu-link" to="/productos/patines">Patines</Link></li>
                    <li><Link className="menu-link" to="/productos/cascos">Cascos</Link></li>
                    <li><Link className="menu-link" to="/productos/accesorios">Accesorios</Link></li>
                    <li><Link className="menu-link" to="/quienessomos">Quienes somos</Link></li>
                    <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                  
                </ul>
            </nav>
        )
    }

  

export default Navbar
