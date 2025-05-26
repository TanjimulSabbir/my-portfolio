import { TbPoint } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";

const experiences = [
  {
    companyName: "Utech Innovation",
    role: "Junior Software Engineer",
    companyFullName: "@Utech Innovation, Dhaka",
    duration: "August 2024 – Present",
    points: [
      "Built and refined multiple projects using React.js, TypeScript, Redux Toolkit, React Hook Form, and Zod for form validation, state management, multi-language translation, and data handling.",
      "Leveraged Ant Design, ShadCN, and Tailwind CSS to create complex, responsive layouts, enhancing expertise in responsive design and project structuring.",
      "Developed user management, dashboards, and air ticket management modules in a Travel Platform with extensive form validation and complex business logic.",
    ],
  },
  {
    companyName: "Inventive",
    role: "Web Developer",
    companyFullName: "@Inventive Web Service",
    duration: "May 2023 - July 2023",
    points: [
      "At Inventive Web Service, I had the valuable opportunity to learn how to collaborate effectively within a team. This experience taught me the importance of teamwork, communication, and sharing ideas to achieve common goals.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="lg:w-3/5 pb-24 mid-lg:py-24 mx-auto">
      {/* Heading */}
      <h1 className="Exo2 TitleText text-center font-bold text-[#ccd6f6] mb-8 sm:mb-14">
        Where I've worked
        <span className="hidden mid-lg:Section-Heading"></span>
      </h1>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mt-8 sm:mt-14 md:grid md:grid-cols-[20%_85%] md:space-x-8 md:justify-center"
        >
          <div className="text-custom-highLightTextColor text-base">
            <h1 className="flex items-center space-x-1 underline pb-4 md:pb-0 md:no-underline underline-offset-8 text-lg font-bold">
              <span>{exp.companyName}</span>
            </h1>
          </div>

          <div>
            <div className="md:border-l border-custom-highLightTextColor md:pb-4 md:pl-5">
              <div className="flex items-center space-x-3 text-xs sm:text-base">
                <h1>{exp.role} -</h1>
                <p className="text-custom-highLightTextColor">
                  {exp.companyFullName}
                </p>
              </div>
              <div className="text-xs sm:text-base">
                <small>{exp.duration}</small>
              </div>

              <div className="space-y-3 mt-5">
                {exp.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex space-x-2 text-xs sm:text-base"
                  >
                    <TbPoint className="text-xl w-10 text-custom-highLightTextColor" />
                    <p className="text-custom-TextColor text-xs sm:text-base md:text-justify">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
