import html5 from "../../assets/Photos/Skill-Tools/html5.png"
import css3 from "../../assets/Photos/Skill-Tools/css3.png"
import tailwind from "../../assets/Photos/Skill-Tools/tailwind.png"
import bootstrap from "../../assets/Photos/Skill-Tools/bootstrap.png"
import javascript from "../../assets/Photos/Skill-Tools/javascript.png"
import reactjs from "../../assets/Photos/Skill-Tools/react.png"

function Skills() {
    const Tools = [html5, css3, tailwind, bootstrap, javascript, reactjs]
    return (
        <div id="skill" className="py-24">
            <div>
                <div className='mb-10 mid-lg:mb-20'>
                    <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-2'>Skill & Tools</h1>
                    <p className="text-custom-BgColor  rubik">What Tools and Things can I do!
                    </p>
                </div>
            </div>
            <div className="flex justify-around items-center">
                {Tools.map(((tool, index) => {
                    return (
                        <div key={index} className="cursor-pointer transition transform duration-500 hover:scale-110 hover:rotate-12 hover:animate-pulse">
                            <img className="w-36" src={tool} alt={tool} />
                        </div>
                    )
                }))}
            </div>
            <div></div>
        </div>
    )
}

export default Skills