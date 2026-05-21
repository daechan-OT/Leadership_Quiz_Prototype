import React from 'react';

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen bg-quiz-bg text-quiz-text flex flex-col items-center justify-center p-2 sm:p-4 md:p-8">
      <main className="w-full max-w-2xl bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 overflow-hidden relative">
        <div className="p-3 sm:p-5 md:p-8 flex flex-col items-center text-center">
          {children}
        </div>
      </main>
      {/*<footer className="mt-8 text-xs text-quiz-primary/70 font-medium">
        Leadership Style Quiz
      </footer>*/}
    </div>
  );
}
