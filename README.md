
# 👻 PhantomAI — Ghost in the Machine

> Some machines remember what we forget.

PhantomAI is a spooky, futuristic website built for the **Ghost in the Machine** open-source AI challenge. It combines a haunted terminal, an eerie story generator, and an optional local AI integration to explore the creative possibilities of open-weight AI models.

## 🌌 Features

- 👻 **Ghostly UI:** Dark interface with neon-purple gradients, glowing effects, and floating ghost animations.
- 📖 **AI Story Generator:** Generate atmospheric horror stories based on user prompts when connected to a local model.
- 💻 **Haunted Terminal:** Interact with a mysterious computer terminal.
- 🧠 **Open-Weight AI:** Optionally connect to a model running locally through Ollama.
- 🔒 **Privacy-Focused:** Local inference can keep prompts on your own computer instead of sending them to a hosted AI provider.
- 📱 **Responsive Design:** Works across desktop, tablet, and mobile screens.
- ⚡ **Lightweight:** Built with HTML, CSS, and vanilla JavaScript.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- [Ollama](https://ollama.com/) — optional local AI runtime
- Llama 3.2 — example open-weight model

## 📂 Project Structure

```text
PhantomAI/
├── index.html
├── script.css
├── style.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `YOUR_REPOSITORY_URL` with your GitHub repository URL.

### 2. Open the project

Open the project folder in Visual Studio Code.

### 3. Run the website

Open `index.html` in your browser, or use the Live Server extension in VS Code.

The website can run in demo mode without installing an AI model.

## 🧠 Enable Local AI

To use real AI-generated responses instead of the built-in demo responses:

1. Install Ollama from https://ollama.com/
2. Download the example model:

```bash
ollama run llama3.2
```

3. Keep Ollama running.
4. Open PhantomAI in your browser.
5. Enter `llama3.2` in the local model field.
6. Click **Use local AI**.

The website attempts to connect to Ollama's local chat API at:

```text
http://localhost:11434/api/chat
```

**Note:** Local AI integration depends on Ollama running, the selected model being installed, and browser access to the local API. Browser CORS or security restrictions may require additional configuration. Do not expose the local AI service publicly without appropriate security controls.

## 🔓 Why Open Innovation Matters

PhantomAI explores how open-weight AI models can make creative tools more accessible and customizable.

- **Privacy:** Local inference can avoid sending prompts to an external AI provider.
- **Control:** Users can choose and replace compatible models.
- **Accessibility:** Open-weight models can be used without paying a per-request hosted AI API fee, although hardware and electricity still have costs.
- **Experimentation:** Developers can inspect the surrounding code, modify prompts, and extend the project.
- **Independence:** The application can continue using a locally installed model without depending on a hosted AI service.

The website's visual interface is a frontend project. Its real AI functionality is optional and requires a locally running model; demo mode uses predefined responses.

## 🎃 Theme: Ghost in the Machine

Inspired by Halloween and the mystery of forgotten technology, PhantomAI imagines a world where abandoned computers whisper stories and forgotten code comes back to life.

The project celebrates open innovation by giving developers the freedom to experiment with AI on their own machines.

## 🔮 Future Improvements

- Add streaming AI responses.
- Add more locally supported models.
- Create a library of generated stories.
- Add optional text-to-speech.
- Add offline support for the frontend.
- Add configurable model settings and improved error handling.

## 🤝 Contributing

Contributions and ideas are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## 📜 License

Consider releasing this project under the MIT License. Add a `LICENSE` file if you choose to use that license.

## 👨‍💻 Built For

**Ghost in the Machine — Open-Source AI Challenge**

*Open models. Haunted machines. Unlimited imagination.*
