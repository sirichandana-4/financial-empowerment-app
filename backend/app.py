from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    prediction = random.choice(["High Growth", "Moderate", "Risky"])
    return jsonify({"investment_analysis": prediction})

if __name__ == '__main__':
    app.run(debug=True)
