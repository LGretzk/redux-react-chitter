import { login } from "../../apis/authentication";
import { useNavigate } from 'react-router-dom';

function Login({ setSessionKey }) {
  
  const nav = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await login(event.target);
    setSessionKey(response.session_key);
    console.log('User logged in');
    nav("/peeps");
  }

  return (
    <div>
      <h1>This is the login page</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="handle" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit" value="login">Login</button>
      </form>
    </div>
  );
}

export default Login;