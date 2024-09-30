import { Form } from "./components/Form";
import { Interaction } from "./components/Interaction";
import { useState } from "react";

export const Volt = () => {
  const [messages, setMessages] = useState([
    { interactor: "VoltAi", text: "Olá, como posso te ajudar hoje?" },
  ]);

  return (
    <main className="w-full h-full flex flex-col gap-[2em] relative">
      <h1 className="text-6xl md:text-5xl font-bold">Volt</h1>
      <section className="flex flex-col w-full h-[70%] rounded-lg gap-[1em] justify-baseline overflow-y-auto scrollbar">
        {messages.map((message, index) => {
          return (
            <Interaction
              key={`voltChat-${index}`}
              interactor={message.interactor ? message.interactor : "VoltAi"}
              text={message.text}
            />
          );
        })}
      </section>
      <Form setMessages={setMessages} messages={messages} />
    </main>
  );
};
