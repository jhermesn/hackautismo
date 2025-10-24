import { Check, Award } from 'lucide-react';
import type { ChecklistItem } from '../types/checklist';

interface ChecklistProps {
  items: ChecklistItem[];
  checked: Set<number>;
  onToggle: (item: ChecklistItem) => void;
  totalScore: number;
  onShowResult: () => void;
}

export function Checklist({ items, checked, onToggle, totalScore, onShowResult }: ChecklistProps) {
  return (
    <section className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-yellow-200 shadow-yellow-100/50">
        <h2 className="heading-display text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          <Award className="inline-block w-8 h-8 text-yellow-500 mr-2" />
          Checklist da sala inclusiva
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Itens abaixo são placeholders para você personalizar conforme sua realidade escolar.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                checked.has(item.id)
                  ? 'bg-gradient-to-r from-blue-100 to-green-100 border-blue-400 shadow-blue-100/50'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
              onClick={() => onToggle(item)}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                    checked.has(item.id) ? 'bg-blue-500 border-blue-500 shadow-sm' : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {checked.has(item.id) && <Check className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium leading-relaxed">{item.text}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">+{item.points} ponto(s)</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="mb-4 text-lg font-medium text-gray-700">
            Pontuação Atual: <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{totalScore}</span> pontos
          </div>
          <button
            onClick={onShowResult}
            disabled={checked.size === 0}
            className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 ${
              checked.size === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 hover:shadow-xl hover:shadow-blue-200/50'
            }`}
          >
            Ver Meu Resultado
          </button>
        </div>
      </div>
    </section>
  );
}