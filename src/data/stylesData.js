// Centralized theme colors for the 4 styles to allow easy editing during development
export const STYLE_COLORS = {
  teacher: '#F4A261',     // Warm Honey
  roleModel: '#E76F51',   // Burnt Sienna
  coach: '#2A9D8F',       // Deep Teal
  supporter: '#E9C46A'    // Soft Gold
};

// The 4 Leadership Styles
export const STYLES = [
  {
    id: 'teacher',
    name: 'The Teacher',
    subtitle: 'Situational Leadership',
    focus: 'Building Technical Confidence',
    strengths: ['The Error-Free Open', 'New Hire Speed-to-Line', 'Menu Mastery'],
    blindSpots: ['The "Robot" Vibe', 'Telling over Showing', 'Frustration with Slow Learners'],
    color: STYLE_COLORS.teacher
  },
  {
    id: 'role_model',
    name: 'The Role Model',
    subtitle: 'Modeling Leadership',
    focus: 'Integrity through Action',
    strengths: ['Setting the Pace', 'Cleanliness Standards', 'Guest Connection'],
    blindSpots: ['The "I\'ll Just Do It Myself" Trap', 'Burnout Risk', 'Unspoken Expectations'],
    color: STYLE_COLORS.roleModel
  },
  {
    id: 'coach',
    name: 'The Coach',
    subtitle: 'Transformational Leadership',
    focus: 'Asking over Telling',
    strengths: ['Developing Team Captains', 'Problem Solving', 'High Retention'],
    blindSpots: ['Analysis Paralysis', 'Missing the "Low Performers"', 'Over-Thinking the Small Stuff'],
    color: STYLE_COLORS.coach
  },
  {
    id: 'supporter',
    name: 'The Supporter',
    subtitle: 'Servant/Secure Base Leadership',
    focus: 'Emotional Safety',
    strengths: ['The "Calm" Center', 'Managing the "Battery"', 'Team Loyalty'],
    blindSpots: ['The "Friend" vs. "Manager" Blur', 'Being "Walked Over"', 'Avoiding Tough Conversations'],
    color: STYLE_COLORS.supporter
  }
];
