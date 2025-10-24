import { Puzzle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-white mt-12 py-8 border-t-4 border-blue-200 shadow-blue-100/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-2 mb-4">
          <Puzzle className="w-6 h-6 text-blue-500" />
          <Puzzle className="w-6 h-6 text-yellow-500" />
          <Puzzle className="w-6 h-6 text-red-500" />
          <Puzzle className="w-6 h-6 text-green-500" />
        </div>
        <p className="text-gray-600 mb-2 font-medium">💙 Promovendo compreensão e aceitação do espectro autista</p>
        <p className="text-sm text-gray-500 mb-2">Esta ferramenta é educativa e não substitui avaliação profissional</p>
        <p className="text-xs text-gray-400">© 2025 Todos os direitos reservados por Jorge Hermes, Lucas, Ryan Santana, Gleisson Mendes, João Ricardo, Itália e Leandro</p>
      </div>
    </footer>
  );
}