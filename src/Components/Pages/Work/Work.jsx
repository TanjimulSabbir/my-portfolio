
import { IoLinkOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
const Work = () => {
    return (
        <div id='work' className='mid-lg:w-4/5 py-24'>
            <h1 className='TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="Section-Heading"></span></h1>
            <div className="mid-lg:flex">
                <div className="flex-1">
                    <img src="" alt="" srcset="" />
                </div>
                <div className="flex-1">
                    <h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2>
                    <h1 className="mb-8 text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor">Paradise Palam</h1>
                    <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident molestias a in quae placeat molestiae similique laudantium esse consequuntur eaque dolores accusamus, fugiat repellendus inventore dolorem quasi nisi veritatis!</p>
                    <p><small></small></p>
                    <div className="flex space-x-3 text-2xl">
                      <a href="/"><FiGithub /> </a>
                       <a href=""> <IoLinkOutline /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work