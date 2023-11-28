import { CiLocationArrow1 } from "react-icons/ci"

const Experience = () => {
    return (
        <div id='experience' className='lg:w-3/5 pb-24 mid-lg:py-24 mx-auto'>
            {/* Heading */}
            <h1 className='Exo2 TitleText font-bold text-[#ccd6f6] mb-8 sm:mb-14'>Where I'v worked<span className="hidden mid-lg:Section-Heading"></span></h1>
            <div className='mt-8 sm:mt-14 md:flex md:space-x-20 md:justify-center'>
                    <div className="text-custom-highLightTextColor text-base">
                        <h1 className="pb-3 md:pb-0 underline md:no-underline underline-offset-8 text-lg">Inventive</h1>
                        {/* <hr className="bg-custom-highLightTextColor"/> */}
                    </div>
                <div>
                    <div className="md:border-l border-custom-highLightTextColor md:pl-4">
                        <div className="flex items-center space-x-3 text-xs sm:text-base">
                            <h1>Jr Front-end Developer -</h1>
                            <p className="text-custom-highLightTextColor ">@Inventive Web Service</p>
                        </div>
                        <div className="text-xs sm:text-base">
                            <small>May 2023 - July 2023</small>
                        </div>
                        <div className="space-y-3 mt-5">
                        <div className="flex space-x-2 text-xs sm:text-base">
                                <CiLocationArrow1 className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-xs sm:text-base md:text-justify">At Inventive Web Service, I had the valuable opportunity to learn how to collaborate effectively within a team. This experience taught me the importance of teamwork, communication, and sharing ideas to achieve common goals.</p>
                            </div>
                            {/* <div className="flex space-x-2">
                                <VscDebugBreakpointDataUnverified className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm">I turned designs into real websites that look great on computers and phones.I made sure the websites work really smoothly, so people are happy using them.</p>
                            </div> */}
                            {/* <div className="flex space-x-2">
                                <MdOutlineArrowRight className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm text-justify "> I collaborated with a warm and creative team to craft stunning websites that showcase diverse talents. Together, we brainstormed and tackled challenges, accelerating our progress.</p>
                            </div> */}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience