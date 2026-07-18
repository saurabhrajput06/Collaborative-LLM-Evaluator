# 🤖 Battle-Arena: Multi-Agent AI Problem Solver with Judge

A Multi-Agent AI system where two LLM agents collaborate to solve complex problems, while a third "Judge" AI evaluates the quality and accuracy of the final solutions.

## 🚀 Features

- **Dual Agent Collaboration**: Two independent agents (`Agent1` and `Agent2`) work together to solve problems
- **Judge Evaluation**: A separate Judge AI evaluates the final solutions for quality, accuracy, and completeness
- **Iterative Refinement**: The system allows for multiple rounds of collaboration and evaluation
- **Human-in-the-loop**: Option to review and intervene in the evaluation process

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Framework**: Express.js
- **AI SDK**: Google GenAI (Gemini API)
- **Database**: None (in-memory for demo; can be extended)
- **Testing**: Jest

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key

## ⚙️ Setup

1. **Clone the repository**

```bash
cd c:\Users\lenovo\Desktop\FSCS\TypeScripts\Projects\BATTLE-ARENA
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY="your_google_gemini_api_key"
```

4. **Run the server**

```bash
npm start
```

The server will start on `http://localhost:3000`

## 🧪 Testing

To run the tests:

```bash
npm test
```

## 🏗️ Architecture

```
┌───────────────────────────────┐
│        Express Server         │
│   POST /api/solve             │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│      Orchestration Logic      │
│ (solveController.ts)          │
└──────────────┬────────────────┘
               │
        ┌──────┴───────┐
        ▼              ▼
┌──────────────┐  ┌──────────────┐
│   Agent1     │  │   Agent2     │
│  (LLM)       │  │  (LLM)       │
└──────────────┘  └──────────────┘
        │              │
        └──────┬───────┘
               │
        ┌──────┴───────┐
        ▼              ▼
┌──────────────┐  ┌──────────────┐
│   Judge AI   │  │ Human Review │
│  (LLM)       │  │ (Optional)   │
└──────────────┘  └──────────────┘
```

## 📝 API Endpoints

### POST /api/solve

**Description**: Solves a given problem using the multi-agent system

**Request Body**:

```json
{
  "problem": "What is the capital of France?",
  "iterations": 3  // Optional, number of refinement rounds
}
```

**Response**:

```json
{
  "success": true,
  "data": {
    "bestSolution": {
      "agentId": "Agent1",
      "solution": "The capital of France is Paris.",
      "score": 95,
      "round": 2
    },
    "evaluation": {
      "accuracy": 0.95,
      "completeness": 0.9,
      "clarity": 1.0,
      "finalScore": 95
    },
    "rounds": [
      {
        "round": 1,
        "solutions": [
          {
            "agentId": "Agent1",
            "solution": "...",
            "score": 85
          },
          {
            "agentId": "Agent2",
            "solution": "...",
            "score": 88
          }
        ]
      },
      {
        "round": 2,
        "solutions": [
          // Refined solutions
        ]
      }
    ]
  }
}
```

## 🔄 Workflow

1. **Receive Problem**: The server receives a problem description
2. **Initial Solve**: Both Agent1 and Agent2 generate initial solutions
3. **Judge Evaluation**: The Judge AI evaluates and scores each solution
4. **Refinement (Optional)**: Based on the evaluation, agents can refine their solutions
5. **Repeat**: Steps 3-4 can repeat for a specified number of iterations
6. **Final Result**: Return the best solution with detailed evaluation metrics

## 📝 Sample Problems to Test

1. "What is the capital of France?"
2. "Explain quantum computing in simple terms"
3. "Write a Python function to reverse a linked list"
4. "Solve the trolley problem and explain your reasoning"
5. "Compare the pros and cons of electric vs gasoline cars"


