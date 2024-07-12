function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. I'm really good at using JavaScript, React.js, Tailwind, Redux-Toolkit, NextJS, TypeScript and the latest tech to create smooth and awesome websites. I like design, but I really enjoy smoothly solving tricky problems.`;
    return (
        <div className="UniversalPadding h-screen w-full bg-[#000000db] text-green-500">
            <div className="lg:w-1/2 h-full flex-1 mx-auto flex pt-24 md:pt-0 md:items-center justify-center  z-10">
                <div className="leftSlider mid-lg:-mt-28">
                    <h4 className='mb-2 lato tracking-wider'>
                        Hi, my name is

                    </h4>
                    <h2 className='topSlider Exo2 text-2xl sm:text-3xl md:text-4xl lg:text-[55px] xl:text-6xl font-extrabold uppercase whitespace-nowrap'>
                        Tanjimul Islam Sabbir
                    </h2>

                    <h1 className="leftSlider text-xs md:text-base mt-1 lato tracking-wider">Front-end Developer || ReactJS Developer</h1>

                    <p className="topSlider text-sm md:text-base mt-7 lato pl-0 text-green-500">{text}</p>

                    <button onClick={() => window.location.href = "#contact"} className="downSlider mt-10 uppercase border-2 rounded border-green-500 px-14 py-4 inline-block">
                        Get in touch
                    </button>


                </div>
            </div>
        </div>
    )
}

export default Introduction;