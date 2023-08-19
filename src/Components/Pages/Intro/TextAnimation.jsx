import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;

  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setIndex(0);
      }
    }, 100); // Delay between each character

    return () => {
      clearInterval(typingInterval);
    };
  }, [index, text]);

  return (
    <div className="typewriter">
      <p className="mt-20 lg:w-2/3 mx-auto text-justify">
        <span className="text-animate">{typedText}</span>
        <span className="cursor">{index <= text.length ? '|' : ''}</span>
      </p>
    </div>
  );
};

export default Typewriter;
