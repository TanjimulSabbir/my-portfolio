import AllProjects from "../../../utilites/AllProjects.json"
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1460px] sm:pb-24 mid-lg:py-24 mx-auto overflow-hidden"
    >
      {/* Heading */}
      <h1 className="Exo2 TitleText font-bold text-[#ccd6f6]">
        Some Things I've built
        <span className="hidden mid-lg:Section-Heading"></span>
      </h1>

      {/* Projects */}
      {AllProjects?.Projects.map((project, index) => {
        const { id, projectName, Description, image, Technologies, Links } =
          project;
        return (
          <div
            key={id}
            className={`relative mt-10 ${
              index === 0 ? "md:mt-24" : "md:mt-32"
            }  mx-auto`}
          >
            <h2 className="mb-2 text-custom-highLightTextColor">
              Featured Project
            </h2>
            <h1
              onClick={() => (window.location.href = Links.live)}
              target="_blank"
              className="mb-8 text-custom-TitleColor text-3xl transition duration-500 cursor-pointer hover:text-custom-afterHoverTextColor Exo2"
            >
              {projectName}
            </h1>

            {/* image part */}
            <a href={Links.live}>
              <div>
                <img
                  className="relative w-full md:max-w-[400px] md:h-[250px] rounded-lg"
                  src={image}
                  alt=""
                  srcSet=""
                />
              </div>
            </a>

            {/* Text Part */}
            <div className="md:absolute md:top-20 pointer-events-none">
              <h2 className="my-8 md:mt-0 text-custom-highLightTextColor md:text-end">
                A Quick Glance
              </h2>
              <div>
                <p className="mb-4 bg-[#0d2446] text-xs sm:text-sm p-4 py-5 lg:px-8 rounded text-custom-TextColor shadow-2xl z-20 rubik md:w-[50%] ml-auto pointer-events-auto">
                  {Description}
                </p>

                <p className="mb-6 rubik text-sm sm:text-base space-x-1 cursor-pointer text-custom-highLightTextColor text-end md:w-[50%] ml-auto pointer-events-auto">
                  {Technologies.map((technology) => (
                    <small key={technology}> {technology}</small>
                  ))}
                </p>

                <div className="flex items-center justify-end text-xl space-x-4 lg:space-x-10 pointer-events-auto">
                  <a className="LinkHover" href={Links.github}>
                    <FiGithub />{" "}
                  </a>
                  <a className="LinkHover" href={Links.live}>
                    {" "}
                    <LuExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;