export const shareMessage = (score: number) => {
  if (score <= 1) {
    return `Estou iniciando minha preparação! 🌱 Avaliei meu preparo para receber um aluno autista e alcancei ${score} ponto. Cada passo conta para uma escola mais inclusiva. #Inclusão #Autismo`;
  } else if (score <= 4) {
    return `Estou iniciando minha preparação! 🌱 Avaliei meu preparo para receber um aluno autista e alcancei ${score} pontos. Cada passo conta para uma escola mais inclusiva. #Inclusão #Autismo`;
  } else if (score <= 8) {
    return `Minha sala está em preparação! 🌟 Já adotei boas práticas para acolher um aluno autista e alcancei ${score} pontos. Vou continuar evoluindo. #Inclusão #Autismo`;
  } else if (score <= 12) {
    return `Minha sala está em evolução! 💙 Estou fortalecendo a inclusão e alcancei ${score} pontos ao avaliar meu preparo para receber um aluno autista. #Inclusão #Autismo`;
  }
  return `Sala inclusiva inspiradora! 🌈 Alcancei ${score} pontos avaliando meu preparo para acolher um aluno autista. Vamos ampliar a conscientização! #Inclusão #Autismo`;
};

export const shareTo = (platform: string, message: string, url: string) => {
  switch (platform) {
    case 'twitter':
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
        '_blank'
      );
      break;
    case 'facebook':
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        '_blank'
      );
      break;
    case 'whatsapp':
      window.open(`https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`, '_blank');
      break;
    case 'linkedin':
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        '_blank'
      );
      break;
  }
};
