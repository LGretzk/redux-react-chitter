import { register } from '../../apis/authentication';

function Register() {
  // Registration handler
  const handleRegister = async (event) => {
    event.preventDefault();
    await register(event.target);
    console.log('User registered');
  }

  return (
    <div>
      <h1>This is the registration page</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="handle" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit" value="register">Register</button>
      </form>
    </div>
  );
}

export default Register;