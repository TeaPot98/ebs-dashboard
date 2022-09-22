import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm";

interface AuthPageProps {
  type: "login" | "register";
}

export const AuthPage = ({ type }: AuthPageProps) => {
  return (
    <div className="auth-page">
      {type === "login" ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};
