import { messages } from "@/shared/constants/messages";
import api from "../../api";
import endpoints from "../../api/endpoints";
import { IMessage, ISendMessage } from "./types";
import { useState } from "react";

const useApiChatBook = () => {
  const [loading, setLoading] = useState(false);

  const mutateChat = async (
    payload: ISendMessage,
    onError: (message: string) => void,
  ) => {
    setLoading(true);

    try {
      const response = await api.post(endpoints.groq.ask(), payload);

      const data = response.data;

      if (response.status !== 200 || !data.resposta) {
        onError(messages.error.default);
        return;
      }

      const aiMessage: IMessage = {
        id: (Date.now() + 1).toString(),
        content: data.resposta,
        role: "assistant",
      };

      return aiMessage;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let message = messages.error.default;

      if (!err.response) {
        message = messages.error.network;
      } else if (err.response?.status === 401) {
        message = messages.error.invalidCredentials;
      }

      onError(message);
    } finally {
      setLoading(false);
    }
  };

  return { mutateChat, loading };
};

export default useApiChatBook;
