from flask import Flask, jsonify, request
import json
import os
import psycopg2
import psycopg2.extras

# Create a Flask server.
app = Flask(__name__)

# Create a cursor and initialize psycopg
pg_conn_string = os.environ["PG_CONN_STRING"]
connection = psycopg2.connect(pg_conn_string)
# Set to automatically commit each statement
connection.set_session(autocommit=True)

# Creating a group cursor and 'groups' table.
group_connect_cursor = connection.cursor()
group_connect_cursor.execute("SHOW TABLES")
# print(group_connect_cursor.fetchall())
group_connect_cursor.execute("DROP TABLE spotify_groups")
group_connect_cursor.execute(
  "CREATE TABLE spotify_groups (id SERIAL PRIMARY KEY, title STRING, dj_id STRING)"
)
song_connect_cursor = connection.cursor()
# song_connect_cursor.execute(
#   "CREATE TABLE songs (track_id STRING PRIMARY KEY, song_name STRING, group_id FOREIGN KEY REFERENCES spotify_groups(id)"
# )

cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

cursor.execute(
  "INSERT INTO spotify_groups VALUES (%s, %s, %s)",
  (1234567, "my_group_1", "DJ Khaled except he is not a DJ whatsoever"))

# cursor.execute("INSERT INTO songs VALUES (%s, %s, %s)",
#                ("id1", "Welcome to the Black Parade", 1234567))

# cursor.execute("INSERT INTO songs VALUES (%s, %s, %s)",
#                ("id1", "Welcome to the Black Parade", 2321434))


## Getting all the rows in the 'groups' table.
def db_get_all_groups():
  cursor.execute('SELECT * FROM spotify_groups')
  results = cursor.fetchall()
  return results


def db_get_by_group_id(id):
  cursor.execute('SELECT * FROM spotify_groups WHERE id = %s', [id])
  result = cursor.fetchone()
  return result


def db_get_songs_by_group_id(id):
  cursor.execute('SELECT * FROM songs WHERE id = %s', [id])
  result = cursor.fetchall()
  return result


# def db_filter_listings(min_year, group):
#     cursor.execute(
#         'SELECT * FROM airbnbs WHERE neighbourhood_group = %s AND year >= %s',
#         (group, min_year))
#     result = cursor.fetchall()
#     return result

# def db_create_airbnb(title, name, neighbourhood, neighbourhood_group, verified,
#                      year):
#     cursor.execute(
#         "INSERT INTO airbnbs (title, host_name, neighbourhood, neighbourhood_group, verified, year) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
#         (title, name, neighbourhood, neighbourhood_group, verified, year))
#     result = cursor.fetchall()
#     return result

# def db_update_title(id, new_title):
#     cursor.execute("UPDATE airbnbs SET title = %s WHERE id = %s RETURNING id",
#                    (new_title, id))
#     result = cursor.fetchall()
#     return result

# def db_delete_listing(id):
#     cursor.execute("DELETE FROM airbnbs WHERE id = %s RETURNING id", (id, ))
#     result = cursor.fetchall()
#     return result


# Routes!
@app.route('/', methods=['GET'])
def get_all_groups():
  return jsonify(db_get_all_groups())


@app.route('/<id>', methods=['GET'])
def get_by_group_id(id):
  return jsonify(db_get_by_group_id(id))


@app.route('/<id>', methods=['GET'])
def get_songs_by_group_id(id):
  return jsonify(db_get_songs_by_group_id(id))


# @app.route("/<id>", methods=['GET'])
# def get_by_id(id):
#     airbnb = db_get_by_id(id)
#     if not airbnb:
#         return jsonify({"error": "invalid id", "code": 404})
#     return jsonify(airbnb)

# @app.route("/search", methods=['GET'])
# def filter_listings():
#     result = db_filter_listings(int(request.args.get('min_year')),
#                                 request.args.get('group'))
#     return jsonify(result)

# @app.route("/", methods=['POST'])
# def create_airbnb():
#     new_airbnb = request.json
#     try:
#         res = db_create_airbnb(new_airbnb['title'], new_airbnb['name'],
#                                new_airbnb['neighbourhood'],
#                                new_airbnb['neighbourhood_group'],
#                                new_airbnb['verified'], new_airbnb['year'])
#         return jsonify(res)

#     except Exception as e:
#         return jsonify({"error": str(e)})

# @app.route("/<id>", methods=['PUT'])
# def update_title(id):
#     try:
#         title = request.json['title']

#         return jsonify(db_update_title(id, title))
#     except Exception as e:
#         return jsonify({"error": str(e)})

# @app.route("/<id>", methods=['DELETE'])
# def delete_book(id):
#     try:
#         return jsonify(db_delete_listing(id))
#     except Exception as e:
#         return jsonify({"error": str(e)})

# Runs the API and exposes it on https://<repl name>.<replit username>.repl.co
# ex. Mine deploys to https://htn-api.jayantsh.repl.co.
app.run(host="0.0.0.0", debug=True)
