import SpeedType from './components/SpeedType';
import TopNav from './components/TopNav';
import './App.css'
import "./styles/global.css"
import Donut from './components/Donut'

function App() {
  return (
    <div className="App">
     <TopNav/>
      <main className='main'>
        <div className='card'>
         <SpeedType/>  
        </div>
      </main>
      <Donut/>
    </div>
  );
}

export default App;
