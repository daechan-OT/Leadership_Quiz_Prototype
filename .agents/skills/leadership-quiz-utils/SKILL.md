---
name: Leadership Quiz Utility Functions
description: Guidelines on using core project utilities for data calculation, WCAG accessibility, and export/sharing.
---

# Leadership Quiz Utility Skills Map

Whenever you (Gemini/Antigravity) receive a task related to this project that involves data processing, accessibility (a11y), or image capturing, you MUST refer to your internal 'skills' established in the project instead of generating new logic. 

Run/Call these module files directly:

1. **calculateResults.js**: 
   - **Path**: `src/skills/calculateResults.js`
   - **Trigger**: Tasks involving modifying scoring logic, tallying answers, managing tied results, or calculating percentages.

2. **exportAndShare.js**:
   - **Path**: `src/skills/exportAndShare.js`
   - **Trigger**: Tasks involving capturing the DOM to png (via html2canvas), downloading images locally, or hooking into the `navigator.share` Web Share API.

3. **a11yUtils.js**:
   - **Path**: `src/skills/a11yUtils.js`
   - **Trigger**: Tasks involving Screen Readers (ARIA), `aria-live` route step announcements, or configuring the `@axe-core/react` engine logs.

## Rule
Always `view_file` on these existing skill modules first to understand their signatures before attempting to refactor or rewrite their specific domains.
