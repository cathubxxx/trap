import './App.css';
import logo from './assets/Logo.png';
import tg from './assets/tg.svg';
import tw from './assets/tw.svg';
import girl1 from './assets/1.png'
import girl2 from './assets/2.png'
import girl3 from './assets/3.png'
import girl4 from './assets/4.png'
import girl5 from './assets/5.png'
import d1 from './assets/1d.png'
import d2 from './assets/2d.png'
import d3 from './assets/3d.png'
import d4 from './assets/4d.png'
import d5 from './assets/5d.png'

function App() {
  return (
    <div className="App">
      <div className="insideApp">
        <div className="section1">
          <div className="logo">
            <img alt="logo" src={logo} className="logo"/>
          </div>
          <div className="socialBlock">
            <a href="https://t.me/trapescort"><img alt="telegram" src={tg} className="social"/></a>
            <a href="https://twitter.com/trapescort"><img alt="twitter" src={tw} className="social"/></a>
          </div>
          <div className="mainSection">
            <div className="leftBlock">
              <img alt="Astolfo" src={girl1} className="leftGirl"/>
            </div>
            <div className="rightBlock">
              <img alt="desc" src={d1} className="desc"/>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="mainSection">
          <div className="rightBlock">
              <img alt="desc" src={d2} className="desc"/>
            </div>
            <div className="leftBlock">
              <img alt="Astolfo" src={girl2} className="leftGirl"/>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="mainSection">
            <div className="leftBlock">
              <img alt="Astolfo" src={girl3} className="leftGirl"/>
            </div>
            <div className="rightBlock">
              <img alt="desc" src={d3} className="desc"/>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="mainSection">
          <div className="rightBlock">
              <img alt="desc" src={d4} className="desc"/>
            </div>
            <div className="leftBlock">
              <img alt="Astolfo" src={girl4} className="leftGirl"/>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="mainSection">
            <div className="leftBlock">
              <img alt="Astolfo" src={girl5} className="leftGirl"/>
            </div>
            <div className="rightBlock">
              <img alt="desc" src={d5} className="desc"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
