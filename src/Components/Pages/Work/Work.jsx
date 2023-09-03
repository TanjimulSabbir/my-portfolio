import AllProjects from "./AllProjects.json"
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const Work = () => {
	const backgroundImage = 'https://i.ibb.co/mzRSWTb/bed06.jpg';
	console.log(AllProjects, "AllProjects")
	return (
		<div id='work' className='pb-24 mid-lg:py-24 mx-auto overflow-hidden'>
			{/* Heading */}
			<h1 className='Exo2 TitleText font-bold text-[#ccd6f6] mb-14'>Some Things I've built<span className="hidden mid-lg:Section-Heading"></span></h1>

			{/* Projects */}
			{
				AllProjects?.Projects.map(project => {
					const { projectName, Description, image, Technologies, Links } = project;
					return (
						<> <div className="relative mt-24">
							<h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2>
							<h1 className="mb-8 text-custom-TitleColor text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2">{projectName}</h1>
							{/* image part */}
							<a href={Links.live}>
								<div>
									<img className="relative w-full h-full " src={image} alt="" srcset="" />
								</div>
							</a>
							{/* Text Part */}

							<div className="flex items-center">
								<div className="mt-10">
									{/* <h2 className="mb-2 text-custom-highLightTextColor">Featured Project</h2> */}
									{/* <h1 className="mb-8 text-custom-TitleColor text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2">{projectName}</h1> */}

									<div className="">
										<p className="mb-7 text-xs sm:text-sm text-custom-TextColor rubik md:text-justify">{Description}</p>

										<p className="mb-6 rubik text-sm sm:text-base space-x-1 cursor-pointer text-custom-highLightTextColor">{Technologies.map(technology => <small key={technology}> {technology}</small>)}</p>

										<div className="flex items-center text-xl space-x-4">
											<a className="LinkHover" href={Links.github}><FiGithub /> </a>
											<a className="LinkHover" href={Links.live}> <LuExternalLink /></a>
										</div>

									</div>
								</div>
							</div>
						</div>
						</>
					)
				})
			}

		</div>
	)
}

export default Work;