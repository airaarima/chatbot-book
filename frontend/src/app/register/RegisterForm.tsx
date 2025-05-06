"use client";

import { ChatBookTitle } from "@/components/custom/ChatBookTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RegisterFormData, registerSchema } from "@/schemas/registerSchema";
import { messages } from "@/shared/constants/messages";
import { LOGIN_PAGE } from "@/shared/constants/routes";
import useApiRegister from "@/shared/services/requests/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutateRegister, loading } = useApiRegister();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...payload } = data;

    const result = await mutateRegister(payload);

    const isSuccess = result === true;

    const toastStyle = {
      background: isSuccess ? "#dcfce7" : "#fee2e2",
      color: isSuccess ? "#166534" : "#991b1b",
    };

    const toastMessage = isSuccess
      ? messages.success.userCreated
      : result || messages.error.default;

    toast[isSuccess ? "success" : "error"](toastMessage, {
      style: toastStyle,
    });

    console[isSuccess ? "log" : "error"](toastMessage);

    if (isSuccess) {
      router.push(LOGIN_PAGE);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          <ChatBookTitle />
        </CardTitle>
        <CardDescription className="text-center">
          Crie sua conta para começar a conversar sobre livros
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Seu nome"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Senha
            </label>
            <div className="relative">
              <Input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirmar Senha
            </label>
            <div className="relative">
              <Input
                {...register("confirmPassword")}
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? (
              <Loader className="animate-spin w-4 h-4" />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-center">
        Já tem uma conta?&nbsp;
        <Link
          href={LOGIN_PAGE}
          className="text-purple-600 font-semibold hover:underline"
        >
          Faça login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
