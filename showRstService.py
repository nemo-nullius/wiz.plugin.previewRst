from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from subprocess import check_output
import os

app = Flask(__name__)
CORS(app)


@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')


@app.route('/showrst', methods=['POST'], host='127.0.0.1')
def showRst():
    originalText = request.data
    #originalText = originalText.decode('utf-8')
    #print('Original Text:', originalText)
    with open('./tmp', 'wb') as f:
        f.write(originalText)
    cmd = "rst2html.py ./tmp \
        --stylesheet=./rhythm.css/dist/css/rhythm.css,./rhythm.css/syntax/molokai.css \
        --syntax-highlight=short \
        > ./tmp.html"
    #check_output("rst2html.py ./tmp ./tmp.html", shell=True).decode()
    check_output(cmd, shell=True).decode()
    os.startfile('tmp.html')
    return jsonify({'toHtml':originalText.decode('utf-8')})


if __name__ == "__main__":
    app.run()

