import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const users ={
  kai: {
    password: '123',
    scores: [45, 37.6, 60]
  }
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  
  const loginAction = async (data) => {
    let valid = false;
    for ( let key in users) {

      if (key === data.username) {
        if (users[key].password === data.password) {
          console.log('logged in as ', key)
          valid = true
          setUser(key)
          navigate("/");
        }
      }
    }

    return false;


    // try {
    //   const response = await fetch("your-api-endpoint/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const res = await response.json();
    //   if (res.data) {
    //     setUser(res.data.user);
    //     setToken(res.token);
    //     localStorage.setItem("site", res.token);
    //     navigate("/dashboard");
    //     return;
    //   }
    //   throw new Error(res.message);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;


export const useAuth = () => {
  return useContext(AuthContext);
};
