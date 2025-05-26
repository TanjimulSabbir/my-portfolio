function Introduction() {
  const text = `I’m a passionate front-end software developer who loves crafting dynamic and interactive stuff. Skilled in JavaScript, React.js, Tailwind CSS, Redux Toolkit, Next.js, and TypeScript, I leverage the latest technologies to build seamless and visually stunning web experiences. While I appreciate great design, my true strength lies in solving complex problems smoothly and efficiently.`;
  return (
    <div className="UniversalPadding h-screen w-full bg-[#000000c7] text-green-500">
      <div className="leftSlider lg:w-1/2 h-full flex-1 mx-auto flex pt-24 md:pt-0 md:items-center justify-center z-10">
        <div className="mid-lg:-mt-28">
          <h4 className="mb-2 lato tracking-wider">Hi, my name is</h4>
          <h2
            className="Exo2 text-2xl sm:text-3xl md:text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase whitespace-nowrap    text-transparent 
             bg-clip-text 
             bg-gradient-to-r 
             from-green-500 
             via-sky-600 
             to-green-500 "
          >
            Tanjimul Islam Sabbir
          </h2>

          <h1
            className=" 
             text-lg md:text-xl 
             font-semibold 
             uppercase 
             tracking-widest 
             text-transparent 
             bg-clip-text 
             bg-gradient-to-r 
             from-green-500 
             via-purple-600 
             to-pink-500 
             drop-shadow-md 
             mt-2 
             lato"
          >
            Software Developer
          </h1>

          <p className="text-sm md:text-base mt-7 lato pl-0 text-green-500">
            {text}
          </p>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="
             
              mt-10 
              uppercase 
              border-2 
              rounded 
              border-green-500 
              px-14 
              py-4 
              inline-block 
              text-green-500
              hover:bg-green-500 
              hover:text-black 
              transition 
              duration-300 
              ease-in-out 
              hover:scale-105 
              shadow-md
              focus:outline-none
              focus:ring-2 
              focus:ring-green-400
            "
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
