from f1_pitstop.graph_db import db
from app.constants import *
from app.repositories.races import *

import json

def get_all_races_by_date():
    """Get all the races grouped by year"""

    res = retrieve_races_by_date
    data = json.loads(res)

    results = []
    for binding in data['results']['bindings']:
        d = {}
        d['raceName'] = binding['raceName']['value']
        raceDetails = binding['raceDetails']['value'].split(",")

        d['raceDetails'] = []
        for raceDetail in raceDetails:
            raceId, year = raceDetail.split("__")
            d['raceDetails'].append({
                'raceId': raceId,
                'year': year
            })
        results.append(d)

    return results
