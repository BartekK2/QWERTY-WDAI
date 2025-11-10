import BreakPoint from './components/BreakPoint';
import './Footer.css';
import GitIcon from './git.png'
function Test() {
  return (
    <div>
        <BreakPoint/>
        <footer>
            <p>Strona tworzona w ramach kursu WDAI (projekt pierwszy) - Bartłomiej Król</p>
            <a href='https://github.com/BartekK2/QWERTY-WDAI'>
            <div id="github-link">
            <img src={GitIcon} style={{height:"40px"}}></img>
            <p>Link do repo</p>
            </div>
            </a>        
        </footer>
    </div>
  );
}

export default Test;
