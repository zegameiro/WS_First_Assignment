import json
from f1_pitstop.graph_db import db
from app.constants import PRED, TYPE, NS

def get_all_races_by_date():
    """Get all the races grouped by year"""

    query = f"""
        PREFIX ns: <{NS}>
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>
        SELECT ?raceName (GROUP_CONCAT(CONCAT(STR(?raceId), "__", STR(?year)); SEPARATOR=",") AS ?raceDetails)
        WHERE {{
            ?raceId a type:Race ;
                pred:name ?raceName ;
                pred:year ?year .
        }}
        GROUP BY ?raceName
    """

    res = db.query(query)
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
