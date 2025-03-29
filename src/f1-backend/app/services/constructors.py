import json
from f1_pitstop.graph_db import db
from app.constants import PRED, TYPE, NS

def get_all_constructors():
    """Get all constructors"""

    query = f"""
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>
        SELECT ?c ?name ?nationality ?url WHERE {{
            ?c a type:Constructor ;
            pred:name ?name ;
            pred:nationality ?nationality ;
            pred:url ?url .
        }}
    """

    res = db.query(query)
    data = json.loads(res)

    results = []
    for binding in data['results']['bindings']:
        d = {}
        d['id'] = binding['c']['value']
        d['name'] = binding['name']['value']
        d['nationality'] = binding['nationality']['value']
        d['url'] = binding['url']['value']
        results.append(d)

    return results

def get_constructors_by_nationality():
    """Get all the constructors grouped by nationality"""

    query = f"""
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>
        SELECT ?nationality (GROUP_CONCAT(?name; separator=", ") AS ?constructors) WHERE {{
            ?c a type:Constructor ;
            pred:name ?name ;
            pred:nationality ?nationality .
        }}
        GROUP BY ?nationality
    """

    res = db.query(query)
    data = json.loads(res)

    results = []
    for binding in data['results']['bindings']:
        d = {}

        d['nationality'] = binding['nationality']['value']
        d["constructors"] = [constructor for constructor in binding['constructors']['value'].split(", ")]
        results.append(d)

    return results

def get_constructors_by_id(constructor_id):
    """Get a constructor from by it's id"""

    query = f"""
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>
        SELECT ?name ?nationality ?url WHERE {{
            <{constructor_id}> a type:Constructor ;
            pred:name ?name ;
            pred:nationality ?nationality ;
            pred:url ?url .
        }}
    """

    res = db.query(query)
    data = json.loads(res)

    binding = data['results']['bindings'][0]
    result = {}
    result['name'] = binding['name']['value']
    result['nationality'] = binding['nationality']['value']
    result['url'] = binding['url']['value']

    return result