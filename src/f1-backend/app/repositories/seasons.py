from f1_pitstop.graph_db import db
from app.constants import *

def retrieve_all_seasons():
    """Retrieve all seasons from the database with pagination."""

    query = f"""
        PREFIX ns: <{NS}>
        PREFIX pred: <{PRED}>
        PREFIX type: <{TYPE}>

        SELECT ?year ?url
        WHERE {{
            ?year a type:Season ;
                pred:url ?url
        }}
        ORDER BY ?year
    """

    res = db.query(query)

    return res