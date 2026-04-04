import React from "react";
import { Bot } from "lucide-react";
import { SolutionCard } from "./SolutionCard";

export const ArenaResponse = ({ data }) => {
  const isWinner1 = data.judge.solution_1_score >= data.judge.solution_2_score;
  const isWinner2 = data.judge.solution_2_score >= data.judge.solution_1_score;

  return (
    <div className="flex gap-4 w-full">
      <div className="w-10 h-10 rounded-xl bg-slate-900 border-2 border-indigo-500/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.3)] mt-1 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-500/20 blur animate-pulse" />
         <Bot className="w-5 h-5 text-indigo-400 relative z-10" />
      </div>
      
      <div className="flex-grow max-w-[90rem]">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-semibold text-slate-400 ml-1 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,1)]"></span>
            Orchestrator Sequence
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-800 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 relative">
          <SolutionCard 
            title="Execution Thread 01" 
            markdown={data.solution_1} 
            score={data.judge.solution_1_score} 
            reason={data.judge.solution_1_reasoning}
            isWinner={isWinner1}
          />
          <SolutionCard 
            title="Execution Thread 02" 
            markdown={data.solution_2} 
            score={data.judge.solution_2_score} 
            reason={data.judge.solution_2_reasoning}
            isWinner={isWinner2}
          />
        </div>
      </div>
    </div>
  );
};
