from moralis import evm_api
import datetime, time
import json, os

def get_price(params):
    price = evm_api.token.get_token_price(
    api_key=api_key,
    params=params,)
    return price

api_key = "EtJjji5mbKKcsN3YvnvUCDAEV8vRr23NXRtXokoQMj4okFcNAFGM5Jr1dOFSbPMk"
params = {
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "chain": "eth"
}

for i in range(30):
    with open('hurr-app-site\data\currency.json') as c:
        currencyInfo = json.load(c)
    
    token_info = get_price(params)
    token_price = token_info['usdPrice']
    current_date = str(datetime.datetime.now())[:19]
    currencyInfo[current_date] = token_price

    with open('hurr-app-site\data\currency.json', 'w') as j:
        j.write(json.dumps(currencyInfo))
    
    time.sleep(60.0)
