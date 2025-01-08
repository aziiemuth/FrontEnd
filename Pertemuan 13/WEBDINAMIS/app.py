from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import pymysql
import pymysql.cursors

app = Flask(__name__)

conn = cursor = None
#fungsi koneksi database
def openDb():
    global conn, cursor
    conn = pymysql.connect(host="localhost", user="root", passwd="", database="crud_dbmysql")
    cursor = conn.cursor()
#fungsi untuk menutup koneksi
def closeDb():
    global conn, cursor
    cursor.close()
    conn.close()
#fungsi view index() untuk menampilkan data dari database
@app.route("/")
@app.route("/main")
def main():
    openDb()
    container = []
    sql = "SELECT * FROM stikom"
    cursor.execute(sql)
    results = cursor.fetchall()
    for data in results:
        container.append(data)
    closeDb()
    return render_template('home.html', container=container)

if __name__ == "__main__":
    app.run()
