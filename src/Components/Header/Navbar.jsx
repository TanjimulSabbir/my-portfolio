import { useState } from "react"
import Logo from "../../assets/Photos/Logo/android-chrome-512x512.png"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const liStyle = "md:hover:text-[#35a55e] rounded transition duration-300 hover:underline underline-offset-4"
    const Menu = <>
        <li onClick={() => setOpen(false)} className={`${liStyle} ${"md:underline"}`}><a href="#about">About</a></li>
        <li onClick={() => setOpen(false)} className={liStyle}><a href="#experience">Experience</a></li>
        <li onClick={() => setOpen(false)} className={liStyle}><a href="#work">Works</a></li>
        <li onClick={() => setOpen(false)} className={liStyle}><a href="#skill">Skills</a></li>
        <li onClick={() => setOpen(false)} className={liStyle}><a href="#contact">Contact</a></li>
        <li onClick={() => setOpen(false)} className={liStyle}><a href="#blog">Blog</a></li>
        <li onClick={() => setOpen(false)} className={liStyle}><a href="https://drive.google.com/file/d/1tXYj5Hvg0BgHQteIEHSngNGkqzM7qtpT/view?usp=drive_link" target="_blank">Resume</a></li>
    </>

    return (
        <div className={`navbar py-4`}>
            <div className="navbar flex item-center justify-between text-white z-50 rubik">
                <div className="md:hidden">
                    <label tabIndex={0} onClick={() => setOpen(!open)} className="btn btn-outline mr-0 text-4xl border-none -ml-2 hover:bg-transparent text-green-500 hover:text-green-600 md:hidden">
                        <p className={`${open && "transition duration-700 transform rotate-90"}`}>
                            {open ? <RxCross1 /> : <RxHamburgerMenu />}</p>
                    </label>
                    <ul tabIndex={0} className={`${open || "hidden"} fixed inset-0 px-6 py-24 shadow w-screen h-screen space-y-8 bg-[#35a55e] uppercase text-black`}>
                        {Menu}
                        <div className="absolute top-0 right-1">
                            <label tabIndex={0} onClick={() => setOpen(!open)} className="btn btn-outline text-4xl border-none hover:bg-transparent text-black md:hidden mr-4">
                                <p className={`${open && "transition duration-700 transform rotate-90"}`}>{open ? <RxCross1 /> : <RxHamburgerMenu />}</p>
                            </label>
                        </div>
                    </ul>
                </div>
                <a href='/' className="w-[100px] flex justify-end">
                    <img className="w-1/2" src={Logo} alt="TanjimulSabbir" />
                </a>
            </div>
            <div className="navbar-center lg:navbar-end hidden md:flex">
                <ul className="menu-horizontal space-x-8 mr-5 uppercase text-white">
                    {Menu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
