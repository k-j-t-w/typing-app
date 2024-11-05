import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const bcrypt = require('bcryptjs');


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [ users, setUsers ] = useState([
    { 
      username: 'kai',
      password: bcrypt.hashSync('123', 10),
      scores: [45, 37.6, 60]
    }
  ])
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [newUser, setNewUser] = useState(null);
  const navigate = useNavigate();

  const loginAction = async (data) => {
    for ( let u in users) {

      if (users[u].username === data.username && bcrypt.compare(data.password, users[u].password)) {
        console.log('logged in as ', users[u].username)
        setUser(users[u].username)
        navigate("/");
      }
    }
    return false;
  };

  const signupAction = async (data) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const user = {
      username: data.username,
      password: hashedPassword,
      scores: [],
    };
  
    console.log('Hashed Password on Signup:', hashedPassword)
    setNewUser(user);
    setUsers((prev) => [...prev, user]);
  };
  
  useEffect(() => {
    if (newUser) {
      loginAction(newUser);
      setNewUser(null); 
      console.log(users);
    }
  }, [users]);

  const logOut = () => {
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, users, loginAction, logOut, signupAction }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;


export const useAuth = () => {
  return useContext(AuthContext);
};
