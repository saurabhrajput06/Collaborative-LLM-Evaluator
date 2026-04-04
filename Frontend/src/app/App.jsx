import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Scale, Cpu } from "lucide-react";
import { UserMessage } from "../components/UserMessage";
import { ArenaResponse } from "../components/ArenaResponse";
import { ChatInterface } from "../components/ChatInterface";

// Sample dummy data to emulate an AI response
const generateDummyResponse = (problem) => {
  return {
    id: Date.now().toString(),
    problem: problem,
    solution_1: `Here is the first solution. It is straightforward and easy to understand.\n\n\`\`\`javascript\nfunction greet(name) {\n  console.log("Hello, " + name);\n}\ngreet("World");\n\`\`\`\n\nThis uses a basic string concatenation approach.`,
    solution_2: `Here is the second solution, which is slightly more modern.\n\n\`\`\`javascript\nconst greet = (name) => {\n  console.log(\`Hello, \${name}\`);\n}\ngreet("World");\n\`\`\`\n\nThis uses an arrow function and template literals.`,
    judge: {
      solution_1_score: 8,
      solution_2_score: 10,
      solution_1_reasoning: "Good, but uses older syntax which feels a bit dated.",
      solution_2_reasoning: "Excellent use of modern ES6+ syntax, making it cleaner and more idiomatic."
    }
  };
};

const MessageItem = ({ data }) => {
  return (
    <div className="mb-14 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
      <UserMessage problem={data.problem} />
      <ArenaResponse data={data} />
    </div>
  );
};

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

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // We add the Dummy Data directly to state.
    // In a real application, we would send the problem to a backend endpoint.
    const newMessage = generateDummyResponse(inputValue);
    
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-screen bg-[#05050b] text-slate-200 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-hidden relative">
      
      {/* Futuristic Background Accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="flex-none flex items-center justify-between px-8 py-5 bg-[#05050b]/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-20 sticky top-0">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-10 h-10 rounded-lg bg-slate-950 text-white flex items-center justify-center border border-white/10">
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-300">BATTLE ARENA</h1>
            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400">Neural Evaluation Engine</span>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] mr-2 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">System Online</span>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-grow overflow-y-auto px-4 py-8 md:px-8 z-10 scrollbar-hide">
        <div className="max-w-[95%] 2xl:max-w-[90rem] mx-auto w-full relative">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[70vh] text-center px-4 animate-[fadeIn_0.8s_ease-out]">
              <div className="relative mb-8 group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition duration-700"></div>
                <div className="w-28 h-28 rounded-full bg-slate-950/80 flex items-center justify-center border border-white/10 shadow-2xl relative z-10 backdrop-blur-sm">
                  <Cpu className="w-12 h-12 text-indigo-400" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">INITIATE SEQUENCE</h2>
              <p className="text-slate-400/80 max-w-lg text-lg leading-relaxed font-light backdrop-blur-sm bg-slate-900/30 p-6 rounded-2xl border border-white/5">
                Input your directives below. The orchestrator will deploy dual models to formulate competing syntaxes, followed by a systemic review protocol.
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
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Deep, stark contrast for codeblock in futuristic theme */
        .prose-invert pre code {
          background-color: #020617 !important; /* slate-950 extremely dark */
          border: 1px solid #1e1b4b !important; /* deep indigo */
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
