import KeyboardButton from './KeyboardButton';
import './Keyboard.css'
import { useEffect, useRef } from "react";

function Keyboard() {
  const keyboardRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
        let key = event.key;
        console.log(key);
        if(key === " ") key = "Space";
        if(key === "\\") key = "Backslash";
        if(key === "'") key = "Apostrof";

        key=key.toLowerCase();

      const btn = keyboardRef.current.querySelector(`[data-key='${key}']`);
      if (!btn) return;

      btn.classList.add("active");

      setTimeout(() => btn.classList.remove("active"), 200);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);



  return (
        <div className="keyboard" ref={keyboardRef}>
            <div className="row">
                <KeyboardButton text="ESC" dataKey="escape"/>
                <KeyboardButton text="1" dataKey='1'/>
                <KeyboardButton text="2" dataKey='2'/>
                <KeyboardButton text="3" dataKey='3'/>
                <KeyboardButton text="4" dataKey='4'/>
                <KeyboardButton text="5" dataKey='5'/>
                <KeyboardButton text="6" dataKey='6'/>
                <KeyboardButton text="7" dataKey='7'/>
                <KeyboardButton text="8" dataKey='8'/>
                <KeyboardButton text="9" dataKey='9'/>
                <KeyboardButton text="0" dataKey='0'/>
                <KeyboardButton text="-" dataKey='-'/>
                <KeyboardButton text="=" dataKey='='/>
                <KeyboardButton className="delete" dataKey='backspace' text='&#8701;'/>

            </div>
            <div className="row">
                <KeyboardButton className='longer-key'  dataKey='tab' text="TAB"/>
                <KeyboardButton text="Q" className="qwerty" dataKey='q'/>
                <KeyboardButton text="W" className="qwerty" dataKey='w'/>
                <KeyboardButton text="E" className="qwerty" dataKey='e'/>
                <KeyboardButton text="R" className="qwerty" dataKey='r'/>
                <KeyboardButton text="T" className="qwerty" dataKey='t'/>
                <KeyboardButton text="Y" className="qwerty" dataKey='y'/>
                <KeyboardButton text="U" dataKey='u'/>
                <KeyboardButton text="I" dataKey='i'/>
                <KeyboardButton text="O" dataKey='o'/>
                <KeyboardButton text="P" dataKey='p'/>
                <KeyboardButton text="[" dataKey='['/>
                <KeyboardButton text="]" dataKey=']'/>
                <KeyboardButton  className='longer-key' dataKey="backslash" text="\"/>
            </div>
            <div className="row">
                <KeyboardButton className='caps' text="CAPS LOCK" dataKey="capsLock"/>
                <KeyboardButton text="A" dataKey='a' />
                <KeyboardButton text="S"dataKey='s'/>
                <KeyboardButton text="D"dataKey='d'/>
                <KeyboardButton text="F"dataKey='f'/>
                <KeyboardButton text="G" dataKey='g'/>
                <KeyboardButton text="H" dataKey='h'/>
                <KeyboardButton text="J" dataKey='j'/>
                <KeyboardButton text="K" dataKey='k'/>
                <KeyboardButton text="L" dataKey='l'/>
                <KeyboardButton text=";" dataKey=';'/>
                <KeyboardButton text="'" dataKey='apostrof'/>
                <KeyboardButton className='enter' text="&#8629;"/>
            </div>
            <div className="row">
                <KeyboardButton className="shift-left" text="SHIFT"/>
                <KeyboardButton text="Z" dataKey='z'/>
                <KeyboardButton text="X" dataKey='x'/>
                <KeyboardButton text="C" dataKey='c'/>
                <KeyboardButton text="V" dataKey='v'/>
                <KeyboardButton text="B" dataKey='b'/>
                <KeyboardButton text="N" dataKey='n'/>
                <KeyboardButton text="M" dataKey='m'/>
                <KeyboardButton text="," dataKey=','/>
                <KeyboardButton text="." dataKey='.'/>
                <KeyboardButton text="?" dataKey='?'/>
                <KeyboardButton className="key-break" text=""/>
                <KeyboardButton text="&#8593;"/>
                <KeyboardButton className="key-break" text=""/>
            </div>
            <div className="row">
                <KeyboardButton className='bottom' dataKey='control' text="CTRL"/>
                <KeyboardButton className='bottom' dataKey='alt' text="⌘"/>
                <KeyboardButton className='bottom' text="ALT"/>
                <KeyboardButton className='space' dataKey='space' text="_________"/>
                <KeyboardButton text="ALT"/>
                <KeyboardButton text="Fn"/>
                <KeyboardButton text="&#8592;"/>
                <KeyboardButton text="&#8595;"/>
                <KeyboardButton text="&#8594;"/>
            </div>
        </div>
  );
}

export default Keyboard;