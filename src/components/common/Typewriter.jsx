import React, { useState, useEffect } from 'react';

function Typewriter({
  words = [],
  typingSpeed = 120,   // ms por letra escribiendo
  deletingSpeed = 60,  // ms por letra borrando
  pauseTime = 1500,    // pausa cuando termina una palabra
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] || '';
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(
        () => setCharIndex((prev) => prev + 1),
        typingSpeed
      );
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(
        () => setCharIndex((prev) => prev - 1),
        deletingSpeed
      );
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [words, wordIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

  const currentWord = words[wordIndex] || '';
  const textToShow = currentWord.substring(0, charIndex);

  return (
    <span>
      {textToShow}
      <span className="border-r-2 border-purple-400 ml-1 animate-pulse" />
    </span>
  );
}

export default Typewriter;
