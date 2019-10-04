DROP TABLE "Influx_Metro_2010";
DROP TABLE "Influx_Metro_2011";
DROP TABLE "Influx_Metro_2012";
DROP TABLE "Influx_Metro_2013";
DROP TABLE "Influx_Metro_2014";
DROP TABLE "Influx_Metro_2015";
DROP TABLE "Influx_Metro_2016";
DROP TABLE "Influx_Metro_2017";
DROP TABLE "Influx_Metro_2018";
DROP TABLE "Influx_Metro_2019";
DROP TABLE "Unique Stations";
DROP TABLE "Influx and coordinates";

CREATE TABLE "Influx_Metro_2010" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);

SELECT * FROM "Influx_Metro_2010";


CREATE TABLE "Influx_Metro_2011" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);
SELECT * FROM "Influx_Metro_2011";

CREATE TABLE "Influx_Metro_2012" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);

SELECT * FROM "Influx_Metro_2012";

CREATE TABLE "Influx_Metro_2013" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);

SELECT * FROM "Influx_Metro_2013"; 

CREATE TABLE "Influx_Metro_2014" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);
     

SELECT * FROM "Influx_Metro_2014";

CREATE TABLE "Influx_Metro_2015" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);
SELECT * FROM "Influx_Metro_2015";

CREATE TABLE "Influx_Metro_2016" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);

SELECT * FROM "Influx_Metro_2016";

CREATE TABLE "Influx_Metro_2017" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);
SELECT * FROM "Influx_Metro_2017";

CREATE TABLE "Influx_Metro_2018" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);
SELECT * FROM "Influx_Metro_2018";

CREATE TABLE "Influx_Metro_2019" (
  Year integer NOT NULL,
  Line character varying(10) NOT NULL,
  Station character varying(45) NOT NULL,
  Influx integer NOT NULL
);
SELECT * FROM "Influx_Metro_2019";

CREATE TABLE "Unique Stations" (
  Station character varying(45) NOT NULL,
  Latitude numeric NOT NULL,
	Longitude numeric NOT NULL
);
SELECT * FROM "Unique Stations";


CREATE TABLE "Influx and coordinates" (
	Station character varying(45) NOT NULL,
	Total_influx_2012 numeric NOT NULL,
	Total_influx_2013 numeric NOT NULL,
	Total_influx_2014 numeric NOT NULL,
	Total_influx_2015 numeric NOT NULL,
	Total_influx_2016 numeric NOT NULL,
	Total_influx_2017 numeric NOT NULL,
	Total_influx_2018 numeric NOT NULL,
	Total_influx_2019 numeric NOT NULL,
	Latitude numeric NOT NULL,
	Longitude numeric NOT NULL
);
SELECT * FROM "Influx and coordinates";