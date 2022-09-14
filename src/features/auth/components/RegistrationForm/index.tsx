import { Button, Checkbox, InputField, Select } from "components";

const RegistrationForm = () => {
  const handleRegistration = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Signed Up !");
  };

  return (
    <form className="form">
      <div className="form__header">
        <h4>Get Started</h4>
        <p>Create your free account</p>
      </div>
      <InputField placeholder="Name" />
      <InputField placeholder="Surname" />
      <InputField type="email" placeholder="Email address" />
      <Select labelText="Gender" id="gender">
        <option value="">None</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <InputField type="password" placeholder="Create a password" />
      <InputField type="password" placeholder="Confirm your password" />
      <Checkbox
        id="agreement"
        labelText="I agree with personal data processing"
      />
      <div className="form__footer">
        <p>
          Already have an account ? <a href="/login">Login</a>
        </p>
        <Button onClick={handleRegistration}>Sign Up</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
