from f1_pitstop.graph_db import db
from app.constants import *
from app.repositories.seasons import *


import json

def get_all_seasons():
    """Get all the seasons"""

    res = retrieve_all_seasons()
    data = json.loads(res)
    results = []

    for binding in data['results']['bindings']:
        season = {}
        season['seasonId'] = binding['year']['value']
        season['year'] = binding['year']['value'].split("/")[-1]
        season['url'] = binding['url']['value']
        results.append(season)

    return results