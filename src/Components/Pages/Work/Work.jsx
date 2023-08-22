
import { IoLinkOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
const Work = () => {
    return (
        <div id='work' className='mid-lg:w-4/5 py-24'>
            <h1 className='TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="Section-Heading"></span></h1>
            <div className="flex">
                <div className="flex-1">
                    <img src="" alt="" srcset="" />
                </div>
                <div className="flex-1">
                    <h2>Featured Project</h2>
                    <h1>Paradise Palam</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident molestias a in quae placeat molestiae similique laudantium esse consequuntur eaque dolores accusamus, fugiat repellendus inventore dolorem quasi nisi veritatis!</p>
                    <p><small></small></p>
                    <div>
                        <FiGithub />
                        <IoLinkOutline />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work