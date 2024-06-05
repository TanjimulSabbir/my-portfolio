import { useScroll, useTransform, useViewportScroll } from "framer-motion";
import TanjimulSabbir from "../../../assets/Photos/About/TanjimulSabbir.jpg";
import "../../../style/animation.css"

const About = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div id='about' className='pb-24 mid-lg:py-24 robotoFlex'>
            <h1 className='TitleText font-bold text-[#ccd6f6] mb-8 sm:mb-14'>About Me<span className="hidden mid-lg:Section-Heading"></span></h1>

            <div className="topSlider mid-lg:flex flex-row-reverse items-start gap-16 text-custom-TextColor text-xs md:text-sm">
                <div className="rightSlider flex-1">
                    <div className='sm:text-justify'>
                        <p>
                            <span className='text-xl text-custom-highLightTextColor'>H</span>ey there! I'm Tanjimul Islam Sabbir, a front-end developer passionate about creating awesome websites. I started coding during my university days and fell in love with building cool stuff online.
                        </p>

                        <br />
                        <p>
                            <strong className="text-custom-highlight">🚀 Expertise in Front-end Development:</strong> I've delved into the world of web technologies, mastering HTML, CSS, and JavaScript. However, it was the discovery of tools like Tailwind CSS, Bootstrap, and the power of React.js that ignited my passion. With Redux Toolkit, I've streamlined state management for seamless user interactions, driving my ambition to craft exceptional digital experiences.
                            With over 1 year of experience in JavaScript, React.js, Tailwind CSS, Redux, Redux Toolkit, Next.js, and TypeScript.
                        </p>
                        <br />
                        <p>
                            <strong>🥂 Proficient in both front-end and back-end technologies,</strong> I've contributed to numerous projects, collaborating with startups and diverse teams. While I prioritize clean code and elegant design, I excel in problem-solving and crafting intricate UI logic. Committed to continuous learning and growth, I thrive in team environments and welcome challenging tasks.
                        </p>


                        <br />

                        <p>
                            <strong>☘️ Outside of coding, </strong>
                            Gardening is my hobby. I have an indoor garden.
                            I enjoy nature photograpy and music, which adds a dash of inspiration to my work.
                        </p>
                        <br />
                        <p> <strong className=''>Here's to coding, </strong>  creativity, and my shared journey!</p>
                    </div>
                </div>
                <div className="leftSlider mid-lg:w-1/3 flex items-center justify-center mt-20 mid-lg:mt-0 group cursor-pointer ">

                    <div className="flex items-center justify-center border-2 border-custom-highLightTextColor rounded-lg relative transition duration-700 transform group-hover:translate-y-8 group-hover:-rotate-6">

                        <img className="w-[300px] h-[360px] relative rounded-lg bottom-4 right-4 hover:border-2 hover:border-custom-highLightTextColor"
                            src={TanjimulSabbir}
                            alt="TanjimulSabbir"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About



