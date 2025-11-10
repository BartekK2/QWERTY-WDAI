import './BreakPoint.css';


// Średnio pasuje do strony
function BreakPoint({text}) {
  return <div class="breakpoint">
    <div class="leftbr"></div>
    {text && <div class="middlebr">
      <p>{text}</p>
      
      </div>}
    {text && <div class="rightbr"></div>}
  </div>
}

export default BreakPoint;
