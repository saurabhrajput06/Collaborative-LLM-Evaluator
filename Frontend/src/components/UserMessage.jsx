import React from "react";
import { User } from "lucide-react";

export const UserMessage = ({ problem }) => {
  return (
    <div className="flex gap-4 mb-10 w-full justify-end">
      <div className="flex flex-col items-end">
        <span className="text-xs font-semibold text-slate-500 mb-1 mr-2 uppercase tracking-wider">User</span>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-slate-900 border border-slate-700/50 px-6 py-4 rounded-2xl rounded-tr-none shadow-2xl text-slate-200 text-lg max-w-4xl 2xl:max-w-screen-md leading-relaxed backdrop-blur-md">
            {problem}
          </div>
        </div>
      </div>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)] mt-5">
        <User className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};
