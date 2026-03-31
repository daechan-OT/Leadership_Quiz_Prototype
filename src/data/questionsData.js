// The Smoothie King Leadership Style Quiz
// styleId mapping:
//   teacher    → A answers: direct instruction, technical/procedural approach
//   role_model → B answers: leads by example, demonstrates the standard
//   coach      → C answers: asks questions, empowers team to think/solve
//   supporter  → D answers: emotional check-in, relational/people-first support

export const QUESTIONS = [
  {
    id: 'q1',
    text: 'A new seasonal smoothie launches today. How do you prepare your team?',
    options: [
      { id: 'q1-teacher',    text: 'I spend the morning one-on-one with each person, making sure they\'ve memorized the exact measurements and substitutions.', styleId: 'teacher' },
      { id: 'q1-role_model', text: 'I am the first one on the line making the new drink perfectly for guests so the team can watch how I do it.', styleId: 'role_model' },
      { id: 'q1-coach',      text: 'I ask the team, "What do you think will be the trickiest part of this recipe?" and let them troubleshoot it.', styleId: 'coach' },
      { id: 'q1-supporter',  text: 'I check in to see who feels nervous about the new launch and offer to take the first few orders with them.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q2',
    text: 'It\'s 12:15 PM, the line is at the door, and the ticket printer is screaming. What is your move?',
    options: [
      { id: 'q2-teacher',    text: 'I stand at the hand-off station, calling out specific technical corrections to keep the flow moving.', styleId: 'teacher' },
      { id: 'q2-role_model', text: 'I jump on the hardest station (the blenders) and set a high-speed pace for everyone to follow.', styleId: 'role_model' },
      { id: 'q2-coach',      text: 'I observe the bottleneck and ask a senior team member, "How can we shift positions to clear this faster?"', styleId: 'coach' },
      { id: 'q2-supporter',  text: 'I walk the line, give everyone a quick "We\'ve got this," and jump in wherever someone looks most stressed.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q3',
    text: 'You notice a team member consistently forgets to wipe down the counters during down-time.',
    options: [
      { id: 'q3-teacher',    text: 'I pull out the cleaning checklist and walk them through the "why" and "how" of each step again.', styleId: 'teacher' },
      { id: 'q3-role_model', text: 'I start wiping the counters right next to them, making sure they see me doing it.', styleId: 'role_model' },
      { id: 'q3-coach',      text: 'I ask them, "What\'s stopping you from getting to the counters? How can we make it part of your rhythm?"', styleId: 'coach' },
      { id: 'q3-supporter',  text: 'I say, "Hey, I know it\'s been a long shift, but could you help me out by keeping this area clear so we stay on top of things?"', styleId: 'supporter' }
    ]
  },
  {
    id: 'q4',
    text: 'A team member wants to become a Team Captain. How do you help them?',
    options: [
      { id: 'q4-teacher',    text: 'I give them a manual and a list of technical milestones they must hit with 100% accuracy.', styleId: 'teacher' },
      { id: 'q4-role_model', text: 'I have them shadow me for three shifts so they can see exactly how I handle the store.', styleId: 'role_model' },
      { id: 'q4-coach',      text: 'I give them a small project (like the prep list) and ask them to come to me with their plan for it.', styleId: 'coach' },
      { id: 'q4-supporter',  text: 'I sit down and ask about their career goals, then offer to support them through the transition.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q5',
    text: 'A guest is unhappy because their smoothie "tastes different than usual."',
    options: [
      { id: 'q5-teacher',    text: 'I check the prep date on the fruit and the blender calibration to find the technical error.', styleId: 'teacher' },
      { id: 'q5-role_model', text: 'I personally step in, apologize, and remake the drink perfectly while the team watches.', styleId: 'role_model' },
      { id: 'q5-coach',      text: 'I let the team member handle it, then ask them afterward, "How do you think that went? What would you do differently next time?"', styleId: 'coach' },
      { id: 'q5-supporter',  text: 'I pull the team member aside first to make sure they aren\'t rattled, then we handle the guest together.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q6',
    text: 'What is your favorite way to give a "shout-out" or appreciation?',
    options: [
      { id: 'q6-teacher',    text: '"Your accuracy on the inventory count was 100% today. Great job."', styleId: 'teacher' },
      { id: 'q6-role_model', text: '"I love how you matched my energy during that rush. We crushed it."', styleId: 'role_model' },
      { id: 'q6-coach',      text: '"I noticed you solved that blender issue on your own. You\'re really growing."', styleId: 'coach' },
      { id: 'q6-supporter',  text: '"I\'m so grateful you\'re here today; the team really feels better when you\'re on the shift."', styleId: 'supporter' }
    ]
  },
  {
    id: 'q7',
    text: 'You\'re short-staffed and everyone is exhausted. How do you keep the "Care" value alive?',
    options: [
      { id: 'q7-teacher',    text: 'I keep everyone focused on the task list so we don\'t fall behind on the "must-dos."', styleId: 'teacher' },
      { id: 'q7-role_model', text: 'I work the hardest and the longest, showing them that "we don\'t quit."', styleId: 'role_model' },
      { id: 'q7-coach',      text: 'I gather everyone for 30 seconds and ask, "What\'s one thing we can stop doing right now to make this easier?"', styleId: 'coach' },
      { id: 'q7-supporter',  text: 'I order pizza or make everyone a "recovery smoothie" and tell them I know how hard they are working.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q8',
    text: 'You made a mistake on the schedule, and a team member is frustrated.',
    options: [
      { id: 'q8-teacher',    text: 'I explain the logic of why I made the mistake and show them the corrected version.', styleId: 'teacher' },
      { id: 'q8-role_model', text: 'I apologize, fix it immediately, and stay late myself to cover the gap I created.', styleId: 'role_model' },
      { id: 'q8-coach',      text: 'I ask the team member, "How can we work together to fix this so it doesn\'t happen again?"', styleId: 'coach' },
      { id: 'q8-supporter',  text: 'I acknowledge their frustration first: "I hear you, and I\'m sorry I stressed you out. Let\'s find a solution."', styleId: 'supporter' }
    ]
  }
];
