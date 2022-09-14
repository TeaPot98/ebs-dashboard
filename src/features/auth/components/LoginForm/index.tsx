import Button from "../../../../components/Button";
import InputField from "../../../../components/InputFIeld";

const LoginForm = () => {
  return (
    <form className="auth-form">
      <div className="auth-form__header">
        <h4>Welcome back!</h4>
        <p>Login to your account</p>
      </div>
      <InputField placeholder="Email Address" />
      <InputField type="password" placeholder="Password" />
      <div className="auth-form__footer">
        <p>
          Don't have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
