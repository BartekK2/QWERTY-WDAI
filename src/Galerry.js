import "./Galerry.css"
import Piesek from "./piesek.mp4"
import kot1 from "./kot1.jpg"
import kot2 from "./kot2.jpg"
import kot3 from "./kot3.jpg"
import kot4 from "./kot4.jpg"
import kot5 from "./kot5.jpg"


function Galerry() {
  return (
    <main>
      <h3>Szczerze - nie wiem co pasuje do tej galerii więc daje swojego kota</h3>
      <div id="galeria">
        <figure>
            <img src={kot1} alt="kotek z misiem"/>

        <figcaption>kotek z misiem</figcaption>
      </figure>
      <figure>
            <img src={kot2} alt="kotek pod łóżkiem"/>

        <figcaption>kotek pod łóżkiem</figcaption>
      </figure>
      <figure>
            <img src={kot3} alt="siedzący kotek"/>

        <figcaption>siedzący kotek</figcaption>
      </figure>
      <figure>
            <img src={kot4} alt="leżący kotek"/>

        <figcaption>leżący kotek</figcaption>
      </figure>
      <figure>
            <img src={kot5} alt="kotek w pół siedzący w pół leżący?"/>

        <figcaption>kotek w pół siedzący w pół leżący?</figcaption>
      </figure>
      
      <video controls>
        <source src={Piesek} type="video/mp4"></source>
      </video>
      </div>
    </main>
  );
}

export default Galerry;
