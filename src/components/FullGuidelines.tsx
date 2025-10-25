import { BookOpen, Shield, Cpu, GraduationCap, ClipboardCheck, Users } from 'lucide-react';

export function FullGuidelines() {
  return (
    <section className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-200 shadow-purple-100/50">
        <h2 className="heading-display text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Checklist de Boas Práticas para uma Escola Mais Inclusiva com Apoio da IA
        </h2>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-indigo-700">
              <BookOpen className="w-6 h-6" />
              I. Dimensão: Planejamento Institucional e Políticas Públicas
            </h3>
            <p className="mb-3">O sucesso da inclusão mediada pela IA depende de investimentos estruturais consistentes e de políticas que garantam equidade de acesso.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1. Garantia de Inclusão Efetiva:</strong> A escola deve promover uma cultura inclusiva que acolha, compreenda e potencialize a neurodiversidade, reconhecendo que a tecnologia é um meio e não um fim.</li>
              <li><strong>2. Alinhamento Legal e Ético:</strong> A implementação da IA deve estar alinhada com marcos legais como a Lei Brasileira de Inclusão (LBI) e a Lei Geral de Proteção de Dados (LGPD), e com diretrizes internacionais (ONU, UNESCO).</li>
              <li><strong>3. Financiamento e Sustentabilidade:</strong> É crucial promover políticas públicas consistentes e investimentos estruturais para custear a aquisição de tecnologias. O alto custo para aquisição de tecnologias é um desafio significativo que restringe o acesso.</li>
              <li><strong>4. Transparência na Tomada de Decisão:</strong> Estabelecer diretrizes claras sobre o uso ético da IA e garantir a transparência dos algoritmos. A transparência nas decisões da IA é fundamental para sua aceitação e sucesso.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-blue-700">
              <GraduationCap className="w-6 h-6" />
              II. Dimensão: Formação Docente (Capacitação e Letramento Crítico)
            </h3>
            <p className="mb-3">A capacitação adequada e contínua dos educadores é inadiável e essencial para o uso efetivo e ético da IA.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>5. Treinamento Contínuo e Prático:</strong> Oferecer programas de formação contínua que combinem teoria e prática, permitindo que os docentes experimentem as ferramentas de IA e TA em contextos reais.</li>
              <li><strong>6. Foco na Neurodiversidade:</strong> O treinamento deve aprofundar a compreensão da neurodiversidade (TEA, TDAH, Dislexia, etc.) e suas manifestações na aprendizagem, para que os educadores saibam identificar necessidades e usar a IA como suporte efetivo.</li>
              <li><strong>7. Letramento Crítico em IA:</strong> Desenvolver o letramento em IA (em dados, algoritmos e modelos) para que professores e alunos a utilizem de forma crítica, evitando a dependência acrítica e reconhecendo a agência intelectual humana sobre os resultados.</li>
              <li><strong>8. Curadoria Digital:</strong> Capacitar o professor na curadoria digital, que é a seleção, intercalação e organização de recursos digitais, incluindo os gerados por IA, para garantir a relevância e qualidade do material.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-green-700">
              <Shield className="w-6 h-6" />
              III. Dimensão: Infraestrutura Tecnológica e Acessibilidade
            </h3>
            <p className="mb-3">É imperativo garantir que as ferramentas sejam acessíveis e que as escolas possuam a base tecnológica necessária.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>9. Equidade no Acesso:</strong> Superar a desigualdade de acesso (divisão digital) investindo em infraestrutura básica, conectividade e dispositivos em todas as escolas, especialmente nas periféricas, onde o acesso é limitado.</li>
              <li><strong>10. Tecnologias Assistivas (TA) com IA:</strong> Promover a integração da IA com a TA, como o uso de softwares de leitura (Natural Reader, Kurzweil 3000) e dispositivos adaptativos (Livox, XULIA), para mitigar barreiras visuais, motoras, de fala e cognitivas.</li>
              <li><strong>11. Acessibilidade Digital:</strong> Assegurar que as tecnologias educacionais sejam totalmente acessíveis e inclusivas, com interfaces intuitivas, legendas automáticas precisas e recursos para diferentes perfis de deficiência.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-rose-700">
              <Cpu className="w-6 h-6" />
              IV. Dimensão: Práticas Pedagógicas e Metodologias
            </h3>
            <p className="mb-3">A IA deve ser utilizada para personalizar, engajar e desenvolver a autonomia do estudante neurodivergente.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>12. Personalização do Aprendizado:</strong> Utilizar sistemas de IA, como tutores inteligentes (STI) e plataformas adaptativas, para monitorar o desempenho, adaptar o conteúdo, o ritmo e o nível de dificuldade às necessidades e interesses individuais (ex: TEA e TDAH).</li>
              <li><strong>13. Conteúdo Multimodal e Visual:</strong> Criar materiais didáticos multimodais (vídeos, ilustrações, animações) usando ferramentas de IAGen (LeonardoAI, CapCut, Gamma) para ilustrar conceitos complexos ou abstratos, beneficiando alunos com estilo de aprendizado visual ou dificuldades cognitivas (como TEA).</li>
              <li><strong>14. Apoio às Funções Executivas:</strong> Empregar IAs generativas (ChatGPT, Gemini) e assistentes virtuais (Google Assistant) como andaimes cognitivos e organizadores externos para auxiliar alunos com dificuldades em funções executivas (TDAH, dislexia) na organização de ideias, roteiros e agenda.</li>
              <li><strong>15. Foco em Comunicação e Habilidades Sociais:</strong> Utilizar aplicativos baseados em IA (Livox, Matraquinha) e chatbots (CapacitaBOT) para desenvolver habilidades sociais e de comunicação, permitindo a expressão de pensamentos, desejos e emoções, especialmente para alunos com TEA e comprometimento na fala.</li>
              <li><strong>16. Metodologias Ativas e Lúdicas:</strong> Integrar a IA com a gamificação e metodologias ativas (como Project Based Learning – PBL) para aumentar o engajamento, a motivação e a autoria dos alunos, transformando o consumo passivo de tecnologia em criação ativa.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-yellow-700">
              <ClipboardCheck className="w-6 h-6" />
              V. Dimensão: Avaliação e Monitoramento
            </h3>
            <p className="mb-3">A IA deve apoiar a avaliação contínua e a intervenção precoce, sempre valorizando o processo de aprendizado.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>17. Identificação Precoce de Dificuldades:</strong> Utilizar modelos preditivos de aprendizagem (como CogniSigns ou sistemas de learning analytics) para identificar padrões e detectar precocemente as necessidades especiais e dificuldades cognitivas, permitindo intervenções mais ágeis.</li>
              <li><strong>18. Avaliação Personalizada e Inclusiva:</strong> Empregar IA para personalizar testes e avaliações, ajustando o formato das perguntas ou permitindo respostas alternativas (áudio, desenho) para garantir que alunos com necessidades específicas possam demonstrar seu conhecimento de forma justa.</li>
              <li><strong>19. Valorização do Processo:</strong> Repensar a avaliação para que ela valorize o processo de aprendizagem e o uso eficaz das ferramentas de IA, em vez de focar apenas no produto final, para mitigar o risco de aprendizagem superficial ou dependência acrítica.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-sky-700">
              <Users className="w-6 h-6" />
              VI. Dimensão: Colaboração e Vínculos Humanos
            </h3>
            <p className="mb-3">A IA deve complementar, e não substituir, a interação humana, priorizando a criação de vínculos afetivos e redes de suporte.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>20. Mediação Humana e Afetiva:</strong> Assegurar que a IA seja uma ferramenta de mediação, priorizando sempre a interação face a face, a mediação afetiva e o julgamento humano para garantir a sensibilidade e o acolhimento.</li>
              <li><strong>21. Parceria Escola-Família-Especialistas:</strong> Promover a colaboração e o diálogo franco e contínuo entre professores, famílias e profissionais de saúde/terapia para criar Planos Educacionais Individualizados (PEIs) e assegurar um ambiente de apoio consistente.</li>
              <li><strong>22. Redes de Boas Práticas:</strong> Estabelecer redes colaborativas (grupos de discussão, seminários) onde os educadores possam compartilhar sucessos, desafios e inovações no uso da IA acessível.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}