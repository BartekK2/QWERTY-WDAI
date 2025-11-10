import { Link } from 'react-router-dom';
import './KeyboardButton.css';

function KeyboardButton({text,className="",to=undefined,onClick=undefined, style=undefined,dataKey="",type=""}) {
    if(to){
          return <Link to={to} style={style}class="o"><span className="f">{text}</span></Link>;
    }
    else{
        return <button type={type} data-key={dataKey} className={`o ${className}`}><span style={style}className="f">{text}</span></button>;
    }
}

export default KeyboardButton;
