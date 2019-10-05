function buildMetadata(station) {

  // Use `d3.json` to fetch the metadata for a Station
    d3.json(`/metadata/${station}`).then((data) =>{
        // Use d3 to select the panel with id of `#sample-metadata`
        var Panel=d3.select("#station-metadata");

        // Use `.html("") to clear any existing metadata
        Panel.html("");
        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(data).forEach(([key,value]) => {
          Panel.append("h6").text(`${key}:${value}`);
        })
      })
    }

function buildCharts(station) {

  //Use `d3.json` to fetch the station data for the plots
  d3.json(`/stations/${station}`).then((data) =>{

    
//     // stations, influx and its years 

// Create the Traces
var trace1 = {
  x: data.,
  y: data.high_jump,
  mode: "markers",
  type: "scatter",
  name: "high jump",
  marker: {
    color: "#2077b4",
    symbol: "hexagram"
  }
};

/ Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);


// Define the plot layout
var layout = {
  title: "Olympic trends over the years",
  xaxis: { title: "Year" },
  yaxis: { title: "Olympic Event" }
};


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of station names to populate the select options
  d3.json("/names").then((stationNames) => {
    stationNames.forEach((station) => {
      selector
        .append("option")
        .text(station)
        .property("value", station);
    });

    // Use the first sample from the list to build the initial plots
    const firstStation = stationNames[0];
    buildCharts(firstStation);
    buildMetadata(firstStation);
  });
}

function optionChanged(newStation) {
  // Fetch new data each time a new sample is selected
  buildCharts(newStation);
  buildMetadata(newStation);
}

// Initialize the dashboard
init();
