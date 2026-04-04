import React from "react";
import { Cpu, Scale } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export const SolutionCard = ({ title, markdown, score, reason, isWinner }) => {
  return (
    <div className={`p-[1px] rounded-2xl relative overflow-hidden h-full flex flex-col group ${isWinner ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'bg-slate-800/80 border border-slate-700/50 shadow-md'}`}>
      {/* Inner card with glass effect */}
      <div className="bg-slate-950/90 backdrop-blur-xl p-6 rounded-[15px] h-full flex flex-col relative z-10 transition-all duration-300">
        
        {/* Decorative corner glow */}
        {isWinner && (
           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] -z-10 rounded-full" />
        )}

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/60">
          <h3 className="font-semibold flex items-center gap-2">
            <Cpu className={`w-4 h-4 ${isWinner ? 'text-fuchsia-400' : 'text-slate-500'}`} />
            <span className={isWinner ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-300' : 'text-slate-300'}>
              {title}
            </span>
          </h3>
          <div className={`text-sm font-bold px-3 py-1 rounded-full shadow-inner ${isWinner ? 'bg-slate-900 border border-indigo-500/30 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}>
            SCORE {score}<span className="text-slate-600">/10</span>
          </div>
        </div>
        
        <div className="prose prose-invert prose-base text-[1.05rem] flex-grow mb-6 max-w-none text-slate-200 leading-relaxed font-light mt-2">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {markdown}
          </ReactMarkdown>
        </div>

        <div className="mt-auto">
          <div className={`flex items-start gap-4 p-5 rounded-xl border relative overflow-hidden ${isWinner ? 'bg-indigo-950/20 border-indigo-500/20' : 'bg-slate-900/50 border-slate-800'}`}>
            <Scale className={`w-6 h-6 mt-0.5 flex-shrink-0 ${isWinner ? 'text-fuchsia-400' : 'text-slate-500'}`} />
            <div className="relative z-10">
              <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${isWinner ? 'text-indigo-300' : 'text-slate-500'}`}>Judge Reasoning</p>
              <p className="text-base text-slate-300 leading-relaxed">{reason}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
