import intro from "../../../assets/Photos/IntroPhoto/html-system-website-concept.jpg"
import "./Introduction.css"
import React, { useState, useEffect } from 'react';
import Typewriter from "./TextAnimation";
function Introduction() {
    const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;

    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setTypedText(prevTypedText => prevTypedText + text.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setTypedText('');
                    setIndex(0);
                }, 2000); // Delay before starting the animation again
            }
        }, 100); // Delay between each character

        return () => {
            clearInterval(typingInterval);
        };
    }, [index]);

    return (
        <div className="relative min-h-screen">
            <div>
                <img src={intro} alt="" srcset="" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
                <div className="text-center">
                    <h4 className='text-custom-highLightTextColor mb-10'>
                        Hi, my name is
                    </h4>
                    <h2 className='big-heading font-bold mt-8 text-[#ccd6f6]'>
                        Tanjimul Islam Sabbir
                    </h2>
                    <Typewriter />
                    <button className='border py-[14px] px-4 rounded-sm text-custom-highLightTextColor border-custom-highLightTextColor bg-transparent mt-14'>Check out my projects !</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction;