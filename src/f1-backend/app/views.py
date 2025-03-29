from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from f1_pitstop.graph_db import db
import json

# Create your views here.
@api_view(['GET'])
def testDB(request):
    query = """ PREFIX pred: <http://pitstop.org/pred/>
select * where {
    ?s pred:circuitRef ?o .
} limit 100 """
    res = db.query(query)
    
    data = json.loads(res)
    return Response(data)

PRED = "http://pitstop.org/pred/"
TYPE = "http://pitstop.org/type/"
NS = "http://pitstop.org/"

# Get all the races grouped by year
@api_view(['GET'])
def get_all_races_by_date(request):

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

    final_res = {
        'results': results
    }

    return Response(final_res, status=status.HTTP_200_OK)
