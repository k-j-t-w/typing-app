import SpeedType from './components/SpeedType';
import TopNav from './components/TopNav';
import './App.css'
import "./styles/global.css"

function App() {
  return (
    <div className="App">
     <TopNav/>
      <main>
       <SpeedType/>
      </main>
    </div>
  );
}

export default App;
