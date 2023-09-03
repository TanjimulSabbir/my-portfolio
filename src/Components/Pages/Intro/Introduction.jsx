import intro from "../../../assets/Photos/Bg-Removed/laugh02.png"
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;
    return (
        <div className="h-screen flex items-center justify-center text-white bg-black bg-opacity-80 -mt-14 md:-mt-0">
            <div className="">
                <div className="">
                    <h2 className="text-3xl md:text-4xl lg:text-[55px] xl:text-6xl uppercase Exo2 text-center mb-2 md:mb-4">
                        Hi, I'm Tanjimul Sabbir
                    </h2>
                 
                    <h1 className="rubik text-center text-[#d2d3d2] flex items-center justify-center robotoFlex">Front-end Developer | 
                       ReactJs Developer
                    </h1>
                </div>
                {/* <p className="w-10/12 lg:w-5/12 mx-auto text-center pt-6 text-xs md:text-sm robotoSlab text-custom-TitleColor">{text}</p> */}
            </div>
        </div>
    )
}

export default Introduction;