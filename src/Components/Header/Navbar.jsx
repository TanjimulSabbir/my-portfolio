import { useState } from "react"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const liStyle = "hover:text-custom-highLightTextColor rounded transition duration-500"
    const Menu = <>
        <li className={liStyle}><a href="#about">1.About</a></li>
        <li className={liStyle}><a href="#experience">2.Experience</a></li>
        <li className={liStyle}><a href="#work">3.Works</a></li>
        <li className={liStyle}><a href="#skill">4.Skills</a></li>
        <li className={liStyle}><a href="#contact">5.Contact</a></li>
        <li className={liStyle}><a href="#blog">6.Blog</a></li>
        <li className={liStyle}><a href="#Resume">7.Resume</a></li>
    </>

    return (
        <div className={`navbar py-4`}>
            <div className="navbar flex item-center justify-end text-black z-50 rubik">
                <div className="md:hidden">
                    <label tabIndex={0} onClick={() => setOpen(!open)} className="btn btn-outline UniversalMargin mr-0 text-4xl border-none hover:bg-transparent text-white md:hidden">
                        <p className={`${open && "transition duration-700 transform rotate-90"}`}>{open ? <RxCross1 /> : <RxHamburgerMenu />}</p>
                    </label>
                    <ul tabIndex={0} className={`${open || "hidden"} fixed inset-0 px-6 py-24 shadow w-screen h-screen space-y-8 bg-white uppercase`}>
                        {Menu}
                        <div className="absolute top-0 right-1">
                            <label tabIndex={0} onClick={() => setOpen(!open)} className="btn btn-outline  text-4xl border-none hover:bg-transparent text-black md:hidden">
                                <p className={`${open && "transition duration-700 transform rotate-90"}`}>{open ? <RxCross1 /> : <RxHamburgerMenu />}</p>
                            </label>
                        </div>
                    </ul>
                </div>
                {/* <a href='#Tanjimul' className="text-lg">Tanjimul Sabbir</a> */}
            </div>
            <div className="navbar-center lg:navbar-end hidden md:flex">
                <ul className="menu-horizontal space-x-10 mr-5 px-1 uppercase">
                    {Menu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;