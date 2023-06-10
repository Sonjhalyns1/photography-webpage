import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from "../assets/camera Background Removed.png"

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    function pathMatchRoute(route){
        if (route === location.pathname){
            return true
        }
    }
  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4  bg-[#27374D] text-[#DDE6ED] ' >
        

            <div>
                <img src={Logo} alt='logo' style={{width: "80px"}}  ></img>
            </div>
            <div className='flex'>
                <ul className='flex space-x-4'>
                    <li> <Link  to="home"  smooth={true}  duration={500}>
            <h4><span>Home</span></h4>
            </Link></li>
                    <li><Link  to="about"  smooth={true}  duration={500}>
                    <h4><span>Equipment</span></h4>
            </Link></li>
                    <li><Link  to="skills"  smooth={true}  duration={500}>
                    <h4><span>Work</span></h4>
            </Link></li>
                    
            <li><Link  to="contact"  smooth={true}  duration={500}>
            <h4><span>Contact</span></h4>
            </Link></li>
                </ul>
            </div>
        
        
    </div>
  )
}
