import React from 'react';

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen bg-quiz-bg text-quiz-text flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* 
        Master layout wrapper enforcing mobile-first responsiveness.
        max-w-2xl keeps the quiz readable on large monitors.
      */}
      <main className="w-full max-w-2xl bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 overflow-hidden relative">
        <div className="p-6 md:p-10 flex flex-col items-center text-center">
          {children}
        </div>
      </main>
      {/*<footer className="mt-8 text-xs text-quiz-primary/70 font-medium">
        Leadership Style Quiz
      </footer>*/}
    </div>
  );
}
