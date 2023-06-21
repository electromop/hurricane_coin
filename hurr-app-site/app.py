from threading import Thread
from flask import Flask, jsonify, render_template
from moralis import evm_api
import datetime, time, json

def openCData():
    with open(r'C:\Users\user\Desktop\codes\__projects\hurricane_coin\hurr-app-site\data\currency.json') as c:
        currencyInfo = json.load(c)
        return currencyInfo

def lastDict(indict, id):
    keys = list(indict.keys())[id:]
    values = list(indict.values())[id:]
    last_dict = {}
    for i in range(len(keys)):
        last_dict[keys[i]] = values[i]
    return last_dict

def get_price(params, api_key):
    price = evm_api.token.get_token_price(
    api_key=api_key,
    params=params,)
    return price

def fill_bd():
    while True:
        with open(r'C:\Users\user\Desktop\codes\__projects\hurricane_coin\hurr-app-site\data\currency.json') as d:
            currencyInfo = json.load(d)
        
        token_info = get_price(params, api_key)
        token_price = token_info['usdPrice']
        current_date = str(datetime.datetime.now())[11:19]
        currencyInfo[current_date] = token_price
        print('Updated info: ', token_price, current_date)

        with open(r'C:\Users\user\Desktop\codes\__projects\hurricane_coin\hurr-app-site\data\currency.json', 'w') as j:
            j.write(json.dumps(currencyInfo))
        time.sleep(60.0 * updateTime)

api_key = "EtJjji5mbKKcsN3YvnvUCDAEV8vRr23NXRtXokoQMj4okFcNAFGM5Jr1dOFSbPMk"
params = {
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "chain": "eth"
}
updateTime = 30 #update interval in minutes

thread1 = Thread(target=fill_bd, args=(), daemon=True) # Создаем поток
thread1.start()

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
    lastRate = lastDict(currencyInfo, -20)
    return jsonify(lastRate)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8090, debug=True)
