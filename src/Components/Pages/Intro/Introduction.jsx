import intro from "../../../assets/Photos/Bg-Removed/Bg-Remove(Red-wall).png"
import Typewriter from "./TextAnimation";
function Introduction() {
    return (
        <div className="h-screen bg-[#EF4123] flex items-center justify-center">
            <div className="UniversalMargin flex-1">
                <div className="UniversalMargin">
                    <h4 className='text-2xl font-Roboto text-custom-nameColor'>
                        Hi, my name is
                    </h4>
                    <h2 className='text-custom-nameColor text-[60px] font-Exo2 '>
                        Tanjimul Islam Sabbir.
                    </h2>
                    {/* <Typewriter /> */}
                    {/* <button className='border py-[14px] px-4 rounded text-green-500 border-green-500 bg-transparent'>Check out my projects !</button> */}
                </div>
            </div>
            <div className="flex-1 w-1/3">
                <img src={intro} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Introduction;