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