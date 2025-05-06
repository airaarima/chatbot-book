import { useState } from "react";
import { IRegisterPayload } from "./types";
import endpoints from "../../api/endpoints";
import api from "../../api";
import { messages } from "@/shared/constants/messages";

const useApiRegister = () => {
  const [loading, setLoading] = useState(false);

  const mutateRegister = async (
    payload: IRegisterPayload,
    onError: (message: string) => void,
    onSuccess: () => void,
  ) => {
    setLoading(true);

    try {
      const response = await api.post(endpoints.register.user(), payload);
      if (response.status === 201 || response.status === 200) {
        onSuccess();
        return true;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let message = messages.error.default;
      if (!err.response) {
        message = messages.error.network;
      } else if (err.response?.status === 409) {
        message = messages.error.emailInUse;
      }
      onError(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { mutateRegister, loading };
};

export default useApiRegister;
