import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='mid-lg:w-4/5 py-24 mx-auto'>
            <div>
                <div className='mb-20 text-center'>
                    <h1 className='Exo2_SanSer TitleText font-bold text-[#ccd6f6] mb-5'>Get In Touch</h1>
                    <p className="text-custom-BgColor text-center">I’m currently looking for any new opportunities. Need a front-end developer? Have any question or proposal? Let's build something.
                    </p>
                </div>
                <div className='grid grid-rows-2'>
                    <div className='grid grid-cols-2'>
                        <div className="mb-7 flex flex-col">
                            <label htmlFor="fullName" className="text-xs uppercase text-white">Full Name <span
                                className="text-red-500">*</span></label>
                            <input type="text" name="fullname" id="fullName" 
                                placeholder="Your Full Name"
                                className="ContactPlaceHolder placeholder:Roboto" />
                        </div>
                        <div className="mb-7 flex flex-col">
                            <label htmlFor="email" className="text-xs uppercase text-white">Email <span
                                className="text-red-500">*</span></label>
                            <input type="email" name="email" id="email" placeholder="Your email address"
                                className="ContactPlaceHolder placeholder:font-Inter" />
                        </div>
                    </div>
                    <div className="mb-7 flex flex-col border-b pb-10 border-Primary">
                        <label htmlFor="message" className="text-xs uppercase text-white">Message</label>
                        <textarea id="message" name="message" rows="3"
                            placeholder="Write your message here..."
                            className="ContactPlaceHolder resize-none placeholder:font-Inter"></textarea>
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