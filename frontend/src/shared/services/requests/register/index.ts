import { useState } from "react";
import { IRegisterPayload } from "./types";
import endpoints from "../../api/endpoints";
import api from "../../api";

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
        setError("Erro ao registrar usuário.");
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro inesperado.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { mutateRegister, loading, error };
};

export default useApiRegister;
