import React from 'react';
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import Email from '../Email/Email';


const SocialLink = () => {
    return (
        <div className='mid-lg:fixed mid-lg:bottom-32 mid-lg:left-14'>
            <div className='flex justify-center items-center flex-row mid-lg:flex-col space-x-8 mid-lg:space-x-0 mid-lg:space-y-8'>
                <a className='list-none text-xl text-white' href="/#"><FiGithub /> </a>
                <a className='list-none text-xl text-white' href="/#"><FiLinkedin /> </a>
                <a className='list-none text-xl text-white' href="/#"><FiFacebook /> </a>
                <a className='list-none text-xl text-white' href="/#"><CiTwitter /> </a>
            </div>
        </div>
    );
};

export default SocialLink;