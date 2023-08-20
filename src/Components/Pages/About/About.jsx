import TanjimulSabbir from "../../../assets/Photos/TanjimulSabbir.jpg"
const About = () => {
    return (
        <div id='about' className='rubik py-24'>
            <h1 className='TitleText font-bold text-[#ccd6f6] mb-14'>About Me</h1>
            <div className="md:flex items-start gap-20 text-custom-TextColor">
                <div className="flex-1">
                    <div className='text-justify'>
                        <p>
                            <span className='text-2xl text-custom-highLightTextColor'>H</span>i there
                            I'm Tanjimul Islam Sabbir, a front-end developer with a love for turning code into amazing web experiences. In the vibrant year of 2021, a transformative chapter began as I stepped into the halls of Rajshahi University, setting the stage for an extraordinary odyssey. I got my first own computer and soon found myself falling in love with coding. Python was my first language, and it opened the door to a world of my programmimg.
                        </p>
                        <br />
                        <p>
                            <strong className='text-custom-highLightTextColor'> As time passed, </strong>  I got into web technologies – things like HTML, CSS, and Bootstrap. But it was when I discovered tools like Tailwind CSS, Material UI, and JavaScript that my real passion ignited. React.js became my playground, and Redux and GraphQL joined the mix for smoother operations.
                        </p>

                        <p>
                            <strong className="text-custom-highLightTextColor"> While I've explored backend technologies like Node.js, </strong>
                            Express.js, and MongoDB, my heart truly belongs to the front end. I thrive on solving intricate problems and creating interactive user experiences. Design is cool, but I find my joy in making things work seamlessly. <br />
                            <strong className='text-custom-highLightTextColor'>I recently had an opportunity, </strong>
                            to work with a great company in India. Although I had to step back due to my university's class and exam, the experience taught me a lot and fueled my commitment to learning and growth. Collaboration is key for me. I believe in the power of teamwork, where every voice matters.
                        </p>
                        <p>
                            <strong className='text-custom-highLightTextColor'>Outside of coding, </strong>

                            I enjoy nature photograpy and music, which adds a dash of inspiration to my work.
                        </p>
                        <p> <strong className='text-custom-highLightTextColor'>Here's to coding, </strong>  creativity, and my shared journey!</p>
                    </div>
                </div>
                <div className="md:w-1/3 flex items-center justify-center mt-20 md:mt-12 group cursor-pointer ">
                    <div className="w-[300px] h-[360px] flex items-center justify-center border-2 border-custom-highLightTextColor rounded-lg relative transition duration-700 transform group-hover:translate-y-8 group-hover:-rotate-6">
                            <img className="absolute rounded-lg bottom-4 right-4 hover:border-2 hover:border-custom-highLightTextColor"
                                src={TanjimulSabbir}
                                alt="TanjimulSabbir"
                            />
                        <div className="w-[296px] h-[372px] absolute mb-12 mr-8 rounded-lg bg-emerald-500 transition-opacity duration-700 opacity-30 hover:opacity-0 transform"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



