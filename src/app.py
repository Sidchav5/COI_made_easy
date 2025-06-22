from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import pymysql
import json
from werkzeug.security import generate_password_hash, check_password_hash
import os
import google.generativeai as genai
from datetime import datetime
import re
from flask import abort

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = 'your_secret_key_here'  # required for sessions

# ✅ Flask-Login Setup
login_manager = LoginManager()
login_manager.init_app(app)
# Override Flask-Login unauthorized handler
@login_manager.unauthorized_handler
def unauthorized():
    return jsonify({'error': 'Unauthorized'}), 401
login_manager.login_view = 'login'  # redirect if not logged in

# ✅ Gemini API setup
genai.configure(api_key="AIzaSyACCD7aYQD1GvGe2iXLqWcAYwhNR15_KX0")
model = genai.GenerativeModel("models/gemini-1.5-flash")

# ✅ DB connection
def connect_db():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='Siddhesh@5',
        database='coi_auth',
        cursorclass=pymysql.cursors.DictCursor
    )

# ✅ User model for Flask-Login
class User(UserMixin):
    def __init__(self, user_data):
        self.id = user_data['id']
        self.username = user_data['username']
        self.email = user_data['email']

@login_manager.user_loader
def load_user(user_id):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    conn.close()
    return User(user) if user else None

# ------------------ Constitution APIs ------------------ #
part_ranges = {
    1: (1, 4), 2: (5, 11), 3: (12, 35), 4: (36, 51), 5: (52, 78), 6: (79, 123), 7: (124, 124),
    8: (125, 148), 9: (149, 151), 10: (152, 153), 11: (154, 167), 12: (168, 242), 13: (243, 243),
    14: (244, 244), 15: (245, 263), 16: (264, 267), 17: (268, 281), 18: (282, 300), 19: (301, 311),
    20: (312, 323), 21: (324, 329), 22: (330, 342), 23: (343, 351), 24: (352, 360), 25: (361, 395)
}

part_titles = {
    1: "Part I – The Union and Its Territory", 2: "Part II – Citizenship", 3: "Part III – Fundamental Rights",
    4: "Part IV – Directive Principles of State Policy", 5: "Part IVA – Fundamental Duties",
    6: "Part V – The Union", 7: "Part VI – The States", 8: "Part VII – The States in Part B (Repealed)",
    9: "Part VIII – The Union Territories", 10: "Part IX – The Panchayats", 11: "Part IXA – The Municipalities",
    12: "Part IXB – The Co-operative Societies", 13: "Part X – The Scheduled and Tribal Areas",
    14: "Part XI – Union-State Relations", 15: "Part XII – Finance, Property, Contracts and Suits",
    16: "Part XIII – Trade and Commerce", 17: "Part XIV – Services", 18: "Part XIVA – Tribunals",
    19: "Part XV – Elections", 20: "Part XVI – Special Provisions", 21: "Part XVII – Official Language",
    22: "Part XVIII – Emergency Provisions", 23: "Part XIX – Miscellaneous",
    24: "Part XX – Amendment", 25: "Part XXI – Temporary and Transitional Provisions"
}

@app.route('/api/parts', methods=['GET'])
def get_all_parts_index():
    return jsonify([{"partNumber": num, "title": part_titles[num]} for num in sorted(part_titles)])

@app.route('/api/parts/<int:part_number>', methods=['GET'])
def get_articles_by_part(part_number):
    try:
        json_path = os.path.join(os.path.dirname(__file__), 'constitution_of_india.json')
        with open(json_path, 'r', encoding='utf-8') as f:
            all_articles = json.load(f)

        start, end = part_ranges.get(part_number, (None, None))
        if start is None:
            return jsonify({'error': 'Invalid part number'}), 404

        filtered_articles = []
        for article in all_articles:
            try:
                if start <= int(article['article']) <= end:
                    filtered_articles.append(article)
            except:
                continue

        return jsonify({
            "partNumber": part_number,
            "title": part_titles[part_number],
            "articles": filtered_articles
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ------------------ Auth Routes ------------------ #
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = generate_password_hash(data['password'])

    conn = connect_db()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
        conn.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except pymysql.err.IntegrityError:
        return jsonify({'message': 'User already exists'}), 409
    finally:
        conn.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    conn.close()

    if user and check_password_hash(user['password'], password):
        login_user(User(user))
        return jsonify({'message': 'Login successful', 'user': user}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'}), 200

# ------------------ Chatbot ------------------ #
@app.route('/ask', methods=['POST'])
@login_required
def ask():
    data = request.get_json()
    question = data.get('question', '').strip()
    if not question:
        return jsonify({'answer': 'Please enter a valid question.'})

    try:
        relevance_prompt = (
            f"Is the following question related to Indian law, Constitution, rights, duties, judiciary, legal provisions? "
            f"Just answer YES or NO.\n\nQuestion: {question}"
        )
        relevance_check = model.generate_content(relevance_prompt)
        if 'no' in relevance_check.text.lower():
            return jsonify({'answer': '⚠ This question appears unrelated to Indian law or Constitution.'})

        response = model.generate_content(question)
        return jsonify({'answer': response.text.strip()})
    except Exception as e:
        print("Error:", e)
        return jsonify({'answer': 'Something went wrong while generating a response.'})

# ------------------ Quiz ------------------ #
@app.route('/quiz/generate', methods=['POST'])
@login_required
def generate_quiz():
    try:
        prompt = (
            "Generate 10 multiple-choice questions related to the Indian Constitution. "
            "Format as JSON list with keys: question (string), options (list of 4), answer (index 0-3). "
            "Include 3 easy, 4 medium, 3 hard questions. Do not add any explanation or markdown, just pure JSON."
        )
        response = model.generate_content(prompt)
        raw_text = response.text.strip()
        if raw_text.startswith("```"):
            raw_text = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw_text, flags=re.IGNORECASE | re.MULTILINE)

        questions = json.loads(raw_text)
        if not isinstance(questions, list) or len(questions) != 10:
            return jsonify({'error': 'AI returned invalid quiz format'}), 500

        return jsonify({'questions': questions})
    except Exception as e:
        print("Quiz Error:", str(e))
        return jsonify({'error': 'Failed to generate quiz'}), 500

@app.route('/quiz/submit', methods=['POST'])
@login_required
def submit_quiz():
    data = request.get_json()
    score = data.get('score')

    conn = connect_db()
    cursor = conn.cursor()
    try:
        cursor.execute(
            "INSERT INTO quiz_attempts (user_id, score) VALUES (%s, %s)",
            (current_user.id, score)
        )
        cursor.execute(
            "UPDATE users SET score = GREATEST(score, %s) WHERE id = %s",
            (score, current_user.id)
        )
        cursor.execute(
            "SELECT username, score FROM users ORDER BY score DESC LIMIT 5"
        )
        leaderboard = cursor.fetchall()

        remarks = (
            "🎉 Excellent! You’ve mastered the Constitution!" if score >= 9 else
            "👍 Good job! You know your rights and duties well." if score >= 6 else
            "📖 Keep learning! You’ll do better next time."
        )

        conn.commit()
        return jsonify({
            'message': 'Score submitted successfully.',
            'remarks': remarks,
            'leaderboard': leaderboard
        })
    except Exception as e:
        print("Submit error:", e)
        return jsonify({'error': 'Failed to submit quiz score.'}), 500
    finally:
        conn.close()

@app.route('/quiz/leaderboard', methods=['GET'])
def leaderboard():
    try:
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT username, MAX(score) as highscore
            FROM users
            GROUP BY username
            ORDER BY highscore DESC
            LIMIT 5
        """)
        top_users = cursor.fetchall()
        return jsonify(top_users)
    except Exception as e:
        print("Leaderboard error:", e)
        return jsonify({'error': 'Could not retrieve leaderboard'}), 500
    finally:
        conn.close()

# ------------------ Run Flask App ------------------ #
if __name__ == '__main__':
    app.run(debug=True)
