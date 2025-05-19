import React from 'react'
import { FiMenu , FiX } from 'react-icons/fi'
import { FaGithub , FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {
  const [activeSection , setActiveSection] = useState(false)

  const MenuItems = [
    { id : "about" , label : "About" },
    { id : "skills" , label : "Skills" },
    { id : "experience" , label : "Experience" },
    { id : "work" , label : "Work" },
    { id : "education" , label : "Education" },
    { id : "contact" , label : "Contact" }
  ]
  return (
    <nav className='bg-transparent  '>
        <div className='text-white py-5 flex justify-between items-center'>
          {/* logo */}
          <div className='text-lg font-semibold cursor-pointer'>
            
            <span className='text-[#ec8245]'>&lt;</span>
            <span className='text-white'>Pankaj</span>
            <span className='text-[#ec8245]'>/</span>
            <span className='text-white'>Sharma</span>
            <span className='text-[#ec8245]'>&gt;</span>

          </div>

          {/* Desktop Menu */}
<ul className='md:flex space-x-8 text-gray-300 '  >
  {MenuItems.map((item) => (
<li key={item.id} className=''>
  <button>{item.label}</button>
</li>
  ))}
  
</ul>


        </div>
      
    </nav>
  )
}

export default Navbar
