from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import json
from werkzeug.security import generate_password_hash, check_password_hash
import os
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# DB connection
def connect_db():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='Siddhesh@5',
        database='coi_auth',
        cursorclass=pymysql.cursors.DictCursor
    )

# Fixed article range mapping for parts
part_ranges = {
    1: (1, 4),
    2: (5, 11),
    3: (12, 35),
    4: (36, 51),
    5: (52, 78),
    6: (79, 123),
    7: (124, 124),
    8: (125, 148),
    9: (149, 151),
    10: (152, 153),
    11: (154, 167),
    12: (168, 242),
    13: (243, 243),
    14: (244, 244),
    15: (245, 263),
    16: (264, 267),
    17: (268, 281),
    18: (282, 300),
    19: (301, 311),
    20: (312, 323),
    21: (324, 329),
    22: (330, 342),
    23: (343, 351),
    24: (352, 360),
    25: (361, 395),
}

part_titles = {
    1: "Part I – The Union and Its Territory",
    2: "Part II – Citizenship",
    3: "Part III – Fundamental Rights",
    4: "Part IV – Directive Principles of State Policy",
    5: "Part IVA – Fundamental Duties",
    6: "Part V – The Union",
    7: "Part VI – The States",
    8: "Part VII – The States in Part B of the First Schedule (Repealed)",
    9: "Part VIII – The Union Territories",
    10: "Part IX – The Panchayats",
    11: "Part IXA – The Municipalities",
    12: "Part IXB – The Co-operative Societies",
    13: "Part X – The Scheduled and Tribal Areas",
    14: "Part XI – Relations Between the Union and the States",
    15: "Part XII – Finance, Property, Contracts and Suits",
    16: "Part XIII – Trade and Commerce Within the Territory of India",
    17: "Part XIV – Services Under the Union and the States",
    18: "Part XIVA – Tribunals",
    19: "Part XV – Elections",
    20: "Part XVI – Special Provisions Relating to Certain Classes",
    21: "Part XVII – Official Language",
    22: "Part XVIII – Emergency Provisions",
    23: "Part XIX – Miscellaneous",
    24: "Part XX – Amendment of the Constitution",
    25: "Part XXI – Temporary, Transitional and Special Provisions"
}

@app.route('/api/parts', methods=['GET'])
def get_all_parts_index():
    part_index = [
        {
            "partNumber": num,
            "title": part_titles[num]
        }
        for num in sorted(part_titles.keys())
    ]
    return jsonify(part_index)

@app.route('/api/parts/<int:part_number>', methods=['GET'])
def get_articles_by_part(part_number):
    try:
        json_path = os.path.join(os.path.dirname(__file__), 'constitution_of_india.json')
        print("DEBUG: Accessing JSON file at:", json_path)

        with open(json_path, 'r', encoding='utf-8') as f:
            all_articles = json.load(f)

        start, end = part_ranges.get(part_number, (None, None))
        if start is None or end is None:
            return jsonify({'error': 'Invalid part number'}), 404

        filtered_articles = []

        for article in all_articles:
            article_num = article.get('article')
            try:
                article_num = int(article_num)
                if start <= article_num <= end:
                    filtered_articles.append(article)
            except (ValueError, TypeError):
                continue

        return jsonify({
            "partNumber": part_number,
            "title": part_titles[part_number],
            "articles": filtered_articles
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500



# Register and login (same as your original)
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
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Set your Gemini API key (store securely in production)
genai.configure(api_key="AIzaSyACCD7aYQD1GvGe2iXLqWcAYwhNR15_KX0")

# Initialize Gemini model
# Initialize Gemini 1.5 Flash model
model = genai.GenerativeModel("models/gemini-1.5-flash")



@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '').strip()

    if not question:
        return jsonify({'answer': 'Please enter a valid question.'})

    try:
        # Step 1: Use Gemini to classify if it's relevant to Indian Constitution
        relevance_prompt = (
            f"Is the following question related to Indian law, Indian Constitution, fundamental rights, duties, "
            f"judiciary, legislature, executive, legal procedures, or Supreme Court cases? "
            f"Just answer YES or NO. \n\nQuestion: {question}"
        )

        relevance_check = model.generate_content(relevance_prompt)
        relevance_response = relevance_check.text.strip().lower()

        if 'no' in relevance_response:
            return jsonify({'answer': '⚠️ This question appears to be out of the context of Indian law or Constitution.'})

        # Step 2: Proceed with main response if it's relevant
        response = model.generate_content(question)
        answer = response.text.strip()
        return jsonify({'answer': answer})

    except Exception as e:
        print("Error:", e)
        return jsonify({'answer': 'Sorry, something went wrong while generating a response.'})

    
if __name__ == '__main__':
    app.run(debug=True)
