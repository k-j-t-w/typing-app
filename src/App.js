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
import Signup from './components/Signup';
import Login from './components/Login';
import AuthProvider from './hooks/AuthProvider';
import PrivateRoute from './hooks/PrivateRoute';
import Practice from './components/Practice';

function App() {
  return (
    <div className='App'>
      <Router >
        <AuthProvider>
          <TopNav />
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/practice" element={<Practice />} />
            </Route>
            <Route exact path="/" element={<TypeTest />} />
            <Route path="/donut" element={<Donut />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
