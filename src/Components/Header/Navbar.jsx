import { RxHamburgerMenu } from "react-icons/rx"
const Navbar = () => {
    const Menu = <>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#experience">Experience</a></li> */}
        <li><a href="#work">Works</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Blog</a></li>
        <li><a href="#Resume" >Resume</a></li>
    </>

    return (
        <div className="navbar py-4 bg-white mid-lg:bg-[#EF412D]">
            <div className="navbar flex item-center justify-end text-black z-50">
                <div className="mid-lg:hidden">
                    <label tabIndex={0} className="btn btn-outline UniversalMargin text-4xl border-none hover:bg-transparent text-black mid-lg:hidden">
                      <RxHamburgerMenu/>
                    </label>
                    <ul tabIndex={0} className="fixed inset-0 mt-20 px-6 py-10 shadow w-screen h-screen space-y-8 bg-white uppercase">
                        {Menu}
                    </ul>
                </div>
                {/* <a href='#Tanjimul' className="text-lg">Tanjimul Sabbir</a> */}
            </div>
            <div className="navbar-center lg:navbar-end hidden mid-lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {Menu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;