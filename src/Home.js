import './Home.css';
import Pen from './pioro.svg'
import Calc from './calc.svg'
import Briefcase from './briefcase.svg'
import Mouse from './mouse.svg'

function Test() {
  return (
    <main>
        <h2 style={{ textAlign:"center"}}>
            Kliknij przycisk Graj i przetestuj swoje umiejętności w szybkim pisaniu na tej stronie!
            Bij swoje rekordy i sprawdź, jak szybko potrafisz przepisać tekst bez literówek. 
            Idealne miejsce dla tych, którzy chcą poprawić swoją prędkość pisania.
        </h2>
        <div className='tutorial'>
            <article className='description'>
                <h2>Pióro i przeszłość</h2>
                <h3 >Kiedyś pisanie wymagało pióra, atramentu i kartki. Każde słowo stawiało się powoli, a pomyłki były trudne do poprawienia. Pisanie było rytuałem, który uczył cierpliwości i staranności. </h3>
            </article>
            <img src={Pen}/>
        </div>
        <div className='tutorial'>
            <article className='description'>
                <h2>Praca i produktywność</h2>
                <h3 >Dziś większość z nas używa klawiatury. Szybkie pisanie jest nieocenione w pracy – pozwala tworzyć dokumenty, raporty, e-maile i komunikować się efektywnie w zespole. To umiejętność, która oszczędza czas i zwiększa produktywność. </h3>
            </article>
            <img src={Briefcase}/>
        </div>
        <div className='tutorial'>
            <article className='description'>
                <h2>Edukacja i nauka</h2>
                <h3 >Umiejętność sprawnego pisania pomaga też w nauce – szybkie notowanie wykładów, tworzenie streszczeń i przygotowywanie projektów jest znacznie łatwiejsze, gdy tekst powstaje płynnie i bez przeszkód.</h3>
            </article>
            <img src={Calc}/>
        </div>
        <div className='tutorial'>
            <article className='description'>
                <h2>Komunikacja codzienna</h2>
                <h3 >Szybkie pisanie przydaje się również w codziennej komunikacji – wiadomości tekstowe, czaty czy media społecznościowe stają się bardziej naturalne i efektywne, jeśli potrafimy sprawnie wprowadzać tekst.</h3>
            </article>
            <img src={Mouse}/>
        </div>
    </main>
  );
}

export default Test;
