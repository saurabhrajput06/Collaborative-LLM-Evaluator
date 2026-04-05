import React from "react";
import { Send } from "lucide-react";

export const ChatInterface = ({ inputValue, setInputValue, handleSend }) => {
  return (
    <footer className="flex-none bg-[#05050b]/80 backdrop-blur-xl border-t border-indigo-500/10 px-6 pt-5 pb-1 z-20 relative shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-3xl 2xl:max-w-6xl mx-auto relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-focus-within:opacity-50 transition duration-500"></div>
        <form onSubmit={handleSend} className="relative flex items-center bg-slate-950 rounded-2xl">
          <div className="pl-6 text-indigo-500">
             <span className="font-mono">{">"}</span>
          </div>
          <input
            type="text"
            className="w-full bg-transparent text-slate-100 py-4 pl-4 pr-16 text-xl outline-none font-light placeholder:text-slate-600 focus:placeholder:text-slate-500 transition-colors"
            placeholder="Enter directive parameters..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="absolute right-3 p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-600 text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.4)] disabled:shadow-none translate-x-[2px]"
          >
            <Send className="w-5 h-5 -ml-0.5" />
          </button>
        </form>
        <div className="text-center mt-1 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Secure AI Processing Tunnel</span>
          <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse"></span>
        </div>
      </div>
    </footer>
  );
};
