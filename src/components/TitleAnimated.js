import { useEffect, useRef } from "react";
import KeyboardButton from './KeyboardButton';

function TitleAnimated({text,to}) {
    const containerRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const buttons = containerRef.current.querySelectorAll("button");
      if (buttons.length === 0) return;

      const randomIndex = Math.floor(Math.random() * buttons.length);
      const btn = buttons[randomIndex];

      btn.classList.add("active");

      setTimeout(() => btn.classList.remove("active"), 300);

    }, 500);

    return () => clearInterval(interval);
  }, []);
    return  <div ref={containerRef} id="title-animation">
        <KeyboardButton text="Q"></KeyboardButton>
        <KeyboardButton text="W"></KeyboardButton>
        <KeyboardButton text="E"></KeyboardButton>
        <KeyboardButton text="R"></KeyboardButton>
        <KeyboardButton text="T"></KeyboardButton>
        <KeyboardButton text="Y"></KeyboardButton>
    </div>
;
}

export default TitleAnimated;
