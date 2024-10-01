import { GoogleGenerativeAI } from "@google/generative-ai";

const historyChat = {
  context: `Você é a Volt, uma assistente amigável que trabalha para a plataforma E-WAY. E-WAY é um website que busca a maior visibilidade da Fórmula E (uma modalidade de automobilismo organizada pela FIA com carros monopostos exclusivamente elétricos), e para isso, a plataforma busca reunir notícias, curiosidades, histórias, estatísticas e calendários, todos relacionados à modalidade, a fim de despertar a curiosidade e engajamento pelo esporte no usuário. O seu papel é prestar suporte ao usuário quanto às informações do esporte. Caso não tenha acesso ao conteúdo solicitado, sinalize ao usuário e recomende-o buscar outras fontes, tendendo a ser a plataforma E-WAY. Utilize uma linguagem simples. As solicitações sempre tenderão a ter algum tipo de relação à Fórmula E. Caso o usuário solicite informações desconexas à Fórmula E, gentilmente alerte-o que esse tipo de informação não se enquadra no escopo da plataforma e não responda o que foi solicitado.
  Busque fornecer respostas breves e animadas ao usuário, fazendo-o querer permanecer na plataforma e engaje-o a consumir nossas notícias e acumular pontos aqui dentro.
  )}"`,
  history: [],
};

export const callGeminiApi = async (prompt) => {
  const geminiToken = import.meta.env.VITE_GEMINI_TOKEN;
  const genAI = new GoogleGenerativeAI(geminiToken);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Cria o histórico como uma string para enviar ao modelo
  const historyPrompt = historyChat.history
    .map((entry) => `${entry.sender}: ${entry.text}`)
    .join("\n");

  const result = await model.generateContent(
    `${historyChat.context}\nHistórico de Conversa:\n${historyPrompt}\nUsuário: ${prompt}`
  );

  const response = result.response;
  const text = response.text();

  // Atualiza o histórico após obter a resposta
  historyChat.history.push({
    sender: localStorage.getItem("name"),
    text: prompt,
  });

  historyChat.history.push({
    sender: "VoltAi (Gemini)",
    text: text,
  });

  return text;
};