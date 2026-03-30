// Modular Questions
export const QUESTIONS = [
  {
    id: 'q1',
    text: 'Placeholder Question 1: How do you handle a new employee making a mistake?',
    options: [
      { id: 'q1-teacher', text: 'Explain the correct procedure step-by-step.', styleId: 'teacher' },
      { id: 'q1-role', text: 'Show them how it is done correctly by doing it myself.', styleId: 'role_model' },
      { id: 'q1-coach', text: 'Ask them what they think went wrong and how they can fix it.', styleId: 'coach' },
      { id: 'q1-supporter', text: 'Reassure them that everyone makes mistakes and support them emotionally.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q2',
    text: 'Placeholder Question 2: When the shift is extremely busy, what is your primary focus?',
    options: [
      { id: 'q2-supporter', text: 'Checking in on the team\'s stress levels and ensuring they take mental breaks.', styleId: 'supporter' },
      { id: 'q2-teacher', text: 'Ensuring everyone is following the standard operating procedures perfectly.', styleId: 'teacher' },
      { id: 'q2-coach', text: 'Empowering shift leads to make on-the-fly decisions to handle the rush.', styleId: 'coach' },
      { id: 'q2-role', text: 'Jumping into the busiest station to set the pace and help out.', styleId: 'role_model' }
    ]
  },
  {
    id: 'q3',
    text: 'Placeholder Question 3: How do you prefer to give feedback?',
    options: [
      { id: 'q3-coach', text: 'Through guiding questions that help them discover areas for improvement.', styleId: 'coach' },
      { id: 'q3-supporter', text: 'In a private, safe space where I emphasize their value to the team first.', styleId: 'supporter' },
      { id: 'q3-teacher', text: 'Directly and factually, pointing out exactly what needs to be changed.', styleId: 'teacher' },
      { id: 'q3-role', text: 'By quietly adjusting their work and hoping they follow my example.', styleId: 'role_model' }
    ]
  }
];
