import { messages } from "@/shared/constants/messages";
import api from "../../api";
import endpoints from "../../api/endpoints";
import { ILoginPayload } from "./types";
import { useState } from "react";

const useApiLogin = () => {
  const [loading, setLoading] = useState(false);

  const mutateLogin = async (
    payload: ILoginPayload,
    onError: (message: string) => void,
    onSuccess: () => void,
  ) => {
    setLoading(true);

    try {
      const response = await api.post(endpoints.login.user(), payload);

      if (response.status === 200 || response.status === 201) {
        onSuccess();
        return true;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let message = messages.error.default;

      if (!err.response) {
        message = messages.error.network;
      } else if (err.response?.status === 401) {
        message = messages.error.invalidCredentials;
      }

      onError(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { mutateLogin, loading };
};

export default useApiLogin;
