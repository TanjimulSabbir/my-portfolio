import AllProjects  from "./AllProjects.json"
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const Work = () => {
    const backgroundImage = 'https://i.ibb.co/mzRSWTb/bed06.jpg';
    console.log(AllProjects,"AllProjects")
    return (
        <div id='work' className='lg:w-5/6 py-24 mx-auto'>
            {/* Heading */}
            <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="Section-Heading"></span></h1>

            {/* Projects */}
            {
                AllProjects?.Projects.map(project => {
                    const { projectName, Description, image, Technologies, Links } = project;
                    return (
                        <> <div className="mid-lg:grid grid-cols-2 relative mt-24">
                            {/* image part */}
                            <a href={Links.live}>
                                <div className="">
                                    <div className="relative w-full min-h-[400px] h-full mid-lg:w-full mid-lg:h-[400px]">
                                        {/* Background image */}
                                        {/* <div className="bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${backgroundImage})`, height: '100%' }}>
                                </div> */}
                                        <img className="w-full min-h-[400px] h-full mid-lg:w-full mid-lg:h-[400px] rounded" src={image} alt="" srcset="" />
                                        <div className="absolute inset-0 w-full h-full transition duration-500 cursor-pointer bg-[#0d2446] mid-lg:bg-green-500 bg-opacity-90 mid-lg:bg-opacity-30 hover:opacity-0"></div>
                                    </div>
                                </div>
                            </a>
                            {/* Text Part */}
                            <div className="">
                                <div className="absolute inset-0 mid-lg:static mid-lg:text-end flex items-center justify-end p-4 mid-lg:p-0">
                                    <div className="mr-0 ">
                                        <h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2>
                                        <h1 className="mb-8 text-custom-TitleColor text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2_SanSer">{projectName}</h1>
                                        <div className="mid-lg:absolute mid-lg:w-[60%] mid-lg:h-[80px] right-0 bottom-[50%]">
                                            <p className="mb-10 mid-lg:bg-[#0d2446] text-base mid-lg:text-sm mid-lg:p-4 lg:py-5 lg:px-8 rounded text-custom-TextColor mid-lg:shadow-2xl z-20 rubik text-justify">{Description}</p>


                                            <p className="mb-4 robotoMono space-x-1 cursor-pointer text-custom-highLightTextColor">{Technologies.map(technology =><small key={technology}> {technology}</small>)}</p>
                                            <div className="flex items-center space-x-8 text-xl mid-lg:justify-end">
                                                <a className="LinkHover" href={Links.github}><FiGithub /> </a>
                                                <a className="LinkHover" href={Links.live}> <LuExternalLink /></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Work;