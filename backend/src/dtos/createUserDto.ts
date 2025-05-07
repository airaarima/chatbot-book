import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "O nome não pode estar vazio" })
  name: string;

  @IsEmail({}, { message: "E-mail inválido" })
  email: string;

  @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres" })
  @Matches(/(?=.*[0-9])/, { message: "A senha deve conter ao menos um número" })
  @Matches(/(?=.*[A-Z])/, {
    message: "A senha deve conter ao menos uma letra maiúscula",
  })
  @Matches(/(?=.*[a-z])/, {
    message: "A senha deve conter ao menos uma letra minúscula",
  })
  @Matches(/(?=.*\W)/, {
    message: "A senha deve conter ao menos um caracter especial",
  })
  password: string;
}
