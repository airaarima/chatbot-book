import { useState } from "react";
import { IRegisterPayload } from "./types";
import endpoints from "../../api/endpoints";
import api from "../../api";
import { messages } from "@/shared/constants/messages";

const useApiRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutateRegister = async (payload: IRegisterPayload) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.post(endpoints.register.user(), payload);

      if (response.status === 201 || response.status === 200) {
        return true;
      } else {
        const message = "Erro ao registrar usuário.";
        setError(message);
        return message;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let message = messages.error.default;

      // TODO: alterar isso em breve, depende da resposta que vier do back
      if (!err.response) {
        message = messages.error.network;
      } else if (err.response.status === 409) {
        message = messages.error.emailInUse;
      }

      setError(message);
      return message;
    } finally {
      setLoading(false);
    }
  };

  return { mutateRegister, loading, error };
};

export default useApiRegister;
