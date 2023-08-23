import { RxHamburgerMenu } from "react-icons/rx"
const Navbar = () => {
    const Menu = <>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Works</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Blog</a></li>
        <li className="text-emerald-500">
            <a href="#Resume" className='border-emerald-500'>Resume</a>
        </li>
    </>

    return (
        <div className="navbar py-4 bg-[#EF412D]">
            <div className="navbar flex item-center justify-end">
                <div className="">
                    <label tabIndex={0} className="btn btn-outline UniversalMargin text-4xl text-black border-none hover:bg-transparent mid-lg:hidden">
                      <RxHamburgerMenu/>
                    </label>
                    <ul tabIndex={0} className="fixed inset-0 mt-20 flex items-center shadow w-screen h-screen z-50 space-y-5 bg-black bg-opacity-70 uppercase Exo2_SanSer">
                        <>
                        {Menu}
                        </>
                    </ul>
                </div>
                {/* <a href='#Tanjimul' className="text-lg">Tanjimul Sabbir</a> */}
            </div>
            <div className="navbar-center lg:navbar-end hidden mid-lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Menu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;