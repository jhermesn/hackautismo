import { Award, Layers, MessageSquare } from 'lucide-react';

export function TopTools() {
  return (
    <section className="relative z-10 container mx-auto px-4 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-blue-200 shadow-blue-100/50">
        <h2 className="heading-display text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Seleção das 3 Ferramentas de IA para Educação Inclusiva
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-green-50">
                <th className="px-4 py-3 font-bold">Ferramenta</th>
                <th className="px-4 py-3 font-bold">Finalidade Principal</th>
                <th className="px-4 py-3 font-bold">Principais Pontos Fortes</th>
                <th className="px-4 py-3 font-bold">Público-Alvo e Aplicações Educacionais Práticas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 align-top font-semibold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Livox
                </td>
                <td className="px-4 py-4 align-top">Comunicação Alternativa e Aumentativa (CAA)</td>
                <td className="px-4 py-4 align-top">
                  Promove acessibilidade e autonomia a pessoas com necessidades especiais. Facilita a alfabetização e o desenvolvimento cognitivo. Possui ajuste inteligente de toques imperfeitos na tela e reconhecimento internacional (prêmio da ONU).
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="font-semibold">Público-Alvo:</span> Pessoas com diversas deficiências, incluindo motoras, cognitivas e visuais. Foco na comunicação e alfabetização.
                  <br />
                  <span className="font-semibold">Aplicações:</span> Auxilia professores e terapeutas no processo de inclusão em escolas e associações (APAEs). Adapta o conteúdo às habilidades e limitações de cada usuário.
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 align-top font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-green-600" />
                  Sistemas de Tutoria Inteligente (STI) / Aprendizagem Adaptativa
                </td>
                <td className="px-4 py-4 align-top">Personalização do Ensino e Feedback em Tempo Real</td>
                <td className="px-4 py-4 align-top">
                  Demonstrou melhoria significativa no desempenho e no engajamento dos alunos. Adapta o conteúdo e as atividades com base no desempenho individual. Promove um aprendizado mais autônomo e eficiente.
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="font-semibold">Público-Alvo:</span> Alunos com Transtorno do Déficit de Atenção com Hiperatividade (TDAH). Estudantes com necessidades individuais e dificuldades de aprendizado.
                  <br />
                  <span className="font-semibold">Aplicações:</span> Monitora e adapta o aprendizado. Fornece orientações personalizadas e feedback imediato.
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 align-top font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-600" />
                  CapacitaBOT
                </td>
                <td className="px-4 py-4 align-top">Desenvolvimento de Habilidades Sociais</td>
                <td className="px-4 py-4 align-top">
                  Oferece oportunidades personalizadas e inclusivas de aprendizagem e interação social. É um recurso pedagógico e inclusivo para praticar habilidades sociais.
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="font-semibold">Público-Alvo:</span> Pessoas com Deficiência Intelectual (DI).
                  <br />
                  <span className="font-semibold">Aplicações:</span> Aplicação móvel (chatbot) utilizada como recurso pedagógico para desenvolver e praticar habilidades sociais. Foi idealizado para auxiliar nos desafios de interação social enfrentados durante a pandemia.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}