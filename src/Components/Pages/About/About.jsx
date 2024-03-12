import TanjimulSabbir from "../../../assets/Photos/About/TanjimulSabbir.jpg"

const About = () => {
    return (
        <div id='about' className='pb-24 mid-lg:py-24 robotoFlex'>
            <h1 className='TitleText font-bold text-[#ccd6f6] mb-8 sm:mb-14'>About Me<span className="hidden mid-lg:Section-Heading"></span></h1>

            <div className="mid-lg:flex flex-row-reverse items-start gap-16 text-custom-TextColor text-xs md:text-sm">
                <div className="flex-1">
                    <div className='sm:text-justify'>
                        <p>
                            <span className='text-xl text-custom-highLightTextColor'>H</span>i, there!
                            I'm Tanjimul Islam Sabbir. I'm a front-end developer with a love for turning code into amazing web experiences. In the vibrant year of 2021, a transformative chapter began. Now, I'm studying in Rajshahi University. I got my first own computer at university and soon found myself falling in love with coding. Python was my first language, and it opened the door to a world of my programmimg.
                        </p>
                        <br />
                        <p>
                            <strong className=''> As time passed, </strong>  I got into web technologies – things like HTML, CSS, and Javascript. But it was when I discovered tools like TailwindCSS, Bootstrap, and JavaScript that my real passion ignited. My playground is now React.js, with Redux added for more seamless operations.
                        </p>

                        <p>
                            <strong className=""> While I've explored backend technologies like </strong> Node.js,
                            Express.js, and MongoDB, I feel truly belongs to the backend. I thrive on solving intricate problems and creating interactive user experiences.I like design, but I really enjoy smoothly solving tricky problems. I more prefer to work with complex UI logic than others. Most of my working time, I personally focus on write more readable, concise and clean code. Most of my time of coding pass on solving logic. I also love problem solving.
                        </p>
                        <br />
                        <p>
                            <strong className=''>I recently had an opportunity, </strong>
                            to work with a great company in India. Although I had to step back after 2 months due to my university's class and exam, the experience taught me a lot and fueled my commitment to learning and growth. Collaboration is a things that helps achieve something super fast. I believe in the power of teamwork, where every talk matters.
                        </p>
                        <p>
                            <strong className=''>Outside of coding, </strong>
                            Gardening is my hobby. I have an indoor garden.
                            I enjoy nature photograpy and music, which adds a dash of inspiration to my work.
                        </p>
                        <br />
                        <p> <strong className=''>Here's to coding, </strong>  creativity, and my shared journey!</p>
                    </div>
                </div>
                <div className="mid-lg:w-1/3 flex items-center justify-center mt-20 mid-lg:mt-0 group cursor-pointer ">

                    <div className="flex items-center justify-center border-2 border-custom-highLightTextColor rounded-lg relative transition duration-700 transform group-hover:translate-y-8 group-hover:-rotate-6">

                        <img className="w-[300px] h-[360px] relative rounded-lg bottom-4 right-4 hover:border-2 hover:border-custom-highLightTextColor"
                            src={TanjimulSabbir}
                            alt="TanjimulSabbir"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



