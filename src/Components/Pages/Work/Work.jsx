
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
const Work = () => {
    return (
        <div id='work' className='mid-lg:w-4/5 py-24'>
            <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="Section-Heading"></span></h1>
            <div className="mid-lg:flex items-center justify-center gap-12">
                <div className="flex-1">
                    <img className="rounded" src="https://i.ibb.co/mzRSWTb/bed06.jpg" alt="" srcset="" />
                </div>
                <div className="flex-1">
                    <h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2>
                    <h1 className="mb-8 text-custom-TitleColor
                    text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2_SanSer">Paradise Palam</h1>
                    <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident molestias a in quae placeat molestiae similique laudantium esse consequuntur eaque dolores accusamus, fugiat repellendus inventore dolorem quasi nisi veritatis!</p>
                    <p className="mb-4"><small>VS Code</small></p>
                    <div className="flex items-center space-x-8 text-xl">
                        <a href="/"><FiGithub /> </a>
                        <a className="" href=""> <LuExternalLink /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work