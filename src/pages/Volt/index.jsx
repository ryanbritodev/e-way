import { Form } from "./components/Form";
import { Interaction } from "./components/Interaction";
import { useState } from "react";

export const Volt = () => {
  const [messages, setMessages] = useState([
    { interactor: "VoltAI", text: "Olá, como posso te ajudar hoje? ⚡" },
  ]);
  const [isTyping, setIsTyping] = useState(false); // State de digitação da VoltAI

  return (
    <main className="w-full h-full flex flex-col gap-[2em] relative">
      <h1 className="text-6xl md:text-5xl font-bold">Volt</h1>
      <section className="flex flex-col w-full h-[70%] rounded-lg gap-[1em] justify-baseline overflow-y-auto scrollbar">
        {messages.map((message, index) => {
          return (
            <Interaction
              key={`voltChat-${index}`}
              interactor={message.interactor ? message.interactor : "VoltAI"}
              text={message.text}
              isTyping={isTyping && message.interactor === "VoltAI" && index === messages.length - 1} // Conferindo se a Volt ainda está digitando
            />
          );
        })}
      </section>
      <Form setMessages={setMessages} messages={messages} setIsTyping={setIsTyping} />
    </main>
  );
};
