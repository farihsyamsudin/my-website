import { useState } from 'react';
import logo from '../image/logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHam = () => {
        setIsOpen(!isOpen);
    }

    const contactMe = () => {
        window.location.href = `mailto:farihsyamsudin31@upi.edu?subject=I'm interested in you`;
    };

    return (
        <nav className="relative z-20">
            <div id="large_nav" className={` ${isOpen ? 'bg-primary' : '' } large-nav`}>
                <Link to="/">
                <div className="hover:cursor-pointer">
                    <img src={logo} alt="" className='w-[150px]' />
                </div>
                </Link>
                <div className="sm:block hidden">
                    <Link to="/project-showcase"><button className="px-4 py-2 gelatine bg-transparent text-secondary border-2 border-secondary rounded-full mx-2 hover:bg-secondary hover:text-white box-border transition">Project Showcase</button></Link>
                    <button className="contact-me gelatine border-2 border-secondary hover:bg-transparent hover:text-secondary transition" onClick={contactMe}>Contact-Me!</button>
                </div>
                <div className="sm:hidden hover:cursor-pointer " onClick={toggleHam}>
                    <div className={`px-4 hover:cursor-pointer transition relative sm:hidden ${isOpen ? 'z-50 right-0 fixed' : 'z-20'}`} onClick={toggleHam}>
                        <span className={`block my-2 w-[28px] h-[2px] transition duration-500 origin-top-left ${isOpen? 'bg-secondary rotate-45' : 'bg-secondary'}`}></span>
                        <span className={`block my-2 w-[28px] h-[2px] transition duration-500 ${isOpen? 'bg-secondary scale-0' : 'bg-secondary'}`}></span>
                        <span className={`block my-2 w-[28px] h-[2px] transition duration-500 origin-bottom-left ${isOpen? 'bg-secondary -rotate-45' : 'bg-secondary'}`}></span>
                    </div>
                </div>
            </div>
            <div>
                <ul id="op_big" className={` ${isOpen ? 'block' : 'hidden'} bg-primary text-white sm:hidden`}>
                    <Link to='/project-showcase'><li className="text-sm px-[20px] py-[10px] hover:bg-secondary transition"><a className='block' href="/project-showcase">Project Showcase</a></li></Link>
                    <li className="text-sm px-[20px] py-[10px] hover:bg-secondary transition"><a className='block' href="mailto:farihsyamsudin31@upi.edu?subject=I'm interested in you">Contact-Me!</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav