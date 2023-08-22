
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='pt-10 bg-[#0a192f] text-Footer font-Bitter'>
            <footer className="footer pb-1 py-5 space-x-3 footer-center rounded">
                <div className='flex items-center justify-center text-center text-white'>
                    <div className='px-2'>
                        <div className='text-xs'>
                            <p>Copyright © 2023 - All rights reserved by Tanjimul Islam Sabbir</p>
                        </div>
                        <small className='text-[9px]'>
                            Developed by <a className='text-green-500' href="https://www.linkedin.com/in/TanjimulSabbir" target='_blank'>Tanjimul Islam Sabbir.</a>
                            </small>
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