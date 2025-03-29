from f1_pitstop.graph_db import db
from app.constants import *

import json

def get_all_drivers(page):
    """Get all the drivers"""

    offset = (page - 1) * LIMIT

    query = f"""
        PREFIX ns: <{NS}>
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>

        SELECT ?driverId ?number ?code ?forename ?surname ?dob ?nationality ?url
        WHERE {{
            ?driverId a type:Driver ;
                pred:forename ?forename ;
                pred:surname ?surname ;
                pred:dob ?dob ;
                pred:nationality ?nationality ;
                pred:url ?url .
                
            OPTIONAL {{
                ?driverId pred:number ?number ;
                        pred:code ?code .
            }}
        }}
        ORDER BY ?forename
        LIMIT {LIMIT}
        OFFSET {offset}
    """

    res = db.query(query)
    data = json.loads(res)
    results = []

    for binding in data['results']['bindings']:
        driver = {}

        driver['driverId'] = binding['driverId']['value']
        driver['forename'] = binding['forename']['value']
        driver['surname'] = binding['surname']['value']
        driver['dob'] = binding['dob']['value']
        driver['nationality'] = binding['nationality']['value']
        driver['url'] = binding['url']['value']

        if 'number' in binding.keys():
            driver['number'] = binding['number']['value']
        if 'code' in binding.keys():
            driver['code'] = binding['code']['value']
        
        results.append(driver)

    return results
    