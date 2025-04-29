"use client";

import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const useAudio = () => {
  const [error, setError] = useState<string | null>(null);

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setError(
        "Seu navegador não suporta reconhecimento de voz, utilize o Chrome.",
      );
    }
  }, [browserSupportsSpeechRecognition]);

  const startListening = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({
        continuous: true,
        language: "pt-BR",
      }).catch((err: { message: string }) => {
        setError("Erro ao iniciar o microfone: " + err.message);
      });
    }
  };

  const stopListening = () => {
    SpeechRecognition.stopListening().catch((err: { message: string }) => {
      setError("Erro ao parar o microfone: " + err.message);
    });
  };

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    error,
    resetTranscript,
  };
};
