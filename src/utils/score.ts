export const getScoreMessage = (score: number) => {
  if (score <= 4) {
    return {
      title: 'Início da preparação',
      message:
        'Você está começando a organizar sua sala para receber um aluno autista. Pequenos passos fazem grande diferença!',
      emoji: '🌱',
    } as const;
  } else if (score <= 8) {
    return {
      title: 'Em preparação',
      message:
        'Boas práticas já estão em andamento. Continue personalizando sua abordagem e estrutura da sala.',
      emoji: '🌟',
    } as const;
  } else if (score <= 12) {
    return {
      title: 'Sala em evolução',
      message:
        'Sua sala está cada vez mais inclusiva. Ajustes consistentes fortalecem a experiência do estudante.',
      emoji: '💙',
    } as const;
  }
  return {
    title: 'Sala inclusiva inspiradora',
    message:
      'Excelente! Você mostra alto nível de preparo para acolher e apoiar um aluno autista.',
    emoji: '🌈',
  } as const;
};

export const starsFromScore = (score: number, max: number) => {
  if (max <= 0) return 0;
  const ratio = Math.max(0, Math.min(1, score / max));
  return Math.round(ratio * 5);
};
