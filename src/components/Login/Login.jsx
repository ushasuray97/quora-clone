import React, { useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
   
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // setIsLoggedIn(true);
    setIsLoggedIn(true);
console.log('Login....');
navigate('/addQues');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <p>Not Registered? <Link to={'/register'}>Register here</Link></p>
      </form>
    </div>
  );
};

export default Login;
