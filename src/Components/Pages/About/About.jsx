import TanjimulSabbir from "../../../assets/Photos/About/TanjimulSabbir.jpg";
import "../../../style/animation.css";

const About = () => {
  return (
    <div id="about" className="pb-24 mid-lg:py-24 robotoFlex">
      <h1 className="TitleText font-bold text-[#ccd6f6] mb-8 sm:mb-14">
        About Me<span className="hidden mid-lg:Section-Heading"></span>
      </h1>

      <div className="topSlider mid-lg:flex flex-row-reverse items-start gap-16 text-custom-TextColor text-xs md:text-sm">
        <div className="rightSlider flex-1">
          <div className="sm:text-justify">
            <p>
              <span className="text-xl text-custom-highLightTextColor">H</span>
              ey! I’m Tanjimul Islam Sabbir, a passionate Front-End Software
              Developer dedicated to crafting high-quality, scalable web
              applications and intuitive user experiences.
            </p>

            <br />
            <p>
              <strong className="text-custom-highlight">🚀 What I Do:</strong>{" "}
              With solid expertise in React.js, TypeScript, Redux Toolkit, and
              Tailwind CSS, I build responsive and dynamic web applications that
              solve real-world problems. I have hands-on experience developing
              complex features such as real-time communication (video/audio
              calling, chat), multi-language support, and seamless form
              validation using React Hook Form and Zod. My journey started with
              mastering core web technologies — HTML, CSS, and JavaScript — and
              evolved to include cutting-edge libraries and tools like ShadCN,
              Ant Design, RTK Query, and Material UI.
            </p>
            <br />
            <p>
              <strong> 💼 Professional Experience:</strong> I’ve contributed to
              diverse projects — from e-commerce platforms and travel booking
              systems to social media apps — collaborating closely with backend
              teams to integrate APIs and optimize user interactions. Whether
              leading feature development or enhancing UI/UX design, I thrive on
              delivering clean, maintainable code and scalable front-end
              architectures
            </p>

            <br />

            <p>
              <strong>☘️ Outside of coding, </strong>
              I’m deeply curious about philosophy, existentialism, theology, and
              history—topics that inspire me to think about human life,
              civilization, and our place in the world. I believe that exploring
              these ideas enriches my creativity and problem-solving mindset,
              helping me approach challenges with a thoughtful and open
              perspective. work.
            </p>
            <br />
            <p>
              <strong>🎋 Outside of Mind, </strong>
              When I’m not working or reading, I enjoy tending my indoor garden,
              capturing nature through photography, and listening to music — all
              of which bring me balance and inspiration.
            </p>
            <br />
            <p>
              {" "}
              <strong className="">Here's to coding, </strong> creativity, and
              my shared journey!
            </p>
          </div>
        </div>
        <div className="leftSlider mid-lg:w-1/3 flex items-center justify-center mt-20 mid-lg:mt-0 group cursor-pointer ">
          <div className="flex items-center justify-center border-2 border-custom-highLightTextColor rounded-lg relative transition duration-700 transform group-hover:translate-y-8 group-hover:-rotate-6">
            <img
              className="h-[350px] relative rounded-lg bottom-4 right-4 hover:border-2 hover:border-custom-highLightTextColor"
              src={TanjimulSabbir}
              alt="TanjimulSabbir"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
