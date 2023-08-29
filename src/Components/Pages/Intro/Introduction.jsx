import intro from "../../../assets/Photos/Bg-Removed/laugh02.png"
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;
    return (
        <div className="min-h-screen flex items-center lg:items-start lg:pt-[10%] justify-center text-white bg-black bg-opacity-80">
            <div className="">
                <div className="">
                    <h2 className="text-4xl lg:text-[55px] xl:text-6xl uppercase lato">
                        Hi, I'm Tanjimul Islam Sabbir
                    </h2>
                    <h1 className="mt-4 robotoSlab text-center text-[#d2d3d2] flex items-center justify-center">Front-end Developer | 
                        <p className="typing-animation ">
                            <p className="typing-text text-sm ml-1"> ReactJs Developer</p>
                        </p>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Introduction;