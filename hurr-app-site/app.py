from flask import Flask, jsonify, render_template
import json

def openCData():
    with open(r'C:\Users\mlips\code\git\hurricane_coin\hurr-app-site\data\currency.json') as c:
        currencyInfo = json.load(c)
        return currencyInfo

def pairById(indict, ind):
    key = list(indict.keys())[ind]
    value = indict[list(indict.keys())[ind]]
    return {key : value}

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hurricane/api/v1.0/hurr-rate', methods=['GET'])
def get_all_info():
    currencyInfo = openCData()
    return currencyInfo

@app.route('/hurricane/api/v1.0/hurr-rate/last-rate', methods=['GET'])
def get_last_info():
    currencyInfo = openCData()
    lastRate = pairById(currencyInfo, -1)
    return jsonify(lastRate)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
