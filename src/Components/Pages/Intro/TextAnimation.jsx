import React, { useState, useEffect } from 'react';
import "./TextAnimationCss.css"

const Typewriter = ({text}) => {
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
        }, 2000); // Delay before starting the animation again
      }
    }, 100); // Delay between each character

    return () => {
      clearInterval(typingInterval);
    };
  }, [index, text]);

  return (
    <div className="mt-5 typewriter">
      <p className=" text-custom-nameColor">
        <span className="text-animate">
          <span className="skew-animate">
            {typedText.split('').map((char, idx) => {
              const styles = [];
              // if (idx >= 13 && idx <= 32) {
              //   styles.push("highlight-letter");
              // }
            
              // if (idx === 87) {
              //   styles.push("red-letter");
              // }
              // if (idx >= 98 && idx <= 108) {
              //   styles.push("blue-letter");
              // }
              // if (idx >= 115 && idx <= 126) {
              //   styles.push("yellow-letter");
              // }
              // if (idx >= 54 && idx <= 59) {
              //   styles.push("blue-bold-letter");
              // }
              // if (idx >= 4 && idx <= 14) {
              //   styles.push("underline-letter");
              // }
              // if (idx >= 94 && idx <= 104) {
              //   styles.push("rainbow-letter");
              // }
              // if (idx >= 81 && idx <= 85) {
              //   styles.push("glow-letter");
              // }
              // if (idx >= 88 && idx <= 105) {
              //   styles.push("highlight-letter");
              // } if (idx >= 114 && idx <= 139) {
              //   styles.push("highlight-letter");
              // } if (idx >= 150 && idx <= 176) {
              //   styles.push("highlight-letter");
              // }
              // if (idx >= 189 && idx <= 200) {
              //   styles.push("highlight-letter");
              // }

              // if (idx >= 210 && idx <= 217) {
              //   styles.push("highlight-letter");
              // }

              // if (idx >= 235 && idx <= 246) {
              //   styles.push("highlight-letter");
              // }

              // if (idx >= 269 && idx <= 278) {
              //   styles.push("highlight-letter");
              // }

              // if (idx >= 280 && idx <= 296) {
              //   styles.push("highlight-letter");
              // }


              if (styles.length > 0) {
                return <span key={idx} className={styles.join(' ')}>{char}</span>;
              }
              
              return <span key={idx}>{char}</span>;
            })}
          </span>
        </span>
        <span className="cursor">{index <= text.length ? '|' : ''}</span>
      </p>
    </div>
  );
};

export default Typewriter;
