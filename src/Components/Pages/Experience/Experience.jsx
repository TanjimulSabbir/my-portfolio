import { VscDebugBreakpointLogUnverified } from "react-icons/vsc"

const Experience = () => {
    return (
        <div id='experience' className='mid-lg:w-4/5 py-24'>
            {/* Heading */}
            <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-14'>Where I'v worked<span className="Section-Heading"></span></h1>
            <div className='mt-10 grid grid-cols-2'>
                <div className=''>
                    <div className="border-l border-custom-highLightTextColor text-custom-highLightTextColor border-spacing-1 pl-2">
                        <h1>Inventive</h1>
                    </div>
                </div>
                <div>
                    <div className="space-y-5">
                        <div className="flex space-x-3">
                            <h1>Front-end Developer</h1>
                            <p className="text-custom-highLightTextColor">@Inventive Web Service</p>
                        </div>
                        <div>
                            <p>May 2023 - July 2023</p>
                        </div>
                        <div className="flex text-xl space-x-2">
                            <VscDebugBreakpointLogUnverified className="text-xl w-14 text-custom-highLightTextColor" />
                            <p className="text-sm">   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum aut ratione asperiores beatae perspiciatis rerum nostrum laboriosam ad tempora tempore?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience