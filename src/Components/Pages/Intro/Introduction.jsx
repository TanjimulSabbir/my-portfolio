import intro from "../../../assets/Photos/IntroPhoto/html-system-website-concept.jpg"
import Typewriter from "./TextAnimation";
function Introduction() {
    return (
        <div className="relative min-h-screen">
            <div>
                <img src={intro} alt="" srcset="" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
                <div className="text-center">
                    <h4 className='text-custom-highLightTextColor mb-10'>
                        Hi, my name is
                    </h4>
                    <h2 className='big-heading font-bold mt-8 text-[#ccd6f6]'>
                        Tanjimul Islam Sabbir
                    </h2>
                    <Typewriter />
                    <button className='border py-[14px] px-4 rounded-sm text-custom-highLightTextColor border-custom-highLightTextColor bg-transparent'>Check out my projects !</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction;