import intro from "../../../assets/Photos/Bg-Removed/laugh02.png"
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users. I especailly prefer impleamenting logical part more than design.`;
    return (
        <div className="UniversalPadding h-screen w-full bg-black bg-opacity-80 dark:bg-opacity-80 text-green-500">
            <div className="lg:w-1/2 h-full flex-1 mx-auto flex pt-24 md:pt-0 md:items-center justify-center  z-10">
                <div className="mid-lg:-mt-28">
                    <h4 className='mb-2 lato tracking-wider'>
                        Hi, my name is

                    </h4>
                    <h2 className='Exo2 text-2xl sm:text-3xl md:text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase whitespace-nowrap'>
                        Tanjimul Islam Sabbir
                    </h2>

                    <h1 className="text-xs md:text-base mt-1 lato tracking-wider">Front-end Developer | Reactjs Developer</h1>

                    <p className="text-sm md:text-base mt-7 lato pl-0 text-green-500">{text}</p>

                    <button onClick={() => window.location.href = "#contact"} className="mt-6 uppercase border-2 rounded border-green-500 px-14 py-4 inline-block">
                        Get in touch
                    </button>


                </div>
            </div>
            {/* border-[#35a55e] */}
            {/* <div className="h-full w-[450px] flex items-center justify-center">
                <img className="h-[600px] w-full rounded-[50%] border-4" src={intro} alt="TanjimulSabbir" />
            </div> */}
        </div>
    )
}

export default Introduction;