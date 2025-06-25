import { motion } from "framer-motion";
import myImage from "../../../assets/Photos/About/TanjimulSabbir01.jpg";

function Introduction() {
  const text = `I’m a passionate front-end software developer who loves crafting dynamic and interactive stuff. Skilled in JavaScript, React.js, Tailwind CSS, Redux Toolkit, Next.js, and TypeScript, I leverage the latest technologies to build seamless and visually stunning web experiences. While I appreciate great design, my true strength lies in solving complex problems smoothly and efficiently.`;

  return (
    <div className="relative h-screen w-full text-green-400 flex flex-col md:flex-row items-center justify-between overflow-hidden px-4 md:px-7 gap-5">
      {/* Left Side - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 w-full md:w-1/2 h-full flex items-center justify-center"
      >
        <div className="pt-10 md:pt-0">
          <h4 className="mb-2 lato tracking-wider text-sm text-gray-300">
            Hi, my name is
          </h4>
          <h2 className="Exo2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-green-400 whitespace-nowrap">
            Tanjimul Islam Sabbir
          </h2>

          <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
            {[
              "Software Engineer",
              "Problem Solver",
              "Naturalist",
              "Nihilist",
            ].map((title, i) => (
              <span
                key={i}
                className="text-[8px] mid-lg:text-xs font-bold uppercase tracking-widest px-1 md:px-2 py-0.5 rounded shadow-md bg-green-600 text-white font-Calibre"
              >
                {title}
              </span>
            ))}
          </div>

          <motion.p
            className="text-xs md:text-sm mid-lg:text-base mt-8 text-green-200 leading-relaxed max-w-xl lato"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {text}
          </motion.p>

          <motion.button
            onClick={() => (window.location.href = "#contact")}
            className="mt-10 uppercase border-2 rounded border-green-400 px-10 py-3 text-green-400 hover:bg-green-400 hover:text-black transition duration-300 ease-in-out hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:flex w-full md:w-1/2 h-full items-center justify-end pt-10 md:pt-0 z-10"
      >
        <motion.img
          src={myImage}
          alt="Tanjimul Islam Sabbir"
          className="rounded-lg w-60 h-60 md:w-[400px] md:h-[500px] object-cover shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default Introduction;
