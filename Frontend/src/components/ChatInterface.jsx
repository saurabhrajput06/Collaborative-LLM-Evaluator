import React from "react";
import { Send } from "lucide-react";

export const ChatInterface = ({ inputValue, setInputValue, handleSend }) => {
  return (
    <footer className="flex-none bg-[#0b0f17] border-t border-slate-800 px-6 py-4 z-20 relative">
      <div className="max-w-3xl 2xl:max-w-6xl mx-auto relative">
        <form onSubmit={handleSend} className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl focus-within:border-indigo-500/50 transition-colors">
          <div className="pl-5 text-slate-550 select-none">
             <span className="font-mono text-sm">{">"}</span>
          </div>
          <input
            type="text"
            className="w-full bg-transparent text-slate-100 py-3.5 pl-3.5 pr-16 text-base outline-none placeholder:text-slate-500 focus:placeholder:text-slate-400 transition-colors"
            placeholder="Define your objective..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="absolute right-2 p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-600 text-white transition-colors duration-250 cursor-pointer disabled:cursor-default"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </form>
        <div className="text-center mt-2 flex items-center justify-center gap-1.5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">Secure AI Processing Tunnel</span>
        </div>
      </div>
    </footer>
  );
};
