import { APP_NAME } from "@/shared/constants/appConstants";

export const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} {APP_NAME}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
