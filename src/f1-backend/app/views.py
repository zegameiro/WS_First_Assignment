from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from app.services.races import *
from app.services.driver import *
from app.services.seasons import *
from app.services.constructors import *

# Get all the races grouped by year
@api_view(['GET'])
def get_all_races_by_date_view(request):
    page = int(request.GET.get('page', 1))
    results = get_all_races_by_date(page)
    final_res = {
        'data': results
    }

    return Response(final_res, status=status.HTTP_200_OK)

# Get all the drivers
@api_view(['GET'])
def get_all_drivers_view(request):
    page = int(request.GET.get('page', 1))
    results = get_all_drivers(page)
    final_res = {
        'data': results
    }
    return Response(final_res, status=status.HTTP_200_OK)

# Get drivers by regex
@api_view(['GET'])
def search_drivers_view(request):
    page = int(request.GET.get('page', 1))
    regex = request.GET.get('query', "")
    results = search_drivers(regex, page)
    final_res = {
        'data': results
    }
    return Response(final_res, status=status.HTTP_200_OK)

# Get all the seasons
@api_view(['GET'])
def get_all_seasons_view(request):
    page = int(request.GET.get('page', 1))
    results = get_all_seasons(page)
    final_res = {
        'data': results
    }
    return Response(final_res, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_all_constructors_view(request):

    results = get_all_constructors()
    final_res = {
        'data': results
    }

    return Response(final_res, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_constructors_by_nationality_view(request):

    results = get_constructors_by_nationality()
    final_res = {
        'data': results
    }

    return Response(final_res, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_constructors_by_id_view(request):
    
    if not request.body:
        return Response("Missing Body", status=status.HTTP_404_NOT_FOUND)
    data = json.loads(request.body.decode('utf-8'))
    if "id" not in data:
        return Response("Missing Constructor ID", status=status.HTTP_404_NOT_FOUND)
    
    constructor_id = data["id"]
    results = get_constructors_by_id(constructor_id)
    final_res = {
        'data': results
    }        

    return Response(final_res, status=status.HTTP_200_OK)
