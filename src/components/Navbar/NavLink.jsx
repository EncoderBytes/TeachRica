import React from 'react'
import { Link } from "react-scroll"


const NavLink = ({ href, link }) => {
    return (
        <li className='list-none cursor-pointer mr-6 '>
            <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className={({ isActive }) =>
                    `block duration-200 text-bluePrimary border-b-2
                     hover:text-bluePrimary `
                }
            >
                {link}
            </Link>
        </li>
    )
}

export default NavLink