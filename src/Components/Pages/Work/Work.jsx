
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
const Work = () => {
    const backgroundImage = 'https://i.ibb.co/mzRSWTb/bed06.jpg';
    return (
        <div id='work' className='w-5/6 py-24 mx-auto'>
            {/* Heading */}
            <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="Section-Heading"></span></h1>

            {/* Projects */}
            <div className="lg:grid grid-cols-2 relative">
                {/* image part */}
                <div className="">
                    <div className=" relative">
                        {/* Background image */}
                        {/* <div className="bg-cover bg-center rounded"
                            style={{ backgroundImage: `url(${backgroundImage})`, height: '100%' }}>
                        </div> */}
                        <img className="w-full h-full lg:w-[500px] lg:h-[400px]" src={backgroundImage} alt="" srcset="" />
                        <div className=" absolute inset-0 w-full h-full transition duration-500 cursor-pointer bg-[#0d2446] lg:bg-green-500 bg-opacity-90 lg:bg-opacity-30 hover:opacity-0"></div>
                    </div>
                </div>
                {/* Text Part */}
                <div className="">
                    <div className="absolute inset-0 lg:relative lg:text-end flex items-center justify-end p-4 lg:p-0">
                        <div className="mr-0 ">
                            <h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2>
                            <h1 className="mb-8 text-custom-TitleColor text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2_SanSer">Paradise Palam</h1>

                            <p className="mb-10 lg:bg-[#0d2446] text-sm lg:py-5 lg:px-8 rounded text-custom-TextColor lg:shadow-2xl z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident molestias a in quae placeat molestiae similique laudantium esse consequuntur eaque dolores accusamus, fugiat repellendus inventore dolorem quasi nisi veritatis!</p>

                            <p className="mb-4"><small>Reactjs</small> <small>Javascript</small> <small>TailwindCss</small> <small>Redux</small></p>
                            <div className="flex items-center space-x-8 text-xl lg:justify-end">
                                <a href="/"><FiGithub /> </a>
                                <a className="" href=""> <LuExternalLink /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work;