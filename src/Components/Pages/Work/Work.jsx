
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
const Work = () => {
    const backgroundImage = 'https://i.ibb.co/mzRSWTb/bed06.jpg';
    return (
        <div id='work' className='w-5/6 py-24 mx-auto'>
            {/* Heading */}
            <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="Section-Heading"></span></h1>
            {/* Projects */}
            <div>
                {/* image part */}
                <div className="relative items-center">
                    <div className="">
                        <div className="w-[500px] h-[400px] relative">
                            {/* Background image */}
                            <div className="bg-cover bg-center rounded "
                                style={{ backgroundImage: `url(${backgroundImage})`, height: '100%' }}>
                            </div>
                            <div className="absolute inset-0 transition duration-500 cursor-pointer bg-green-500 bg-opacity-30 hover:bg-opacity-0 z-10"></div>
                        </div>
                    </div>
                    {/* Text Part */}
                    <div className="">
                        <div className="absolute w-[60%] h-full top-0 right-0">
                            <div className="text-end">
                                <h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2>
                                <h1 className="mb-8 text-custom-TitleColor text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2_SanSer">Paradise Palam</h1>

                                <p className="mb-10 bg-[#0d2446] text-sm py-5 px-8 rounded text-custom-TextColor shadow-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident molestias a in quae placeat molestiae similique laudantium esse consequuntur eaque dolores accusamus, fugiat repellendus inventore dolorem quasi nisi veritatis!</p>

                                <p className="mb-4"><small>Reactjs</small> <small>Javascript</small> <small>TailwindCss</small> <small>Redux</small></p>
                                <div className="flex items-center space-x-8 text-xl justify-end">
                                    <a href="/"><FiGithub /> </a>
                                    <a className="" href=""> <LuExternalLink /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;