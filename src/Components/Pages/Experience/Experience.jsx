import { VscDebugBreakpointDataUnverified } from "react-icons/vsc"

const Experience = () => {
    return (
        <div id='experience' className='mid-lg:w-3/5 py-24 mx-auto'>
            {/* Heading */}
            <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-14'>Where I'v worked<span className="Section-Heading"></span></h1>
            <div className='mt-14 flex space-x-4 md:space-x-20 justify-center'>
                <div className=''>
                    <div className="text-custom-highLightTextColor text-base">
                        <h1>Inventive</h1>
                    </div>
                </div>
                <div>
                    <div className="border-l border-custom-highLightTextColor pl-4">
                        <div className="flex flex-col sm:items-center sm:flex-row sm:space-x-3">
                            <h1>Front-end Developer</h1>
                            <p className="text-custom-highLightTextColor mb-4 sm:mb-0 text-[10px] sm:text-base">@Inventive Web Service</p>
                        </div>
                        <div className="">
                            <small>May 2023 - July 2023</small>
                        </div>
                        <div className="space-y-3 mt-5">
                            <div className="flex space-x-2">
                                <VscDebugBreakpointDataUnverified className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm">   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum aut ratione asperiores beatae perspiciatis rerum nostrum laboriosam ad tempora tempore?</p>
                            </div>
                            <div className="flex space-x-2">
                                <VscDebugBreakpointDataUnverified className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm">   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum aut ratione asperiores beatae perspiciatis rerum nostrum laboriosam ad tempora tempore?</p>
                            </div>
                            <div className="flex space-x-2">
                                <VscDebugBreakpointDataUnverified className="text-xl w-10 text-custom-highLightTextColor" />
                                <p className="text-custom-TextColor text-sm">   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum aut ratione asperiores beatae perspiciatis rerum nostrum laboriosam ad tempora tempore?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience