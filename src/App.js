import qube from "./images/logo.png"
import github from "./images/github.svg"
import twitter from "./images/twitter.svg"
import tg from "./images/tg.svg"
import './App.css';
import { GitHub, Telegram, Twitter } from "./function";


function App() {
    return (
        <div className="App">
            <div className="header">
                <img className="qubeLogo" src={qube}></img>
                <button className="tttt">ASDADS</button>
                <button className="tttt">ASDADS</button>
                <button className="tttt">ASDADS</button>
                <button className="tttt">ASDADS</button>
            </div>
            <div className="container">
                <div className="containerHeader">
                    <a>Decentralized Finance</a>
                    <p className="txtHeader">for the Masses</p>
                </div>
                <div className="containerMain">
                    <a>Qube is blockchain ecosystem of algorithmic stablecoins powering decentralized finance for everyone.</a>
                </div>
                <div className="containerFooter">
                    <button className="link" onClick={Twitter}>
                        <h3>Twitter</h3>
                        <img className="imgLink" src={twitter}></img>
                    </button>
                    <button className="link" onClick={GitHub}>
                        <h3>GitHub</h3>
                        <img className="imgLink" src={github}></img>
                    </button>
                    <button className="link" onClick={Telegram}>
                        <h3>Telegram</h3>
                        <img className="imgLink" src={tg}></img>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
