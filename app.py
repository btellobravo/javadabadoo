import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/influx-lat_lon.sqlite"

db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
inflow_coordinates = Base.classes.inflow_coordinates
lineas_estaciones = Base.classes.lineas_estaciones


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/names")
def names():
    """Return a list of station names"""

    # Use Pandas to perform the sql query
    stmt = db.session.query(lineas_estaciones).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (station names)
    return jsonify(list(df.columns)[2:])


@app.route("/metadata/<Station>")
def sample_metadata(Station):
    """Return the MetaData for a given Station."""
    sel = [
        
        inflow_coordinates.Total_influx_2012,
        inflow_coordinates.Total_influx_2013,
        inflow_coordinates.Total_influx_2014,
        inflow_coordinates.Total_influx_2015,
        inflow_coordinates.Total_influx_2016,
        inflow_coordinates.Total_influx_2017,
        inflow_coordinates.Total_influx_2018,
        inflow_coordinates.Total_influx_2019,
        
    ]

    results = db.session.query(*sel).filter(inflow_coordinates.Station == Station).all()

    # Create a dictionary entry for each row of metadata information
    inflow_coordinates = {}
    for result in results:
        inflow_coordinates["Total_influx_2012,"] = result[0]
        inflow_coordinates["Total_influx_2013,"] = result[1]
        inflow_coordinates["Total_influx_2014,"] = result[2]
        inflow_coordinates["Total_influx_2015,"] = result[3]
        inflow_coordinates["Total_influx_2016,"] = result[4]
        inflow_coordinates["Total_influx_2017,"] = result[5]
        inflow_coordinates["Total_influx_2018,"] = result[6]
        inflow_coordinates["Total_influx_2019,"] = result[7]
       

    print(inflow_coordinates)
    return jsonify(inflow_coordinates)


@app.route("/Station/<Station>")
def samples(Station):
    """Return `line_ids`, `line_labels`,and `Station_values`."""
    stmt = db.session.query(lineas_estaciones).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Filter the data based on the sample number and
    # only keep rows with values above 1
    Station_data = df.loc[df[Station] > 1, ["line_id", "line_label", Station]]

    # Sort by sample
    Station_data.sort_values(by=Station, ascending=False, inplace=True)

    # Format the data to send as json
    data = {
        "line_ids": Station_data.line_id.values.tolist(),
        "Station_values": Station_data[Station].values.tolist(),
        "line_labels": Station_data.line_label.tolist(),
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run()
