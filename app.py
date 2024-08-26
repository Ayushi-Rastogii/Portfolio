from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import logging
import os

app = Flask(__name__)
CORS(app, resources={r"/send-email": {"origins": "https://portfolio-l16b6q6b6-ayushi-rastogiis-projects.vercel.app"}})


# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # e.g., smtp.gmail.com
app.config['MAIL_PORT'] = '465'
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL')
app.config['MAIL_PASSWORD'] = os.getenv('PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL')#''rastogiayushi98@gmail.com'

mail = Mail(app)
logging.basicConfig(level=logging.DEBUG)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    first_name = data['firstName']
    second_name = data['secondName']
    email = data['email']
    message_content = data['message']

    msg = Message(
        'New Contact Form Submission',
        recipients=['rastogiayushi98@gmail.com']
    )
    msg.body = f"From: {first_name} {second_name} <{email}>\n\nMessage:\n{message_content}"

    try:
        mail.send(msg)
        return jsonify({"message": "Email sent successfully!"}), 200
    except Exception as e:
        return jsonify({"message": "Failed to send email", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,port=5000)
