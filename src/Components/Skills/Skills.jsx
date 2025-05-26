import AntDesign from "../../assets/Photos/Skill-Tools/ant.svg";
import css3 from "../../assets/Photos/Skill-Tools/css3.png";
import firebase from "../../assets/Photos/Skill-Tools/firebase.png";
import git from "../../assets/Photos/Skill-Tools/git.png";
import github from "../../assets/Photos/Skill-Tools/github.png";
import html5 from "../../assets/Photos/Skill-Tools/html5.png";
import javascript from "../../assets/Photos/Skill-Tools/javascript.png";
import materialui from "../../assets/Photos/Skill-Tools/MaterialUI.png";
import mongodb from "../../assets/Photos/Skill-Tools/mongodb.png";
import nodejs from "../../assets/Photos/Skill-Tools/nodejs.png";
import reactjs from "../../assets/Photos/Skill-Tools/reactjs.png";
import redux from "../../assets/Photos/Skill-Tools/redux.png";
import shadcn from "../../assets/Photos/Skill-Tools/shadcn.png";
import tailwind from "../../assets/Photos/Skill-Tools/tailwind.png";
import typescript from "../../assets/Photos/Skill-Tools/Typescript.png";
import zod from "../../assets/Photos/Skill-Tools/zod.png";


function Skills() {
  const Tools = [
    html5,
    css3,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    AntDesign,
    shadcn,
    zod,
    materialui,
    nodejs,
    firebase,
    mongodb,
    git,
    github,
  ];
  const toolsName = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "reactjs",
    "redux",
    "tailwind",
    "Ant Design",
    "shadcn",
    "Zod",
    "Material UI",
    "nodejs",
    "firebase",
    "mongodb",
    "git",
    "github",
  ];
  return (
    <div id="skill" className="lg:w-4/5 pb-24 mid-lg:py-24 mx-auto">
      <div>
        <div className="mb-10 mid-lg:mb-20">
          <h1 className="Exo2 TitleText font-bold text-[#ccd6f6] mb-2">
            Skill & Tools
          </h1>
          <p className="text-custom-BgColor rubik">
            What Tools and Things can I do!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mid-lg:grid-cols-5 justify-around items-center gap-7">
        {Tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer transition transform duration-500 hover:scale-110 hover:rotate-12 hover:animate-pulse opacity-50 hover:opacity-100"
            >
              <div className="p-4 rounded-full flex flex-col items-center justify-center">
                <img className="w-24" src={tool} alt={tool} />
                <p className="uppercase mt-2 text-sm">{toolsName[index]}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Skills;
