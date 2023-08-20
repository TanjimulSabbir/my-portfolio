import intro from "../../../assets/Photos/Bg-Removed/no-bg-grayscal.png"
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;
    return (
        <div className="min-h-screen w-full bg-[#EF412D] lg:flex items-center justify-center text-black">
            <div className="UniversalMargin flex-1 z-10">
                <div className="UniversalMargin">
                    <h4 className='mb-2'>
                        Hi, my name is
                    </h4>
                    <h2 className='Exo2_SanSer text-black text-3xl sm:text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase'>
                   Tanjimul Islam Sabbir
                    </h2>
                    <h1 className="mt-2 lg:mt-4">Front-end Developer| Reactjs Developer</h1>
                    <Typewriter text={text} />
                    <button className="mt-5 uppercase border border-black px-14 py-4">get in touch</button>
                </div>
            </div>
        
                <div className="flex-1 h-full flex items-center justify-center lg:max-w-[435px]">
                    <img className="w-[435px]" src={intro} alt="TanjimulSabbir" />
                </div>
        </div>
    )
}

export default Introduction;