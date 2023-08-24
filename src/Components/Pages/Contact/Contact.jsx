import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { GrMedium } from 'react-icons/gr';
const Contact = () => {
    return (
        <div id='contact' className='w-full mid-lg:w-3/5 pt-24 pb-14 mx-auto'>
            <div>
                <div className='mb-10 mid-lg:mb-20'>
                    <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-5'>Get In Touch</h1>
                    <p className="text-custom-BgColor  rubik">I’m currently looking for any new opportunities. Need a front-end developer? Have any question or proposal? Or just want to say hello, I’ll try my best to get back to you!
                    </p>
                </div>
                <div className='sm:grid grid-rows-2 rubik text-custom-TextColor '>
                    <div className='sm:grid grid-cols-2 sm:space-x-14'>
                        <div className="mb-7 flex flex-col">
                            <label htmlFor="fullName" className="text-xs">Your name</label>
                            <input type="text" name="fullname" id="fullName"
                                placeholder="Entr Name"
                                className="ContactPlaceHolder border-custom-TextColor placeholder:rubik mt-3" />
                        </div>
                        <div className="mb-7 flex flex-col">
                            <label htmlFor="email" className="text-xs">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter email address"
                                className="ContactPlaceHolder border-custom-TextColor placeholder:rubik mt-3" />
                        </div>
                    </div>
                    <div className="mb-7 flex flex-col">
                        <label htmlFor="message" className="text-xs">Your Message</label>
                        <textarea id="message" name="message" rows=""
                            placeholder=""
                            className="ContactPlaceHolder border-custom-TextColor resize-none placeholder:rubik"></textarea>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="700">
                        <div className="mt-8 merina">
                            <button type="submit" className="border border-custom-highLightTextColor p-4 text-custom-highLightTextColor rounded text-sm">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20 rubik'>
                <h2>
                    Feeling social? Find me on these online spaces too!
                </h2>
                <div className='flex items-center space-x-5 mt-5'>
                <a className='list-none text-2xl text-white' href="/#"><FiGithub /> </a>
                <a className='list-none text-2xl text-white' href="/#"><FiLinkedin /> </a>
                <a className='list-none text-2xl text-white' href="/#"><FiFacebook /> </a>
                <a className='list-none text-2xl text-white' href="/#"><CiTwitter /> </a>
                <a className='list-none text-xl text-custom-highLightTextColor' href="/#"><GrMedium /> </a>
            </div>
            </div>
        </div>
    )
}

export default Contact