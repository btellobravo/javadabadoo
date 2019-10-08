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

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/cdmxmetro.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Stations_Metadata = Base.classes.station_metadata
Stations = Base.classes.stations


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/names")
def names():
    """Return a list of station names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Stations).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (station names)
    return jsonify(list(df.columns)[2:])


@app.route("/metadata/<station>")
def station_metadata(station):
    """Return the MetaData for a given station."""
    sel = [
        Stations_Metadata.Station_Name,
        Stations_Metadata.Total_influx_2012,
        Stations_Metadata.Total_influx_2013,
        Stations_Metadata.Total_influx_2014,
        Stations_Metadata.Total_influx_2015,
        Stations_Metadata.Total_influx_2016,
        Stations_Metadata.Total_influx_2017,
        Stations_Metadata.Total_influx_2018,
        Stations_Metadata.Total_influx_2019,
        Stations_Metadata.Latitude,
        Stations_Metadata.Longitude,
    ]

    results = db.session.query(*sel).filter(Stations_Metadata.station == station).all()

    # Create a dictionary entry for each row of metadata information
    station_metadata = {}
    for result in results:
        station_metadata["Station_Name"] = result[0]
        station_metadata["Total_influx_2012"] = result[1]
        station_metadata["Total_influx_2013"] = result[2]
        station_metadata["Total_influx_2014"] = result[3]
        station_metadata["Total_influx_2015"] = result[4]
        station_metadata["Total_influx_2016"] = result[5]
        station_metadata["Total_influx_2017"] = result[6]
        station_metadata["Total_influx_2018"] = result[7]
        station_metadata["Total_influx_2019"] = result[8]
        station_metadata["Latitude"] = result[9]
        station_metadata["Longitude"] = result[10]

    print(station_metadata)
    return jsonify(station_metadata)


@app.route("/stations/<station>")
def stations(station):
    """Return `line_ids`, `line_labels`,and `station_values`."""
    stmt = db.session.query(Stations).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Filter the data based on the station number and
    # only keep rows with values above 1
    station_data = df.loc[df[station] > 1, ["line_id", "line_label", station]]

    # Sort by station
    station_data.sort_values(by=station, ascending=False, inplace=True)

    # Format the data to send as json
    data = {
        "line_ids": station.line_id.values.tolist(),
        "station_values": station_data[station].values.tolist(),
        "line_labels": station_data.line_label.tolist(),
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run()