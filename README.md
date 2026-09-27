# Mood Switcher

## Original Idea

A small webpage for people who want a brief pause and a little encouragement. Clicking a button changes the background color and displays an encouraging message.

**When someone clicks “Change My Mood,” the experience should change its background color and display a new encouraging message.**

## How to Open

Download this repository using **Code → Download ZIP**, extract it, and open `index.html` in a browser. Keep `index.html`, `style.css`, and `script.js` in the same folder. No dependencies or API keys are required.

## Project Files

- `index.html`: The heading, message, and button.
- `style.css`: Layout, background transitions, keyboard focus, and responsive styling.
- `script.js`: Six color/message pairs and the random selection logic.

Every click selects a different pair from the current one, so both the color and message change. Refreshing restores the initial state. No history is saved.

## AI Tool and Selected Prompts

- **Tool:** Codex.
- **Initial prompt (translated from Chinese):** The assignment instructions followed by “When the user clicks the ‘Change My Mood’ button, the webpage changes its background color and displays an encouraging message.”
- **Follow-up prompt (translated from Chinese):** “I need it in English.”
- **AI implementation suggestions:** Use plain HTML, CSS, and JavaScript; randomly select from the other five moods to avoid consecutive repeats; include visible keyboard focus and support for reduced motion.
- **Design feedback (translated from Chinese):** “I think it is too plain. The whole webpage could be enriched with a more comforting art style.” This remains a future improvement.

## Reflection

My original idea was a simple webpage that changes its background color and displays an encouraging message when someone clicks “Change My Mood.” The initial version followed this basic idea, but I felt the overall page was too plain. I wanted the experience to feel more comforting, with a gentle illustration style and more visual detail. One change I requested was to make the page English, and AI updated the interface and messages. The visual design still needs improvement. My next step would be to add calming illustrations and check whether they make the experience feel more welcoming while keeping the button and messages easy to read.

AI helped turn my idea into an initial version by creating the page structure, styling, and interaction code. However, I still needed to judge whether the result expressed the mood I wanted. I also needed to understand how the random selection avoids showing the same message twice in a row and decide whether the colors and wording felt encouraging. This process showed me that describing the basic function was only part of communicating my idea; I also needed to explain the visual style and feeling I wanted. I have not yet completed systematic testing across screen sizes and keyboard controls, so those aspects remain uncertain.
