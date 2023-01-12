from moralis import evm_api
import psycopg2, datetime, time

def get_price(params):
    price = evm_api.token.get_token_price(
    api_key=api_key,
    params=params,)
    return price
i = 0
api_key = "EtJjji5mbKKcsN3YvnvUCDAEV8vRr23NXRtXokoQMj4okFcNAFGM5Jr1dOFSbPMk"

connect_info_psq = "dbname= hurricane_coin user=postgres password=Mamont263_"
params = {
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", 
    "chain": "eth"
}

conn = psycopg2.connect(connect_info_psq)
cur = conn.cursor()

while i != 20:
    i += 1
    token_info = get_price(params)
    token_price = token_info['usdPrice']
    current_date = str(datetime.datetime.now())[:19]
    cur.execute("""
    INSERT INTO hurr_rate (currency, date) 
    VALUES (%s, %s);
    """,
    (float(token_price), current_date))
    conn.commit()
    time.sleep(60.0)                                                                                                                                                    

cur.close()
conn.close()
