import React from "react";
import { User } from "lucide-react";

export const UserMessage = ({ problem }) => {
  return (
    <div className="flex gap-4 mb-10 w-full justify-end">
      <div className="flex flex-col items-end">
        <span className="text-xs font-semibold text-slate-500 mb-1 mr-2 uppercase tracking-wider">User</span>
        <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl rounded-tr-none shadow-sm text-slate-200 text-base max-w-4xl 2xl:max-w-screen-md leading-relaxed">
          {problem}
        </div>
      </div>
      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 mt-5">
        <User className="w-5 h-5 text-slate-300" />
      </div>
    </div>
  );
};
