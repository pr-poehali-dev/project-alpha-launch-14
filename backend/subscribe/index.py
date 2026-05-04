import json
import os
import psycopg2
import re


def handler(event: dict, context) -> dict:
    """Подписка пользователя на рассылку НЕ ДОЧИТАЛ по email."""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    if event.get('httpMethod') != 'POST':
        return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body') or '{}')
    email = (body.get('email') or '').strip().lower()

    if not email or not re.match(r'^[^@]+@[^@]+\.[^@]+$', email):
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Некорректный email'})}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    cur.execute("SELECT id FROM subscribers WHERE email = %s", (email,))
    if cur.fetchone():
        conn.close()
        return {'statusCode': 409, 'headers': cors, 'body': json.dumps({'error': 'Уже подписан'})}

    cur.execute("INSERT INTO subscribers (email) VALUES (%s)", (email,))
    conn.commit()
    conn.close()

    return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}