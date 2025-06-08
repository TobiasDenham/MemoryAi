# MemoryAI Chat Prototype

This project provides a minimal chat interface that connects to OpenAI to simulate the "MemoryAI" assistant.

## Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Create a `.env` file based on `.env.example` and supply your OpenAI API key:
   ```bash
   OPENAI_API_KEY=sk-...
   ```
3. Build and start the application:
   ```bash
   pnpm run build
   pnpm run start
   ```
4. Open `http://localhost:3000` and start chatting.

This project uses a generic system font stack to avoid fetching Google Fonts at
build time, ensuring the app can build in offline environments.

The chat page sends conversation history to `/api/chat`, which relays the request to OpenAI and returns MemoryAI's reply.

