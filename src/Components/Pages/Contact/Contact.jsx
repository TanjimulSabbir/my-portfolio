import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='mid-lg:w-3/5 py-24 mx-auto'>
            <div>
                <div className='mb-20 text-center'>
                    <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-5'>Get In Touch</h1>
                    <p className="text-custom-BgColor text-center rubik">I’m currently looking for any new opportunities. Need a front-end developer? Have any question or proposal? Or just want to say hello, I’ll try my best to get back to you!
                    </p>
                </div>
                <div className='mid-lg:grid grid-rows-2 rubik text-custom-TextColor'>
                    <div className='mid-lg:grid grid-cols-2 space-x-14'>
                        <div className="mb-7 flex flex-col">
                            <label htmlFor="fullName" className="text-xs">Enter name</label>
                            <input type="text" name="fullname" id="fullName" 
                                placeholder="Your Name"
                                className="ContactPlaceHolder placeholder:rubik mt-5" />
                        </div>
                        <div className="mb-7 flex flex-col">
                            <label htmlFor="email" className="text-xs">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter email address"
                                className="ContactPlaceHolder placeholder:rubik mt-5" />
                        </div>
                    </div>
                    <div className="mb-7 flex flex-col">
                        <label htmlFor="message" className="text-xs">Your Message</label>
                        <textarea id="message" name="message" rows="3"
                            placeholder="Write your message here"
                            className="ContactPlaceHolder border-b resize-none placeholder:rubik"></textarea>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="700">
                        <div className="mt-8 max-w-fit">
                            <button type="submit" className="Btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact