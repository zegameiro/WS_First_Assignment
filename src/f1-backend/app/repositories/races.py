from f1_pitstop.graph_db import db
from app.constants import *

def retrieve_races_by_date(offset):
    """Retrieve all seasons from the database with pagination."""

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
        LIMIT {LIMIT}
        OFFSET {offset}
    """

    res = db.query(query)

    return res

def retrieve_races_by_year(year, offset):
    query = f"""
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>
        SELECT ?raceId ?raceName ?driverId ?constructorId ?fastestLap ?winnerDriverId ?winnerConstructorId
        WHERE {{
            {{
                SELECT ?raceId ?raceName (MIN(?fastest) AS ?minFastestLap)
                WHERE {{
                    ?raceId a type:Race ;
                        pred:name ?raceName ;
                        pred:year "{year}"^^xsd:int .
                    ?result a type:Result ;
                        pred:raceId ?raceId ;
                        pred:fastestLapTime ?fastest .
                }}
                GROUP BY ?raceId ?raceName
            }}
            
            ?result a type:Result ;
                    pred:raceId ?raceId ;
                    pred:fastestLapTime ?fastestLap ;
                    pred:driverId ?driverId ;
                    pred:constructorId ?constructorId ;
                    pred:position ?position .
                    
            FILTER(?fastestLap = ?minFastestLap)

            ?winnerResult a type:Result ;
                    pred:raceId ?raceId ;
                    pred:driverId ?winnerDriverId ;
                    pred:constructorId ?winnerConstructorId ;
                    pred:position "1"^^xsd:string .

        }}
        LIMIT {LIMIT}
        OFFSET {offset}
    """


    res = db.query(query)

    return res