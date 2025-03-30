from f1_pitstop.graph_db import db
from app.constants import *

def retrieve_all_drivers(offset):

    query = f"""
        PREFIX ns: <{NS}>
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>

        SELECT ?driverId ?number ?code ?forename ?surname
        WHERE {{
            ?driverId a type:Driver ;
                pred:forename ?forename ;
                pred:surname ?surname ;
                
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

    return res