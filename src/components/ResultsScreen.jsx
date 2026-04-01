import React, { useEffect, useMemo } from 'react';
import logo from '../assets/logo.png';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Share2, RotateCcw } from 'lucide-react';
import { exportAndShare } from '../skills/exportAndShare';
import { announceToScreenReader } from '../skills/a11yUtils';

export default function ResultsScreen({ resultsData, onRestart }) {
  const { allScores, topStyles } = resultsData;

  useEffect(() => {
    const styleNames = topStyles.map(s => s.name).join(' and ');
    announceToScreenReader(`Quiz complete. Your primary style is ${styleNames}.`);
  }, [topStyles]);

  const handleShare = () => {
    exportAndShare('result-capture-area', 'my-leadership-style.png');
  };

  // Format data for Donut Chart
  const chartData = useMemo(() => {
    return allScores.filter(s => s.score > 0).map(s => ({
      name: s.name,
      value: s.score,
      color: s.color
    }));
  }, [allScores]);

  const isTie = topStyles.length > 1;

  return (
    <div className="w-full animate-fade-in flex flex-col items-center">
      
      {/* CAPTURE AREA */}
      <div id="result-capture-area" className="w-full flex flex-col items-center bg-quiz-bg p-4 md:p-6 sm:-mx-6 rounded-2xl">
        <img 
          src={logo} 
          alt="Smoothie King Logo" 
          className="h-6 md:h-8 w-auto mb-6"
        />
        <h2 className="text-xs font-extrabold text-quiz-primary uppercase tracking-widest mb-2">
          Your Results
        </h2>
        
        {isTie ? (
          <h1 className="text-3xl md:text-4xl font-black text-quiz-text mb-2 text-center">
            You are a Hybrid Leader
          </h1>
        ) : (
          <h1 className="text-3xl md:text-5xl font-black text-quiz-text mb-2 text-center">
            {topStyles[0].name}
          </h1>
        )}

        {isTie && (
          <p className="text-base font-medium text-quiz-text/80 mb-6 text-center">
            Your primary styles are {topStyles.map(s => <strong key={s.id} className="text-quiz-primary">{s.name}</strong>).reduce((prev, curr) => [prev, ' and ', curr])}
          </p>
        )}

        {/* DONUT CHART (Recharts) */}
        <div 
          className="w-full h-64 md:h-80 my-4 flex justify-center"
          aria-label={`Donut chart showing score breakdown. Highest scores are ${topStyles.map(s=>s.name).join(', ')}.`}
          role="img"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} Points`, name]}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* SCORE BREAKDOWN — all 4 styles ranked */}
        <div className="w-full mt-6 text-left">
          <h3 className="text-xs font-extrabold text-quiz-primary uppercase tracking-widest mb-4">
            Score Breakdown
          </h3>
          <div className="flex flex-col gap-3">
            {[...allScores]
              .sort((a, b) => b.score - a.score)
              .map((style) => (
                <div key={style.id} className="bg-white p-4 rounded-xl border border-orange-50 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: style.color }} />
                      <span className="font-semibold text-quiz-text text-xs">{style.name}</span>
                    </div>
                    <span className="text-xs font-bold text-quiz-text/70 tabular-nums">
                      {style.score} / {style.maxPossible}
                    </span>
                  </div>
                  {/* Animated progress bar */}
                  <div className="w-full h-2.5 bg-orange-50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${style.percentage}%`,
                        backgroundColor: style.color
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* STYLE DESCRIPTIONS */}
        <div className="w-full flex flex-col gap-6 mt-6 text-left">
          {topStyles.map((style) => {
            const scored = allScores.find(s => s.id === style.id);
            return (
              <div key={style.id} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-50">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-2xl font-bold text-quiz-text flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: style.color }}></span>
                    {style.name}
                  </h3>
                  {scored && (
                    <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: style.color }}>
                      {scored.score}/{scored.maxPossible} pts
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-quiz-text/60 uppercase tracking-wide mb-4 mt-1">
                  {style.subtitle}
                </p>

                <div className="mb-4">
                  <strong className="text-quiz-primary">Focus:</strong> <span className="text-quiz-text/90">{style.focus}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                    <strong className="block text-green-800 mb-2 text-xs uppercase">Strengths</strong>
                    <ul className="list-disc pl-5 text-xs text-quiz-text/80 space-y-1">
                      {style.strengths.map((str, i) => <li key={i}>{str}</li>)}
                    </ul>
                  </div>

                  <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                    <strong className="block text-quiz-primary mb-2 text-xs uppercase">Blind Spots</strong>
                    <ul className="list-disc pl-5 text-xs text-quiz-text/80 space-y-1">
                      {style.blindSpots.map((bs, i) => <li key={i}>{bs}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ACTION BUTTONS (Outside Capture Area) */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <button
          onClick={handleShare}
          className="flex-1 max-w-xs min-h-[44px] flex items-center justify-center gap-2 px-6 py-4 bg-quiz-primary text-[#FFF9EF] rounded-xl font-bold text-base hover:bg-[#7a0014] focus:outline-none focus:ring-4 focus:ring-quiz-primary/50 transition-all shadow-md active:scale-95"
          aria-label="Share or download my result image"
        >
          <Share2 size={20} /> Share Result
        </button>
        
        <button
          onClick={onRestart}
          className="flex-1 max-w-xs min-h-[44px] flex items-center justify-center gap-2 px-6 py-4 bg-white text-quiz-primary border-2 border-quiz-primary rounded-xl font-bold text-base hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-quiz-primary/30 transition-all active:scale-95"
          aria-label="Retake the quiz"
        >
          <RotateCcw size={20} /> Retake Quiz
        </button>
      </div>
    </div>
  );
}
