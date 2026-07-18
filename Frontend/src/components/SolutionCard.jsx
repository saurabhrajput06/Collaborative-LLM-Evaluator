import React from "react";
import { Cpu, Scale } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export const SolutionCard = ({ title, markdown, score, reason, isWinner }) => {
  return (
    <div className={`rounded-xl p-6 flex flex-col h-full border ${isWinner ? 'bg-[#121824] border-indigo-500/60 shadow-sm' : 'bg-[#0f131c] border-slate-800 shadow-sm'}`}>
      
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/80">
        <h3 className="font-semibold flex items-center gap-2">
          <Cpu className={`w-4 h-4 ${isWinner ? 'text-indigo-400' : 'text-slate-500'}`} />
          <span className={isWinner ? 'text-indigo-300' : 'text-slate-400'}>
            {title}
          </span>
          {isWinner && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-450 border border-indigo-500/20">
              Selected Solution
            </span>
          )}
        </h3>
        <div className={`text-xs font-bold px-3 py-1 rounded-full ${isWinner ? 'bg-slate-900 border border-indigo-500/20 text-indigo-350' : 'bg-slate-900 border border-slate-800 text-slate-450'}`}>
          SCORE {score}<span className="text-slate-600">/10</span>
        </div>
      </div>
      
      <div className="prose prose-invert text-base flex-grow mb-6 max-w-none text-slate-300 leading-relaxed font-normal mt-2">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeHighlight]}
        >
          {markdown}
        </ReactMarkdown>
      </div>

      <div className="mt-auto">
        <div className={`flex items-start gap-4 p-4 rounded-lg border ${isWinner ? 'bg-indigo-950/10 border-indigo-500/20' : 'bg-slate-900/30 border-slate-800'}`}>
          <Scale className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isWinner ? 'text-indigo-400' : 'text-slate-500'}`} />
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${isWinner ? 'text-indigo-300' : 'text-slate-500'}`}>Judge Reasoning</p>
            <p className="text-sm text-slate-300 leading-relaxed">{reason}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
