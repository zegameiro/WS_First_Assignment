from f1_pitstop.graph_db import db
from app.constants import *
from app.repositories.driver import *

import json

def get_all_drivers(page):
    """Get all the drivers"""

    offset = (page - 1) * LIMIT

    res = retrieve_all_drivers(offset)
    data = json.loads(res)

    results = []

    for binding in data['results']['bindings']:
        driver = {}

        driver['driverId'] = binding['driverId']['value']
        driver['forename'] = binding['forename']['value']
        driver['surname'] = binding['surname']['value']
        driver['nationality'] = binding['nationality']['value']

        if 'number' in binding.keys():
            driver['number'] = binding['number']['value']
            
        if 'code' in binding.keys():
            driver['code'] = binding['code']['value']
        
        results.append(driver)

    return results

def search_drivers(regex, page):
    """Get all the drivers"""

    offset = (page - 1) * LIMIT

    res = retrieve_drivers_by_regex(regex, offset)
    data = json.loads(res)
    results = []

    for binding in data['results']['bindings']:
        driver = {}

        driver['driverId'] = binding['driverId']['value']
        driver['forename'] = binding['forename']['value']
        driver['surname'] = binding['surname']['value']
        driver['nationality'] = binding['nationality']['value']

        results.append(driver)

    return results