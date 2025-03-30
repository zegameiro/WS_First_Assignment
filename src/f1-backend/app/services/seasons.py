from f1_pitstop.graph_db import db
from app.constants import *
from app.repositories.seasons import *


import json

def get_all_seasons(page):
    """Get all the seasons"""
    
    offset = (page - 1) * LIMIT

    res = retrieve_all_seasons(offset)
    data = json.loads(res)
    results = []

    for binding in data['results']['bindings']:
        season = {}
        season['seasonId'] = binding['year']['value']
        season['year'] = binding['year']['value'].split("/")[-1]
        season['url'] = binding['url']['value']
        results.append(season)

    return results