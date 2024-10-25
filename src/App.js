import TypeTest from './components/TypeTest';
import TopNav from './components/TopNav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import "./styles/global.css"
import Donut from './components/Donut'

function App() {
  return (
    <div className='App'>
      <Router >
        <TopNav />
        <Routes>
          <Route exact path="/" element={<TypeTest />} />
          <Route path="/donut" element={<Donut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
