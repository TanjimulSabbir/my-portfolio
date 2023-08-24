import { useState } from "react"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const liStyle = "hover:text-custom-highLightTextColor rounded transition duration-500"
    const Menu = <>
        <li className={liStyle}><a href="#about">About</a></li>
        <li className={liStyle}><a href="#experience">Experience</a></li>
        <li className={liStyle}><a href="#work">Works</a></li>
        <li className={liStyle}><a href="#skill">Skills</a></li>
        <li className={liStyle}><a href="#contact">Contact</a></li>
        <li className={liStyle}><a href="#blog">Blog</a></li>
        <li className={liStyle}><a href="#Resume">Resume</a></li>
    </>

    return (
        <div className={`navbar py-4 ${open ? "bg-white" : "bg-[#EF412D]"}`}>
            <div className="navbar flex item-center justify-end text-black z-50">
                <div className="mid-lg:hidden">
                    <label tabIndex={0} onClick={() => setOpen(!open)} className="btn btn-outline UniversalMargin text-4xl border-none hover:bg-transparent text-black mid-lg:hidden">
                        <p className={`${open && "transition duration-700 transform rotate-90"}`}>{open ? <RxCross1 /> : <RxHamburgerMenu />}</p>
                    </label>
                    <ul tabIndex={0} className={`${open || "hidden"} fixed inset-0 mt-20 px-6 py-10 shadow w-screen h-screen space-y-8 bg-white uppercase`}>
                        {Menu}
                    </ul>
                </div>
                {/* <a href='#Tanjimul' className="text-lg">Tanjimul Sabbir</a> */}
            </div>
            <div className="navbar-center lg:navbar-end hidden mid-lg:flex">
                <ul className="menu-horizontal space-x-10 mr-5 px-1 uppercase">
                    {Menu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;