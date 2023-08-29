import TanjimulSabbir from "../../../assets/Photos/About/red-wall-bg-white.png"
const About = () => {
    return (
        <div id='about' className='py-24 rubik'>
            <h1 className='TitleText font-bold text-[#ccd6f6] mb-14'>About Me<span className="hidden mid-lg:Section-Heading"></span></h1>

            <div className="md:flex items-start gap-20 text-custom-TextColor text-sm">
                <div className="flex-1">
                    <div className='text-justify'>
                        <p>
                            <span className='text-xl text-custom-highLightTextColor'>H</span>i there
                            I'm Tanjimul Islam Sabbir. I'm a front-end developer with a love for turning code into amazing web experiences. In the vibrant year of 2021, a transformative chapter began when I start studying in Rajshahi University, setting the stage for an extraordinary odyssey. I got my first own computer and soon found myself falling in love with coding. Python was my first language, and it opened the door to a world of my programmimg.
                        </p>
                        <br />
                        <p>
                            <strong className='text-custom-highLightTextColor'> As time passed, </strong>  I got into web technologies – things like HTML, CSS, and Bootstrap. But it was when I discovered tools like Tailwind CSS, Material UI, and JavaScript that my real passion ignited. React.js became my playground, and Redux and GraphQL joined the mix for smoother operations.
                        </p>
                        <br />
                        <p>
                            <strong className="text-custom-highLightTextColor"> While I've explored backend technologies like Node.js, </strong>
                            Express.js, and MongoDB, my heart truly belongs to the front end. I thrive on solving intricate problems and creating interactive user experiences. Design is cool, but I find my joy in making things work seamlessly.
                        </p>
                        <br />
                        <p>
                            <strong className='text-custom-highLightTextColor'>I recently had an opportunity, </strong>
                            to work with a great company in India. Although I had to step back after 2 months due to my university's class and exam, the experience taught me a lot and fueled my commitment to learning and growth. Collaboration is key for me. I believe in the power of teamwork, where every voice matters.
                        </p>
                        <p>
                            <strong className='text-custom-highLightTextColor'>Outside of coding, </strong>

                            I enjoy nature photograpy and music, which adds a dash of inspiration to my work.
                        </p>
                        <br />
                        <p> <strong className='text-custom-highLightTextColor'>Here's to coding, </strong>  creativity, and my shared journey!</p>
                    </div>
                </div>
                <div className="md:w-1/3 flex items-center justify-center mt-20 md:mt-12 group cursor-pointer ">
                  
                    <div className="flex items-center justify-center border-2 border-custom-highLightTextColor rounded-lg relative transition duration-700 transform group-hover:translate-y-8 group-hover:-rotate-6">

                        <img className="w-[300px] h-[360px] relative rounded-lg bottom-4 right-4 hover:border-2 hover:border-custom-highLightTextColor"
                            src={TanjimulSabbir}
                            alt="TanjimulSabbir"
                        />
                        <div className="absolute w-full h-full mb-8 mr-8 rounded-lg bg-custom-highLightTextColor transition duration-700 bg-opacity-50 hover:bg-opacity-0 transform"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



