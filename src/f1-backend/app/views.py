from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from app.services.races import *

# Get all the races grouped by year
@api_view(['GET'])
def get_all_races_by_date_view(request):

    results = get_all_races_by_date()
    final_res = {
        'data': results
    }

    return Response(final_res, status=status.HTTP_200_OK)

