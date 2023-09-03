import intro from "../../../assets/Photos/Bg-Removed/laugh02.png"
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;
    return (
        <div className="UniversalPadding h-screen w-full bg-[#020202] bg-opacity-80 text-[#35a55e]">
            <div className="lg:w-1/2 h-full flex pt-24 md:pt-0 md:items-center justify-center  z-10">
                <div className="md:-mt-28">
                    <h4 className='mb-2 lato'>
                        Hi, my name is
                    </h4>
                    <h2 className='Exo2 text-3xl md:text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase whitespace-nowrap'>
                        Tanjimul Islam Sabbir
                    </h2>

                    <h1 className="mt-1 lato">Front-end Developer | Reactjs Developer</h1>
                    {/* <Typewriter text={text} /> */}
                    <p className="mt-7 lato pl-0">{text}</p>
                    <button className="mt-6 uppercase border-2 rounded border-[#238748] px-14 py-4">get in touch</button>
                </div>
            </div>

            {/* <div className="flex-1 mt-10 lg:mt-0 flex items-end justify-center">
                <img className="w-[350px] sm:w-[435px] lg:w-[550px]" src={intro} alt="TanjimulSabbir" />
            </div> */}
        </div>
    )
}

export default Introduction;