import React, { useState, useRef, useEffect } from "react";
import { Swords, Scale, Cpu } from "lucide-react";
import { UserMessage } from "../components/UserMessage";
import { ArenaResponse } from "../components/ArenaResponse";
import { ChatInterface } from "../components/ChatInterface";
import axios from "axios";
const MessageItem = ({ data }) => {
  return (
    <div className="mb-14 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
      <UserMessage problem={data.problem} />
      <ArenaResponse data={data} />
    </div>
  );
};

const API_URL =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/invoke"
    : "https://collaborative-llm-evaluator-backend.onrender.com/invoke";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const response = await axios.post(API_URL, {
        input: inputValue
      });
      const data = response.data;
      // console.log(data);

      const newMessage = {
        id: Date.now().toString(),
        problem: inputValue,
        ...data.result
      };
      
      setMessages((prev) => [...prev, newMessage]);
      setInputValue("");
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0b0f17] text-slate-250 font-sans selection:bg-indigo-600/30 selection:text-indigo-200 overflow-hidden relative">

      {/* Header */}
      <header className="flex-none flex items-center justify-between px-8 py-4 bg-[#0b0f17] border-b border-slate-800 z-20 sticky top-0">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-indigo-400 flex items-center justify-center border border-slate-800">
            <Swords className="w-5 h-5 text-indigo-500" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight text-white">BATTLE ARENA</h1>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Neural Evaluation Engine</span>
          </div>
        </div>
        <div className="flex items-center justify-center px-3.5 py-1 rounded-full bg-slate-900/60 border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">System Online</span>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-grow overflow-y-auto px-4 py-8 md:px-8 z-10 scrollbar-hide">
        <div className="max-w-[95%] 2xl:max-w-[90rem] mx-auto w-full relative">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[70vh] text-center px-4 animate-[fadeIn_0.5s_ease-out]">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 shadow-md mb-6">
                <Cpu className="w-10 h-10 text-indigo-500" />
              </div>
              <h2 className="text-3xl font-extrabold mb-3 tracking-tight text-white">WELCOME TO AI BATTLE ARENA</h2>
              <p className="text-slate-400 max-w-lg text-base leading-relaxed bg-slate-900/30 p-6 rounded-xl border border-slate-800/80">
                Enter your commands here. Our system will deploy dual models to create competing versions and evaluate them via a structured grading and ranking system.
              </p>
            </div>
          ) : (
            <div className="pb-12 px-4 md:px-10">
              {messages.map((msg) => (
                <MessageItem key={msg.id} data={msg} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      <ChatInterface 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        handleSend={handleSend} 
      />

      {/* Tailwind & Custom Styling */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Clean professional styling for markdown pre code */
        .prose-invert pre code {
          background-color: #0f172a !important; /* slate-900 */
          border: 1px solid #334155 !important; /* slate-700 */
          border-radius: 8px;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
