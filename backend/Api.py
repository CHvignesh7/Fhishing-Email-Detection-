# pyrefly: ignore [missing-import]
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
# pyrefly: ignore [missing-import]
from tensorflow.keras.preprocessing.sequence import pad_sequences

import pickle
import re

# ==========================================
# Load Model
# ==========================================
model = load_model("model.keras")

# ==========================================
# Load Tokenizer
# ==========================================
with open("tokenizer.pkl", "rb") as f:
    tokenizer = pickle.load(f)

# ==========================================
# Load Label Encoder
# ==========================================
with open("label_encoder.pkl", "rb") as f:
    label_encoder = pickle.load(f)

# ==========================================
# Flask App
# ==========================================
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from the React frontend

MAX_LEN = 150

# ==========================================
# Text Cleaning Function
# ==========================================
def preprocess_text(text):

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

    # Tokenize
    sequence = tokenizer.texts_to_sequences([email_text])

    # Padding
    padded_sequence = pad_sequences(
        sequence,
        maxlen=MAX_LEN,
        padding="post"
    )

    # Predict
    probability = float(
        model.predict(
            padded_sequence,
            verbose=0
        )[0][0]
    )

    prediction = 1 if probability > 0.5 else 0

    label = label_encoder.inverse_transform(
        [prediction]
    )[0]

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