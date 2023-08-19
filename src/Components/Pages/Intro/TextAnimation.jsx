import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const text = `I'm a skilled front-end developer with a passion for building dynamic and interactive websites. My expertise lies in harnessing the power of Javascript, React.js, Tailwind CSS, Redux, and other cutting-edge technologies to craft seamless web experiences that engage and captivate users.`;

  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index <= text.length && !completed && !isPaused) {
        setTypedText(text.substring(0, index));
        setIndex(prevIndex => prevIndex + 1);
      } else if (index === text.length + 1) {
        setCompleted(true);
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText('');
          setIndex(0);
          setCompleted(false);
        }, 3000); // Delay before starting the animation again
      }
    }, 100); // Delay between each character

    return () => {
      clearInterval(typingInterval);
    };
  }, [index, text, completed, isPaused]);

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="my-20 typewriter">
      <p className="lg:w-2/3 mx-auto text-center">
        <span className="text-animate">{typedText}</span>
        <span className="cursor">{index <= text.length ? '|' : ''}</span>
      </p>
      <button onClick={handlePauseResume}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default Typewriter;
