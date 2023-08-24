import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { GrMedium } from 'react-icons/gr';



const SocialLink = () => {
    return (
        <div className='hidden mid-lg:fixed mid-lg:bottom-28 mid-lg:hidden Exo2_SanSer'>
            <div className='flex justify-center items-center flex-row mid-lg:flex-col space-x-8 mid-lg:space-x-0 mid-lg:space-y-8'>
                <a className='list-none text-xl text-white' href="/#"><FiGithub /> </a>
                <a className='list-none text-xl text-white' href="/#"><FiLinkedin /> </a>
                <a className='list-none text-xl text-white' href="/#"><FiFacebook /> </a>
                <a className='list-none text-xl text-white' href="/#"><CiTwitter /> </a>
                <a className='list-none text-xl text-white' href="/#"><GrMedium /> </a>
            </div>
            <span className="Social-Heading"></span>
        </div>
    );
};

export default SocialLink;