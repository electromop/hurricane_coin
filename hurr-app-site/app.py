from flask import Flask, jsonify, render_template
import psycopg2
import psycopg2.extras

def l2d(info): #list to dict
    info_pair = []
    for row in info:
        info_pair.append(dict(row))
    return info_pair

connect_info_psq = "dbname= hurricane_coin user=postgres password=Mamont263_"
conn = psycopg2.connect(connect_info_psq)
cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hurricane/api/v1.0/hurr-rate', methods=['GET'])
def get_all_info():
    cur.execute("""SELECT currency, date FROM hurr_rate""")
    all_info = cur.fetchall()
    all_info_pair = l2d(all_info)
    return jsonify({'info': all_info_pair})

@app.route('/hurricane/api/v1.0/hurr-rate/last-rate', methods=['GET'])
def get_last_info():
    cur.execute("""SELECT currency, date 
                FROM hurr_rate 
                ORDER BY date DESC 
                LIMIT 1""")
    last_info = cur.fetchall()
    last_info_pair = l2d(last_info)
    return jsonify({'info': last_info_pair})

# @app.route('hurricane/api/v1.0/hurr-rate', methods=['DELETE'])
# def delete_row():
#     cur.execute("""
#                 """)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
