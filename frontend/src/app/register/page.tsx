import { AboutButton } from "@/components/custom/AboutButton";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <AboutButton />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
