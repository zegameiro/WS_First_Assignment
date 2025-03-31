"""
URL configuration for f1_pitstop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import app.views

urlpatterns = [
    path('admin/', admin.site.urls),

    # Races Endpoints
    path('races/', app.views.get_all_races_by_date_view, name="all_races"),
    path('races/<int:year>/', app.views.get_all_races_by_year_view, name="races_by_year"),
    path('races/name/<str:raceName>/', app.views.get_races_by_name_view, name="races_by_name"),

    # Constructor Endpoints
    path('constructors/', app.views.get_all_constructors_view, name="all_constructors"),
    path('constructors/nationality', app.views.get_constructors_by_nationality_view, name="constructors_by_nationality"),
    path('constructors/id', app.views.get_constructors_by_id_view, name="constructors_by_id"),

    # Driver Endpoints
    path('drivers/', app.views.get_all_drivers_view, name="all_drivers"),
    path('drivers/<int:driverId>', app.views.get_driver_by_id_view, name="driver_by_id"),
    path('drivers/search', app.views.search_drivers_view, name="search_drivers"),

    # Seasons Endpoints
    path('seasons/', app.views.get_all_seasons_view, name="all_seasons"),
    path('seasons/podium/driver/<int:year>', app.views.get_season_podium_view, name="get_driver_podium")
]
