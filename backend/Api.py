from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import re

# ==========================================
# Load Model Pipeline
# ==========================================
with open("phishing_model.pkl", "rb") as f:
    model = pickle.load(f)

# ==========================================
# Flask App
# ==========================================
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from the React frontend

# ==========================================
# Text Cleaning Function
# ==========================================
def preprocess_text(text):
    if not isinstance(text, str):
        return ""
    # Remove URLs
    text = re.sub(r"http\S+", "", text)

    # Remove punctuation
    text = re.sub(r"[^\w\s]", "", text)

    # Convert to lowercase
    text = text.lower()

    # Remove extra spaces
    text = re.sub(r"\s+", " ", text).strip()

    return text


# ==========================================
# Prediction Function
# ==========================================
def predict_email(email_text):
    # Clean text
    email_text = preprocess_text(email_text)

    # Predict using the loaded scikit-learn pipeline
    label = model.predict([email_text])[0]

    return label


# ==========================================
# Home Route
# ==========================================
@app.route("/")
def home():
    return "Phishing Email Detection API Running"


# ==========================================
# Prediction Route
# ==========================================
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        if not data or "email" not in data:
            return jsonify({
                "error": "Provide email field"
            }), 400

        prediction = predict_email(data["email"])

        return jsonify({
            "prediction": prediction
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# ==========================================
# Run App
# ==========================================
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )