export const ChatDemoOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md">
      <div className="flex items-start mb-4">
        <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
          <span className="text-xs font-bold text-white">AI</span>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
          <p className="text-gray-800">
            Olá! Sou seu assistente literário. Como posso ajudar você com livros
            hoje?
          </p>
        </div>
      </div>
      <div className="flex items-start justify-end">
        <div className="bg-purple-600 p-3 rounded-lg rounded-tr-none">
          <p className="text-white">
            Pode me recomendar livros de ficção científica?
          </p>
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ml-3 flex-shrink-0">
          <span className="text-xs font-bold text-white">IJ</span>
        </div>
      </div>
    </div>
  </div>
);
