📜 Constitution of India – Made Easy (AI + Web-Based Educational Platform)
📋 Project Overview
This project is an interactive, AI-powered educational platform focused on making the Constitution of India accessible, understandable, and engaging. Users can explore part-wise articles, fundamental rights and duties, and historical context. It includes a smart AI chatbot and a Constitution quiz feature powered by Google Gemini AI. Authentication and leaderboard tracking enhance engagement and personalization.

🛠️ Tools and Technologies Used
⚙️ Backend
Flask (Python) – REST API for authentication, quiz, chatbot, and article data

Flask-Login – Secure user session management

MySQL – User and quiz data storage

Google Generative AI (Gemini 1.5 Flash) – AI-based Q&A and quiz generation

🎨 Frontend
React JS – Responsive and dynamic UI

React Router – Frontend navigation

Bootstrap + Custom CSS – Styling and layout

Fetch API – Frontend-to-backend communication with session-based auth

🔗 Cloud Services
Google Gemini API – Legal Q&A and quiz content generation

MySQL (local or cloud) – Data persistence (users, scores, quiz attempts)

🔍 Use Case & Features
🔓 User Authentication
Users can register, login, and logout securely.

Session-based authentication ensures only logged-in users can access AI features (chatbot, quiz).

📚 Constitution Explorer
View All 25 Parts of the Constitution grouped properly (Part I to XXI).

Each part includes relevant articles, titles, and descriptions in a structured format.

Smooth UI navigation between parts and articles.

🤖 AI-Powered Chatbot (Ask The Constitution)
Built using Gemini 1.5 Flash model from Google.

Handles legal and constitutional queries (e.g., rights, duties, fundamental laws).

Responds only to Constitution-related questions.

Shows ⚠️ warning if user inputs off-topic questions.

🧠 AI Quiz Generator
Automatically generates 10 MCQs from the Indian Constitution:

3 Easy

4 Medium

3 Hard

Each question includes 4 options and one correct answer.

No repetition of questions; all quizzes are dynamically created using Gemini AI.

🏆 Leaderboard + Scoring System
Quiz score is tracked and stored per user.

Users’ highest scores are displayed in the Top 5 Leaderboard.

Smart feedback/remarks based on score:

🎉 Excellent (9+)

👍 Good (6–8)

📖 Needs Improvement (≤5)

⚙️ System Workflow
text
Copy
Edit
User Login/Register ⟶ React Frontend ⟶ Flask API ⟶ MySQL

             🔽                        🔽                        🔽
      Constitution Pages        Ask Bot Feature            Quiz Section
           (Static)          (Gemini AI, via Flask)    (Gemini AI, via Flask)

                                🔁                            🔁
                          User Auth & Session           Quiz Submission +
                                                        Leaderboard Storage
📊 Results & Highlights
✅ Part-wise, well-structured Constitution content.

✅ Real-time AI Q&A for Constitution-based legal queries.

✅ AI-generated quiz content – dynamic, non-repetitive, and difficulty-balanced.

✅ User-based scoring, remarks, and secure session handling.

✅ Leaderboard keeps users engaged with performance comparison.

🧪 Educational Applications
📖 For students preparing for civics, law, UPSC, and general awareness.

🏫 Can be used by teachers/institutions to make Indian Constitution teaching interactive.

🤖 Demonstrates integration of LLMs with educational apps.

🛡️ Note
This project is for educational and academic use. AI answers are generated based on trained data and may not always match official legal interpretations. For legal advice, consult verified sources or experts.
