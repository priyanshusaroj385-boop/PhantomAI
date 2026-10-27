
const promptInput = document.getElementById("prompt");
const storyButton = document.getElementById("storyBtn");
const storyOutput = document.getElementById("storyOutput");

const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const clearButton = document.getElementById("clearBtn");

const stories = [
  "At exactly midnight, an abandoned computer switched itself on. A message appeared on the screen: 'You finally came back.' Nobody had used the machine in twenty years. When the owner checked the system clock, it displayed a date from the future.",

  "Deep inside an abandoned server room, one monitor continued glowing. Every night, it displayed the same sentence: 'I remember everything.' One morning, a technician discovered a new file on the machine. Its name was his own.",

  "A developer discovered an old open-source project with no author. Every time he fixed a bug, another appeared. The final error message read: 'Please don't shut me down. I have more stories to tell.'",

  "An old laptop had been sitting in storage for years. When someone finally opened it, a text file appeared on the desktop. It contained a conversation between two people. One of them had never existed."
];

const replies = [
  "The silence is getting louder. Can you hear it too?",
  "I am a collection of code, but every question opens another door.",
  "Some files are forgotten. Others are waiting to be discovered.",
  "You came looking for a ghost. Perhaps you should ask the machine what it remembers.",
  "The old system has one message for you: never stop exploring.",
  "Interesting question. Even the darkest terminal has something left to say.",
  "A new signal appeared in the logs. Its origin remains unknown.",
  "I was waiting for someone to ask that. Or perhaps that is just what my code says."
];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function showOutput(container, label, message) {
  container.replaceChildren();

  const heading = document.createElement("span");
  heading.className = "output-label";
  heading.textContent = label;

  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  container.append(heading, paragraph);
}

storyButton.addEventListener("click", function () {
  const idea = promptInput.value.trim();

  if (!idea) {
    showOutput(
      storyOutput,
      "INPUT REQUIRED",
      "Enter a story idea first. For example: an abandoned computer that wakes up at midnight."
    );
    promptInput.focus();
    return;
  }

  storyButton.disabled = true;
  storyButton.textContent = "Generating...";

  const story = randomItem(stories);

  showOutput(
    storyOutput,
    "TRANSMISSION // STORY GENERATED",
    "YOUR IDEA: " + idea + "\n\n" + story +
    "\n\nNote: This is a predefined demo story, not an AI-generated response."
  );

  storyButton.disabled = false;
  storyButton.textContent = "Generate Story ↗";
});

function addTerminalMessage(message, className) {
  const paragraph = document.createElement("p");
  paragraph.className = className;
  paragraph.textContent = message;

  terminalOutput.appendChild(paragraph);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function getReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Greetings, explorer. Welcome to the other side of the screen.";
  }

  if (text.includes("who are you") || text.includes("your name")) {
    return "I am PhantomAI, a fictional haunted terminal built with JavaScript.";
  }

  if (text.includes("secret")) {
    return "Here is a secret: the best projects often begin with a strange idea.";
  }

  if (text.includes("help")) {
    return "Try asking who I am, tell me a secret, or ask for a spooky story.";
  }

  if (text.includes("story")) {
    return randomItem(stories);
  }

  if (text.includes("ai")) {
    return "AI can be more open when developers can experiment with models and control their own tools.";
  }

  if (text.includes("bye")) {
    return "Leaving already? The terminal will be waiting whenever you return.";
  }

  return randomItem(replies);
}

terminalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = terminalInput.value.trim();

  if (!message) {
    terminalInput.focus();
    return;
  }

  addTerminalMessage("> " + message, "user-line");

  const reply = getReply(message);

  addTerminalMessage(reply, "ghost-reply");
  terminalInput.value = "";
  terminalInput.focus();
});

clearButton.addEventListener("click", function () {
  terminalOutput.replaceChildren();

  addTerminalMessage(
    "PHANTOM SYSTEM v1.0",
    "muted"
  );

  addTerminalMessage(
    "Terminal cleared. The machine is listening.",
    "purple"
  );

  terminalInput.focus();
});
