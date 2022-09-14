import { Button, InputField } from "components";

const LoginForm = () => {
  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Login !");
  };

  return (
    <form className="form">
      <div className="form__header">
        <h4>Welcome back!</h4>
        <p>Login to your account</p>
      </div>
      <InputField placeholder="Email Address" />
      <InputField type="password" placeholder="Password" />
      <div className="form__footer">
        <p>
          Don't have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
