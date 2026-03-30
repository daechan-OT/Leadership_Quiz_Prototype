import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6" aria-hidden="true">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-quiz-primary uppercase tracking-wider">
          Question {current} of {total}
        </span>
        <span className="text-xs font-semibold text-quiz-text/60">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full bg-orange-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-quiz-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
