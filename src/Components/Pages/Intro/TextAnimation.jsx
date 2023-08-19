import React, { useState, useEffect } from 'react';
import "./TextAnimationCss.css"

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
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText('');
          setIndex(0);
        }, 3000); // Delay before starting the animation again
      }
    }, 100); // Delay between each character

    return () => {
      clearInterval(typingInterval);
    };
  }, [index, text]);

  return (
    <div className="my-20 typewriter">
      <p className="lg:w-2/3 mx-auto text-center">
        <span className="text-animate">
          <span className="skew-animate">
            {typedText.split('').map((char, idx) => {
              if (idx >= 13 && idx <= 32) { // 'front-end developer'
                return <span key={idx} className="highlight-letter">{char}</span>;
              } else if (idx >= 6 && idx <= 12) { // 'skilled'
                return <span key={idx} className="red-letter">{char}</span>;
              } else if (idx >= 86 && idx <= 90) { // 'power'
                return <span key={idx} className="red-letter">{char}</span>;
              } else if (idx >= 28 && idx <= 34) { // 'dynamic'
                return <span key={idx} className="bold-letter">{char}</span>;
              } else if (idx >= 119 && idx <= 141) { // 'cutting-edge technologies'
                return <span key={idx} className="bold-letter">{char}</span>;
              } else if (idx >= 56 && idx <= 61) { // 'passion'
                return <span key={idx} className="blue-letter">{char}</span>;
              } else if (idx >= 95 && idx <= 104) { // 'interactive'
                return <span key={idx} className="underline-letter">{char}</span>;
              } else if (idx >= 35 && idx <= 40) { // 'engage'
                return <span key={idx} className="rainbow-letter">{char}</span>;
              } else if (idx >= 41 && idx <= 47) { // 'captivate'
                return <span key={idx} className="rotate-letter">{char}</span>;
              } else if (idx >= 136 && idx <= 142) { // 'users.'
                return <span key={idx} className="glow-letter">{char}</span>;
              }
              return char;
            })}
          </span>
        </span>
        <span className="cursor">{index <= text.length ? '|' : ''}</span>
      </p>
    </div>
  );
};

export default Typewriter;
