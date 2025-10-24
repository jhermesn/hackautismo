import { Share2, Star } from 'lucide-react';
import { starsFromScore } from '../utils/score';
import { shareMessage, shareTo } from '../utils/share';

interface ResultProps {
  score: number;
  maxScore: number;
  title: string;
  message: string;
  emoji: string;
  onReset: () => void;
}

export function Result({ score, maxScore, title, message, emoji, onReset }: ResultProps) {
  const stars = starsFromScore(score, maxScore);
  return (
    <section className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-green-200 shadow-green-100/50">
        <div className="text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h3 className="heading-display text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="mb-6">
            <div className="text-5xl font-bold text-gray-800 mb-2">{score} pontos</div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-8 h-8 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">{message}</p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5 text-blue-600" />
              Compartilhe sua conscientização
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => shareTo('twitter', shareMessage(score), window.location.href)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-200/50"
              >
                Twitter/X
              </button>
              <button
                onClick={() => shareTo('facebook', shareMessage(score), window.location.href)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-200/50"
              >
                Facebook
              </button>
              <button
                onClick={() => shareTo('whatsapp', shareMessage(score), window.location.href)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-green-200/50"
              >
                WhatsApp
              </button>
              <button
                onClick={() => shareTo('linkedin', shareMessage(score), window.location.href)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-200/50"
              >
                LinkedIn
              </button>
            </div>
          </div>
          <button onClick={onReset} className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium transition-all hover:shadow-lg">
            Refazer Checklist
          </button>
        </div>
      </div>
    </section>
  );
}