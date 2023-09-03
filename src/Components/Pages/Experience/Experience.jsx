import { MdOutlineArrowRight } from "react-icons/md"

const Experience = () => {
    return (
        <div id='experience' className='lg:w-3/5 py-24 mx-auto'>
            {/* Heading */}
            <h1 className='Exo2 TitleText font-bold text-[#ccd6f6] mb-14'>Where I'v worked<span className="hidden mid-lg:Section-Heading"></span></h1>
            <div className='mt-14 flex space-x-4 md:space-x-20 justify-center'>
                <div className=''>
                    <div className="text-custom-highLightTextColor text-base">
                        <h1>Inventive</h1>
                    </div>
                </div>
                <div>
                    <div className="border-l border-custom-highLightTextColor pl-4">
                        <div className="flex flex-col sm:items-center sm:flex-row sm:space-x-3">
                            <h1>Jr Front-end Developer</h1>
                            <p className="text-custom-highLightTextColor mb-4 sm:mb-0 text-[10px] sm:text-base">@Inventive Web Service</p>
                        </div>
                        <div className="">
                            <small>May 2023 - July 2023</small>
                        </div>
                        <div className="space-y-3 mt-5">
                        <div className="flex space-x-2">
                                <MdOutlineArrowRight className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm">At Inventive Web Service, I had the valuable opportunity to learn how to collaborate effectively within a team. This experience taught me the importance of teamwork, communication, and sharing ideas to achieve common goals.</p>
                            </div>
                            {/* <div className="flex space-x-2">
                                <VscDebugBreakpointDataUnverified className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm">I turned designs into real websites that look great on computers and phones.I made sure the websites work really smoothly, so people are happy using them.</p>
                            </div> */}
                            <div className="flex space-x-2">
                                <MdOutlineArrowRight className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm"> I collaborated with a warm and creative team to craft stunning websites that showcase diverse talents. Together, we brainstormed and tackled challenges, accelerating our progress.</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience