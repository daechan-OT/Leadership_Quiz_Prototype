# Leadership Style Quiz — Questions & Answers

A reference list of every question and answer option used in the Leadership Style Quiz, with each option labeled by the leadership style it maps to.

Source of truth: [src/data/questionsData.js](src/data/questionsData.js). If you edit either this file or the source, update both so they stay in sync.

---

## The 4 Leadership Styles

| Style | Approach | Focus |
|---|---|---|
| **The Teacher** | Situational Leadership — direct instruction, technical / procedural approach | Building Technical Confidence |
| **The Role Model** | Modeling Leadership — leads by example, demonstrates the standard | Integrity through Action |
| **The Coach** | Transformational Leadership — asks questions, empowers the team to think and solve | Asking over Telling |
| **The Supporter** | Servant / Secure Base Leadership — emotional check-in, relational, people-first | Emotional Safety |

Each question presents one option per style. Option order is shuffled at runtime; the order below reflects the raw definition order in the source data.

---

## Questions

### Question 1
**A new seasonal food item launches today. How do you prepare your team?**

- **The Teacher** — I one-on-one with each person at the start of their shift, making sure they've memorized the process, steps, and macros.
- **The Role Model** — I am the first one on the line making the new toast perfectly for guests so the team can watch how I do it.
- **The Coach** — I ask the team, "What do you think will be the trickiest part?" and let them troubleshoot it.
- **The Supporter** — I check in to see who feels nervous about the new launch and offer to take the first few orders with them.

### Question 2
**It's 12:15 PM, the line is to the door, and tickets are backing up at the water station. What is your move?**

- **The Teacher** — I stand at the hand-off station, making sure every order is blended perfectly to make sure standards don't slip.
- **The Role Model** — I jump in to start measuring and scooping to set a high-speed pace for everyone to follow.
- **The Coach** — I observe the bottleneck and ask a senior team member, "How can we shift positions to clear this faster?"
- **The Supporter** — I walk the line, give everyone a quick "We've got this," and jump in wherever someone looks most stressed.

### Question 3
**You notice a team member consistently forgets to wipe down the counters during down-time.**

- **The Teacher** — I pull out the cleaning checklist and walk them through the "why" and "how" of each step again.
- **The Role Model** — I start wiping the counters right next to them, making sure they see me doing it.
- **The Coach** — I ask them, "What's stopping you from getting to the counters? How can we make it part of your rhythm?"
- **The Supporter** — I say, "Hey, I know it's been a long shift, but could you help me out by keeping this area clear so we stay on top of things?"

### Question 4
**A team member wants to become a Team Captain. How do you help them?**

- **The Teacher** — I make them a detailed list of responsibilities and milestones they must hit to help prepare them.
- **The Role Model** — I have them shadow me for three shifts so they can see exactly how I handle the store.
- **The Coach** — I give them a small project (like the prep list) and ask them to come to me with their plan for it.
- **The Supporter** — I sit down and ask about their career goals, then offer to support them through the transition.

### Question 5
**A guest is unhappy because their smoothie "tastes different than usual" and upset that they are in a hurry.**

- **The Teacher** — I quickly double check the prep date on the fruit and the blender settings to make sure everything is working correctly.
- **The Role Model** — I personally step in, apologize, and remake the drink perfectly while the team watches.
- **The Coach** — I let the team member handle it, then ask them afterward, "How do you think that went? What would you do differently next time?"
- **The Supporter** — I quickly check with the team member to make sure they are ok, then we handle the guest together.

### Question 6
**When you want to give a shout-out of appreciation, which sounds most like something you would say?**

- **The Teacher** — "Your accuracy on the inventory count was 100% today. Great job."
- **The Role Model** — "I love how you matched my energy during that rush. We crushed it."
- **The Coach** — "I noticed you solved that blender issue on your own. You're really growing."
- **The Supporter** — "I'm so grateful you're here today; the team really feels better when you're on the shift."

### Question 7
**You're short-staffed and everyone is exhausted. How do you make sure the team feels cared for?**

- **The Teacher** — I keep everyone focused on the task list so we don't fall behind on the "must-dos."
- **The Role Model** — I work the hardest and the longest, showing them that "we don't quit."
- **The Coach** — I gather everyone for 30 seconds and ask, "What's one thing we can stop doing right now to make this easier?"
- **The Supporter** — I make my favorite off-menu smoothie, split it for everyone to try, and tell them I know how hard they are working.

---

## Scoring

- Each question contributes exactly **1 point** to whichever style the chosen option maps to.
- A user's total possible per style is the number of questions (currently **7**).
- The percentage shown on the results screen is `score / totalQuestions × 100`, rounded to the nearest integer.
- Ties are handled explicitly — if two or more styles share the top score, the user is shown as a "Hybrid Leader" and both/all top styles are described.

Scoring logic lives in [src/skills/calculateResults.js](src/skills/calculateResults.js).
