const Navbar = () => {
    const Menu = <>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Works</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="text-emerald-500">
            <a href="#Resume" className='border-emerald-500'>Resume</a>
        </li>
    </>

    return (
        <div className="navbar py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-outline UniversalMargin mid-lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Menu}
                    </ul>
                </div>
                {/* <a href='#Tanjimul' className="px-4 te border border-emerald-500 text-xl rounded-lg">Tanjimul</a> */}
            </div>

            <div className="navbar-center lg:navbar-end hidden mid-lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Menu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar