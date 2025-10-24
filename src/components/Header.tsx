import { Puzzle } from 'lucide-react';

export function Header() {
  return (
    <header className="relative z-10 bg-white/80 backdrop-blur shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2">
            <Puzzle className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="heading-display tracking-tight text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sua sala de aula é inclusiva?
          </h1>
        </div>
        <p className="text-justify mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Um guia prático para educadores avaliarem e melhorarem o preparo da sala para acolher estudantes autistas.
        </p>
      </div>
    </header>
  );
}