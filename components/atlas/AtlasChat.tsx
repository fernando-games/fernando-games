"use client";

import ProductCard from "../cards/ProductCard";
import { useEffect, useRef, useState } from "react";
import AtlasInput from "./AtlasInput";
import AtlasMessage from "./AtlasMessage";
import AtlasThinking from "./AtlasThinking";
import { AtlasEngine } from "@/atlas/core/AtlasEngine";
import { AtlasMessage as EngineMessage } from "@/atlas/context/AtlasTypes";
import PcBuildCard from "../cards/PcBuildCard";
import { useAtlas } from "@/atlas/context/AtlasContext";


const atlasEngine = new AtlasEngine();

type Message = {
  id: number;
  author: "atlas" | "user";
  text: string;

  recommendation?: {
    cpu: string;
    gpu: string;
    ram: number;
    storage: string;
    motherboard: string;
    powerSupply: string;
    explanation: string;
    upgrades: string[];
  };

  products?: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  }[];
};

type AtlasChatProps = {
  initialMessage?: string;
};

export default function AtlasChat({
  initialMessage,
}: AtlasChatProps) {
  const { setAtlas } = useAtlas();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: "atlas",
      text: "Olá, fundador! Eu sou o Atlas. Estou online e pronto para ajudar. 🚀",
    },
  ]);

  const [thinking, setThinking] = useState(false);
  const atlasStatus = thinking ? "🟡 Pensando..." : "🟢 Online";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  function handleSend(text: string) {
    const userMessage: Message = {
      id: Date.now(),
      author: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setThinking(true);
    const lower = text.toLowerCase();

    if (lower.includes("pc")) {
      setAtlas((prev) => ({
        ...prev,
        workspace: "pc",
        mission: "Montando PC Gamer",
      }));
    }

    if (lower.includes("jogo")) {
      setAtlas((prev) => ({
        ...prev,
        workspace: "games",
        mission: "Buscando jogos",
      }));
    }
    if (
      lower.includes("mouse") ||
      lower.includes("teclado") ||
      lower.includes("headset") ||
      lower.includes("monitor")
    ) {
      setAtlas((prev) => ({
        ...prev,
        workspace: "products",
        mission: "Buscando periféricos",
      }));
    }

    setTimeout(async () => {
      const response = await atlasEngine.process({
        role: "user",
        content: text,
      } as EngineMessage);

      const atlasMessage: Message = {
        id: Date.now() + 1,
        author: "atlas",
        text: response.message,
        recommendation: response.recommendation,
        products: response.products,
      };


      setMessages((prev) => [...prev, atlasMessage]);
      setThinking(false);
    }, 1000);
  }

  return (
    <div className="flex h-full min-h-0 flex-col rounded-2xl border border-cyan-500 bg-zinc-950 p-4">

      {/* Mensagens */}
      <div className="min-h-0 flex-1 overflow-y-auto pr-2">

        <div className="flex flex-col gap-3">

          {messages.map((message) => (
            <div key={message.id} className="space-y-3">

              <AtlasMessage
                author={message.author}
                text={message.text}
              />

              {message.recommendation && (
                <PcBuildCard
                  cpu={message.recommendation!.cpu}
                  gpu={message.recommendation!.gpu}
                  ram={message.recommendation!.ram}
                  storage={message.recommendation!.storage}
                  motherboard={message.recommendation!.motherboard}
                  powerSupply={message.recommendation!.powerSupply}
                  explanation={message.recommendation!.explanation}
                  upgrades={message.recommendation!.upgrades}
                />
              )}

              {message.products && (
                <div className="grid gap-4 mt-4">
                  {message.products?.map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      category={product.category}
                      price={product.price}
                      image={product.image}
                    />
                  ))}
                </div>
              )}

            </div>
          ))}

          {thinking && <AtlasThinking />}

          <div ref={messagesEndRef} />

        </div>

      </div>

      {/* Input */}
      <div className="mt-4 shrink-0 border-t border-cyan-500/20 pt-4">

        <AtlasInput onSend={handleSend} />

      </div>

    </div>
  );
}