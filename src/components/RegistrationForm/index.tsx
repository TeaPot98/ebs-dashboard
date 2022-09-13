import InputField from "../InputFIeld";
import Button from "../Button";

const RegistrationForm = () => {
  return (
    <form className="auth-form">
      <div className="auth-form__header">
        <h4>Get Started</h4>
        <p>Create your free account</p>
      </div>
      <InputField placeholder="Name" />
      <InputField placeholder="Surname" />
      <InputField type="email" placeholder="Email address" />
      <InputField type="password" placeholder="Create a password" />
      <InputField type="password" placeholder="Confirm your password" />
      <div className="auth-form__footer">
        <p>
          Already have an account ? <a href="#">Login</a>
        </p>
        <Button>Sign Up</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
