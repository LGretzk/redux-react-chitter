import { login } from "../../apis/authentication";

function Login() {
  const handleLogin = async (event) => {
    event.preventDefault();
    await login(event.target);
    console.log('User logged in');
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