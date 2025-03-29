from f1_pitstop.graph_db import db
from app.constants import *

import json

def get_all_seasons():
    """Get all the seasons"""

    query = f"""
        PREFIX ns: <{NS}>
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>

        SELECT ?year ?url
        WHERE {{
            ?year a type:Season ;
                pred:url ?url
        }}
        ORDER BY ?year
    """

    res = db.query(query)
    data = json.loads(res)
    results = []

    for binding in data['results']['bindings']:
        season = {}
        season['seasonId'] = binding['year']['value']
        season['year'] = binding['year']['value'].split("/")[-1]
        season['url'] = binding['url']['value']
        results.append(season)

    return results