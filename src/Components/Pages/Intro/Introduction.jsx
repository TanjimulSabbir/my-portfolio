import intro from "../../../assets/Photos/Bg-Removed/laugh-nature.png"
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;
    return (
        <div className="min-h-screen w-full bg-[#EF412D] lg:flex justify-center text-black dark:text-black relative">
            <div className="IntroMargin flex-1 flex items-center lg:justify-center z-10">
                <div className="">
                    <h4 className='mb-2'>
                        Hi, my name is
                    </h4>
                        <h2 className='Exo2_SanSer text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase whitespace-nowrap'>
                            Tanjimul Islam Sabbir
                        </h2>
                 
                    <h1 className="mt-2 ">Front-end Developer| Reactjs Developer</h1>
                    <Typewriter text={text} />
                    <button className="mt-6 uppercase border border-black px-14 py-4">get in touch</button>
                </div>
            </div>

            <div className="flex-1 mt-10 lg:mt-0 flex items-end justify-center ">
                <img className=" w-[350px] sm:w-[435px] lg:w-[450px] h-full" src={intro} alt="TanjimulSabbir" />
            </div>
        </div>
    )
}

export default Introduction;