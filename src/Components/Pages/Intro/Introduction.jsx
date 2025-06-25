import myImage from "../../../assets/Photos/About/TanjimulSabbir01.jpg"
function Introduction() {
  const text = `I’m a passionate front-end software developer who loves crafting dynamic and interactive stuff. Skilled in JavaScript, React.js, Tailwind CSS, Redux Toolkit, Next.js, and TypeScript, I leverage the latest technologies to build seamless and visually stunning web experiences. While I appreciate great design, my true strength lies in solving complex problems smoothly and efficiently.`;

  return (
    <div className=" h-screen w-full text-green-500 flex flex-col md:flex-row items-center gap-10 justify-between">
      {/* Left Side - Text */}
      <div className="leftSlider w-full md:w-1/2 mx-auto h-full flex items-center justify-center md:pt-0 z-10">
        <div className="md:-mt-28 md:px-6">
          <h4 className="mb-2 lato tracking-wider">Hi, my name is</h4>
          <h2 className="Exo2 text-2xl xs:text-3xl md:text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-green-500">
            Tanjimul Islam Sabbir
          </h2>

          <h1 className="text-xs font-bold uppercase tracking-widest inline-block p-1 font-Calibre rounded ml-2 shadow-2xl bg-green-600 mt-3 text-white">
            Software Engineer
          </h1>
          <h1 className="text-xs font-bold uppercase tracking-widest inline-block p-1 font-Calibre rounded ml-2 shadow-2xl bg-green-600 mt-3 text-white">
           Problem Solver
          </h1>
          <h1 className="text-xs font-bold uppercase tracking-widest inline-block p-1 font-Calibre rounded ml-2 shadow-2xl bg-green-600 mt-3 text-white">
            Naturalist
          </h1>
          <h1 className="text-xs font-bold uppercase tracking-widest inline-block p-1 font-Calibre rounded ml-2 shadow-2xl bg-green-600 mt-3 text-white">
            Nihilist
          </h1>

          <p className="text-sm md:text-base mt-10 lato text-green-500">
            {text}
          </p>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="mt-10 uppercase border-2 rounded border-green-500 px-14 py-4 inline-block text-green-500 hover:bg-green-500 hover:text-black transition duration-300 ease-in-out hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden rightSlider w-full md:w-1/2 h-full md:flex items-center justify-end pt-10 md:pt-0">
        <img
          src={myImage} // Replace with your actual image path
          alt="Tanjimul Islam Sabbir"
          className="rounded w-60 h-60 md:w-[400px] md:h-[500px] object-cover shadow-3xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Introduction;
