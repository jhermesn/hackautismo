export function Footer() {
  return (
    <footer className="relative z-10 bg-white mt-12 py-8 border-t-4 border-blue-200 shadow-blue-100/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <img src="/logo.jpg" alt="IAEI" className="w-10 h-10 rounded-md shadow-sm border border-gray-200" />
        </div>
        <p className="text-gray-600 mb-2 font-medium">IAEI - Inteligências Artificiais para Educação Inclusiva</p>
        <p className="text-sm text-gray-500 mb-2">Checklist de ferramentas e métodos de IA para práticas inclusivas</p>
        <p className="text-xs text-gray-400">© 2025 Todos os direitos reservados por Jorge Hermes, Lucas, Ryan Santana, Gleisson Mendes, João Ricardo, Itália e Leandro</p>
      </div>
    </footer>
  );
}