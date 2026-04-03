// The Smoothie King Leadership Style Quiz
// styleId mapping:
//   teacher    → A answers: direct instruction, technical/procedural approach
//   role_model → B answers: leads by example, demonstrates the standard
//   coach      → C answers: asks questions, empowers team to think/solve
//   supporter  → D answers: emotional check-in, relational/people-first support

export const QUESTIONS = [
  {
    id: 'q1',
    text: 'A new seasonal food item launches today. How do you prepare your team?',
    options: [
      { id: 'q1-teacher', text: 'I one-on-one with each person at the start of their shift, making sure they\'ve memorized the process, steps, and macros.', styleId: 'teacher' },
      { id: 'q1-role_model', text: 'I am the first one on the line making the new toast perfectly for guests so the team can watch how I do it.', styleId: 'role_model' },
      { id: 'q1-coach', text: 'I ask the team, "What do you think will be the trickiest part?" and let them troubleshoot it.', styleId: 'coach' },
      { id: 'q1-supporter', text: 'I check in to see who feels nervous about the new launch and offer to take the first few orders with them.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q2',
    text: 'It\'s 12:15 PM, the line is to the door, and tickets are backing up at the water station. What is your move?',
    options: [
      { id: 'q2-teacher', text: 'I stand at the hand-off station, making sure every order is blended perfectly to make sure standards don\'t slip.', styleId: 'teacher' },
      { id: 'q2-role_model', text: 'I jump in to start measuring and scooping to set a high-speed pace for everyone to follow.', styleId: 'role_model' },
      { id: 'q2-coach', text: 'I observe the bottleneck and ask a senior team member, "How can we shift positions to clear this faster?"', styleId: 'coach' },
      { id: 'q2-supporter', text: 'I walk the line, give everyone a quick "We\'ve got this," and jump in wherever someone looks most stressed.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q3',
    text: 'You notice a team member consistently forgets to wipe down the counters during down-time.',
    options: [
      { id: 'q3-teacher', text: 'I pull out the cleaning checklist and walk them through the "why" and "how" of each step again.', styleId: 'teacher' },
      { id: 'q3-role_model', text: 'I start wiping the counters right next to them, making sure they see me doing it.', styleId: 'role_model' },
      { id: 'q3-coach', text: 'I ask them, "What\'s stopping you from getting to the counters? How can we make it part of your rhythm?"', styleId: 'coach' },
      { id: 'q3-supporter', text: 'I say, "Hey, I know it\'s been a long shift, but could you help me out by keeping this area clear so we stay on top of things?"', styleId: 'supporter' }
    ]
  },
  {
    id: 'q4',
    text: 'A team member wants to become a Team Captain. How do you help them?',
    options: [
      { id: 'q4-teacher', text: 'I make them detailed list of responsibilities and milestones they must hit to help prepare them.', styleId: 'teacher' },
      { id: 'q4-role_model', text: 'I have them shadow me for three shifts so they can see exactly how I handle the store.', styleId: 'role_model' },
      { id: 'q4-coach', text: 'I give them a small project (like the prep list) and ask them to come to me with their plan for it.', styleId: 'coach' },
      { id: 'q4-supporter', text: 'I sit down and ask about their career goals, then offer to support them through the transition.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q5',
    text: 'A guest is unhappy because their smoothie "tastes different than usual" and upset that they are in a hurry.',
    options: [
      { id: 'q5-teacher', text: 'I quickly double check the prep date on the fruit and the blender settings to make sure everything is working correctly.', styleId: 'teacher' },
      { id: 'q5-role_model', text: 'I personally step in, apologize, and remake the drink perfectly while the team watches.', styleId: 'role_model' },
      { id: 'q5-coach', text: 'I let the team member handle it, then ask them afterward, "How do you think that went? What would you do differently next time?"', styleId: 'coach' },
      { id: 'q5-supporter', text: 'I quickly check with the team member to make sure they are ok, then we handle the guest together.', styleId: 'supporter' }
    ]
  },
  {
    id: 'q6',
    text: 'When you want to give a shout-out of appreciation, which sounds most like something you would say?',
    options: [
      { id: 'q6-teacher', text: '"Your accuracy on the inventory count was 100% today. Great job."', styleId: 'teacher' },
      { id: 'q6-role_model', text: '"I love how you matched my energy during that rush. We crushed it."', styleId: 'role_model' },
      { id: 'q6-coach', text: '"I noticed you solved that blender issue on your own. You\'re really growing."', styleId: 'coach' },
      { id: 'q6-supporter', text: '"I\'m so grateful you\'re here today; the team really feels better when you\'re on the shift."', styleId: 'supporter' }
    ]
  },
  {
    id: 'q7',
    text: 'You\'re short-staffed and everyone is exhausted. How do you make sure the team feels cared for?',
    options: [
      { id: 'q7-teacher', text: 'I keep everyone focused on the task list so we don\'t fall behind on the "must-dos."', styleId: 'teacher' },
      { id: 'q7-role_model', text: 'I work the hardest and the longest, showing them that "we don\'t quit."', styleId: 'role_model' },
      { id: 'q7-coach', text: 'I gather everyone for 30 seconds and ask, "What\'s one thing we can stop doing right now to make this easier?"', styleId: 'coach' },
      { id: 'q7-supporter', text: 'I make my favorite off-menu smoothie, split it for everyone to try, and tell them I know how hard they are working.', styleId: 'supporter' }
    ]
  },

];
