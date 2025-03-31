from datetime import datetime
from f1_pitstop.graph_db import db
from app.constants import *
from app.repositories.races import *

import json

def get_all_races_by_date(page):
    """Get all the races grouped by year"""

    offset = (page - 1) * LIMIT

    res = retrieve_races_by_date(offset)
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

        d['raceDetails'].sort(key=lambda x: x['year'], reverse=True)
        
        results.append(d)

    results.sort(key=lambda x: x['raceName'])

    return results

def get_all_races_by_year(year, page):

    offset = (page - 1) * LIMIT

    res = retrieve_races_by_year(year, offset)
    data = json.loads(res)

    results = []
    for binding in data['results']['bindings']:
        d = {}
        d['raceName'] = binding['raceName']['value']
        d['raceId'] = binding['raceId']['value']
        d['date'] = binding['raceDate']['value']
        d['winner'] = {
            "driverId": binding['winnerDriverId']['value'],
            "driverName": binding['winnerDriverName']['value'],
            "constructorId": binding['winnerConstructorId']['value'],
            "constructorName": binding['winnerConstructorName']['value'],
            "fastestLap": binding['winnerfastestLap']['value'],
        }
        d['fastestLap'] = {
            "time": binding['fastestLap']['value'],
            "driverId": binding['fastestDriverId']['value'],
            "driverName": binding['fastestDriverName']['value'],
            "constructorId": binding['fastestConstructorId']['value'],
            "constructorName": binding['fastestConstructorName']['value']
        }
        
        results.append(d)

    return results
