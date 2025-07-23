// components/Typewriter.jsx
import { useState, useEffect } from "react";

const Typewriter = ({ texts = [], typingSpeed = 100, pause = 1500 }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentText = texts[textIndex];
      let timeout;
  
      if (!isDeleting && charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex));
        timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2);
      } else if (!isDeleting && charIndex > currentText.length) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
  
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pause]);
  
  return (
    <span className="border-r-2 border-primary pr-1 animate-pulse">{displayedText}</span>
  );
};

export default Typewriter;