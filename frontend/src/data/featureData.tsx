import {
  BrainCircuit,
  Sparkles,
  MessageSquare,
  BookOpen,
  Clock,
} from "lucide-react";

export const featureData = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-purple-600" />,
    title: "IA Especializada em Literatura",
    description:
      "Treinado com vasto conhecimento literário para oferecer respostas precisas e contextualizadas.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-purple-600" />,
    title: "Recomendações Personalizadas",
    description:
      "Sugestões de leitura baseadas em seus gostos, histórico e preferências literárias.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
    title: "Conversas Naturais",
    description:
      "Interface de chat intuitiva que permite diálogos fluidos e naturais sobre qualquer tema literário.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-purple-600" />,
    title: "Amplo Conhecimento",
    description:
      "Informações sobre milhares de livros, autores, gêneros e movimentos literários ao seu alcance.",
  },
  {
    icon: <Clock className="h-10 w-10 text-purple-600" />,
    title: "Disponível 24/7",
    description:
      "Seu assistente literário está sempre disponível, a qualquer hora do dia ou da noite.",
  },
  {
    icon: (
      <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
        <span className="text-xs font-bold text-white">AI</span>
      </div>
    ),
    title: "Experiência Personalizada",
    description:
      "Uma experiência única que evolui conforme você interage, aprendendo suas preferências.",
  },
];
