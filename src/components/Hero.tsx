import { Brain, Heart, Sparkles, Star, Users } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  bgColor: string;
}

export function Hero() {
  const features: FeatureCard[] = [
    {
      id: 'diversidade',
      title: 'Diversidade',
      icon: <Brain className="w-6 h-6" />,
      description: 'Respeitar e valorizar os diferentes estilos de aprendizagem, reconhecendo que cada estudante autista tem suas próprias forças e necessidades únicas.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50/80'
    },
    {
      id: 'rotina',
      title: 'Rotina visual',
      icon: <Star className="w-6 h-6" />,
      description: 'Criar sequências visuais claras e previsíveis para todas as atividades do dia, ajudando os estudantes a se sentirem seguros e compreendidos.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50/80'
    },
    {
      id: 'sensoriais',
      title: 'Acomodações sensoriais',
      icon: <Heart className="w-6 h-6" />,
      description: 'Fornecer ambientes com controle de estímulos sensoriais, incluindo opções como fones de ouvido, iluminação regulável e espaços de calma.',
      color: 'text-green-600',
      bgColor: 'bg-green-50/80'
    },
    {
      id: 'comunicacao',
      title: 'Comunicação clara',
      icon: <Users className="w-6 h-6" />,
      description: 'Usar linguagem simples, direta e visual, com pictogramas e agendas ilustradas para facilitar a compreensão e expressão.',
      color: 'text-red-600',
      bgColor: 'bg-red-50/80'
    }
  ];

  return (
    <section className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-blue-200 shadow-blue-100/50">
        <div>
          <h2 className="heading-display text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
            <Sparkles className="inline-block w-8 h-8 text-yellow-500 mr-2" />
            IAEI: IA para Educação Inclusiva
          </h2>
          <p className="text-gray-600 mb-8 text-justify max-w-3xl mx-auto leading-relaxed">
            Use inteligências artificiais para fortalecer práticas inclusivas. O IAEI traz um checklist de ferramentas e métodos de IA que você já usa (ou pode usar) para apoiar estudantes, inclusive autistas.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className={`${feature.bgColor} rounded-xl p-6 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg backdrop-blur-sm`}>
                <div className="flex items-start gap-4">
                  <div className={`${feature.color} ${feature.bgColor} rounded-lg p-3 border border-gray-200/50 shadow-sm`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${feature.color}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}