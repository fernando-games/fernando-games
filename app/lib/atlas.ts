export function atlasReply(message: string): string {
  const text = message.toLowerCase().trim();

  const responses = [
    {
      keywords: ["oi", "olá", "ola"],
      answer: "Olá, fundador! 🚀 Como posso ajudar hoje?",
    },
    {
      keywords: ["promo", "promoção", "promoções"],
      answer: "🔥 Temos várias promoções esperando por você!",
    },
    {
      keywords: ["jogo", "jogos"],
      answer: "🎮 Posso mostrar os jogos mais vendidos da Fernando.Games.",
    },
    {
      keywords: ["pc", "computador", "gamer"],
      answer: "🖥️ Vamos montar um PC Gamer perfeito para você.",
    },
    {
      keywords: ["mouse", "teclado", "headset", "periférico"],
      answer: "⌨️ Temos diversos periféricos para elevar seu setup.",
    },
    {
      keywords: ["atlas"],
      answer: "🤖 Eu sou o Atlas, seu parceiro dentro da Fernando.Games!",
    },
  ];

  for (const response of responses) {
    if (response.keywords.some((word) => text.includes(word))) {
      return response.answer;
    }
  }

  return "🤖 Ainda estou aprendendo. Em breve responderei de forma muito mais inteligente!";
}