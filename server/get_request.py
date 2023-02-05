import requests
import json

# Get all the listings
response = requests.get('http://172.31.128.14:5000/')
print(json.dumps(response.json(), indent=2))

# Get one listing using route parameter
# response = requests.get('https://htn-cockroachdb-workshop-2022.jayantsh.repl.co/1004098')
# print(json.dumps(response.json(), indent=2))

# Search with query parameters
# response = requests.get('https://htn-cockroachdb-workshop-2022.jayantsh.repl.co/search?min_year=2008&group=Manhattan')
# print(json.dumps(response.json(), indent=2))
