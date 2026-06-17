import pandas as pd
import re
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

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

def main():
    print("Loading dataset 'Phishing_Email.csv'...")
    df = pd.read_csv("Phishing_Email.csv")
    
    print("Pre-processing text...")
    df = df.dropna(subset=["Email Text", "Email Type"])
    df["Cleaned Text"] = df["Email Text"].apply(preprocess_text)
    
    X = df["Cleaned Text"]
    y = df["Email Type"]
    
    print(f"Dataset size: {len(df)} rows.")
    print("Split data into train and test sets...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.15, random_state=42)
    
    print("Training model pipeline (TF-IDF + LogisticRegression)...")
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(max_features=25000, stop_words='english', ngram_range=(1, 2))),
        ('clf', LogisticRegression(max_iter=1000, C=1.0))
    ])
    
    pipeline.fit(X_train, y_train)
    
    print("Evaluating model...")
    predictions = pipeline.predict(X_test)
    print(classification_report(y_test, predictions))
    
    print("Saving trained pipeline to 'phishing_model.pkl'...")
    with open("phishing_model.pkl", "wb") as f:
        pickle.dump(pipeline, f)
        
    print("Model trained and saved successfully!")

if __name__ == "__main__":
    main()
