import { useEffect, useState, useRef } from "react";
import Keyboard from "./components/Keyboard";
import "./Game.css"

/* nie zdążyłem dodać timera i generatora losowych słów */

function Game() {
  const [ind, setInd] = useState(0);
  const [currInd, setcurrInd] = useState(0);

  const indRef = useRef(0);
  const currRef = useRef(0);
  const text="Litwo! Ojczyzno moja! ty jesteś jak zdrowie. Ile cię trzeba cenić, ten tylko się dowie, Kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie. Panno Święta, co Jasnej bronisz Częstochowy I w Ostrej świecisz Bramie! Ty, co gród zamkowy Nowogródzki ochraniasz z jego wiernym ludem! Jak mnie dziecko do zdrowia powróciłaś cudem"
  
  useEffect(() => {

    const handleKeyDown = (event) => {
    const key = event.key;
    if(!key) return;
    const allowedRegex = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ,. !?]$/;

    if(key == "Backspace"){
        if(currRef.current > 0){
        currRef.current -= 1;
        setcurrInd(currRef.current);

        if(indRef.current > currRef.current){
            indRef.current = currRef.current;
            setInd(indRef.current);
        }
        }
        return;
    }
    if (key === " " && event.target === document.body) { // żeby spacja nie scrollowała bo tekstu do przepisania nie widać
      event.preventDefault();
    }

    if(!allowedRegex.test(key)) return;

    currRef.current += 1;
    setcurrInd(currRef.current);

    const expectedChar = text[indRef.current];
    if(key == expectedChar){
        indRef.current += 1;
        setInd(indRef.current);
    }
    };


    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="game">
      <div id="monitor">
        <p style={{ display: "flex",fontSize:"1.5rem",flexWrap:"wrap", fontFamily: "monospace", margin: 0, lineHeight: "1.2em" }}>
  
  {/* lekki overkill może ogarnij potem jak to inaczej wymyślić */}
  {text.split("").map((char, i) => {
    let color;
    if (i < ind) color = "green";
    else if (i < currInd) color = "red";
    else color = "black";

    return (
      <span key={i} style={{ color:color, whiteSpace:"pre" }}>{char}</span>
    );
  })}
</p>
      </div>
      <Keyboard/>
      <div id="phone-info">
        <h3>
          Żeby zagrać w grę, musisz odpalić tą strone na komputerze.
        </h3>
      </div>
    </div>
  );
}

export default Game;
