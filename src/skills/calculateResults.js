export function calculateResults(answers, stylesData) {
  // answers is an array of style IDs chosen by user
  const scores = {};
  
  // Initialize scores
  stylesData.forEach(style => {
    scores[style.id] = 0;
  });

  // Tally scores
  answers.forEach(answerId => {
    if (scores[answerId] !== undefined) {
      scores[answerId] += 1;
    }
  });

  const totalQuestions = answers.length;
  
  let maxScore = -1;
  let topStyles = [];
  
  const results = stylesData.map(style => {
    const score = scores[style.id];
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    
    if (score > maxScore) {
      maxScore = score;
      topStyles = [style];
    } else if (score === maxScore) {
      topStyles.push(style);
    }
    
    return {
      ...style,
      score,
      percentage
    };
  });
  
  return {
    allScores: results,
    topStyles: topStyles // Array to handle ties
  };
}
