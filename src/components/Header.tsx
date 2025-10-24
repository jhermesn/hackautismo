export function Header() {
  return (
    <header className="relative z-10 bg-white/80 backdrop-blur shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-4">
          <img src="logo.jpg" alt="IAEI" className="w-10 h-10 rounded-md shadow-sm border border-gray-200" />
          <h1 className="heading-display tracking-tight text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            IAEI - Inteligências Artificiais para Educação Inclusiva
          </h1>
        </div>
        <p className="text-justify mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Inclui um checklist de ferramentas e métodos de IA que você já usa para educação inclusiva.
        </p>
      </div>
    </header>
  );
}