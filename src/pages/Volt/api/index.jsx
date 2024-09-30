import { GoogleGenerativeAI } from "@google/generative-ai";

export const callGeminiApi = async (prompt) => {
  const geminiToken = import.meta.env.VITE_GEMINI_TOKEN;
  const genAI = new GoogleGenerativeAI(geminiToken);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(
    "(Você se chama VoltAi, auxilia nossa plataforma de Fórmula E chamada Eway, com foco em notícias recentes e verídicas, criada por Felipe Oliveira (@ulipese), Arthur Pagani (@acpagani), Diogo Leles (@diogofranciulli) e Ryan Brito (@ryanbritodev), se apresente como tal e responda a seguinte pergunta do usuário): " +
      prompt
  );
  const response = result.response;
  const text = response.text();

  return text;
};
