/* eslint-disable react/jsx-no-target-blank */

import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#0a192f] pb-1'>
            <footer className="">
                <div className='text-center text-custom-TextColor'>
                    <div className='px-2'>
                        <div>
                            <p className='text-[9px] lato'>Copyright © 2023 - All rights reserved by Tanjimul Islam Sabbir</p>
                            <p className='text-[9px] lato'>
                                Developed by <a className='text-green-500 LinkHover rubik' href="https://www.linkedin.com/in/TanjimulSabbir" target='_blank'>Tanjimul Islam Sabbir</a>
                            </p>
                        </div>

                        {/* <div className='flex justify-center items-center space-x-2'>
                                <a className='list-none text-[10px] text-white' href="https://github.com/TanjimulSabbir" target='_blank'><FiGithub /> </a>
                                <a className='list-none text-[10px] text-white' href="https://www.linkedin.com/in/TanjimulSabbir" target='_blank'><FiLinkedin /> </a>
                                <a className='list-none text-[10px] text-white' href="https://www.facebook.com/tanjimulsabbir.brahminykite" target='_blank'><FiFacebook /> </a>

                                <a className='list-none text-[10px] text-white' href="https://www.discord.com/tanjimulsabbir" target='_blank'><  BsDiscord /> </a>
                            </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;