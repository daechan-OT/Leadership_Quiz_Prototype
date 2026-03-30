import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { QUESTIONS } from '../data/questionsData';
import { announceToScreenReader } from '../skills/a11yUtils';

export default function QuizScreen({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  useEffect(() => {
    announceToScreenReader(`Question ${currentQuestionIndex + 1} of ${QUESTIONS.length}: ${currentQuestion.text}`);
  }, [currentQuestionIndex, currentQuestion]);

  const handleOptionSelect = (styleId) => {
    const newAnswers = [...answers, styleId];
    
    if (isLastQuestion) {
      onComplete(newAnswers);
    } else {
      setAnswers(newAnswers);
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleKeyDown = (e, styleId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent page scroll on Space
      handleOptionSelect(styleId);
    }
  };

  return (
    <div className="w-full flex flex-col items-center animate-fade-in text-left">
      <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} />
      
      <h2 
        className="text-2xl md:text-3xl font-bold text-quiz-text w-full mb-8 leading-snug"
        aria-live="polite"
      >
        {currentQuestion.text}
      </h2>

      <div className="w-full flex flex-col gap-4">
        {currentQuestion.options.map((option, idx) => (
          <div
            key={option.id}
            role="button"
            tabIndex={0}
            onClick={() => handleOptionSelect(option.styleId)}
            onKeyDown={(e) => handleKeyDown(e, option.styleId)}
            className="w-full min-h-[44px] p-5 rounded-xl border-2 border-orange-100 bg-white hover:border-quiz-primary hover:bg-[#fff5e6] focus:outline-none focus:ring-4 focus:ring-quiz-primary/30 transition-all cursor-pointer shadow-sm hover:shadow"
            aria-label={`Option ${idx + 1}: ${option.text}`}
          >
            <span className="text-lg font-medium text-quiz-text">{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
