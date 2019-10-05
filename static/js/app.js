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

      // @TODO: Build a Bubble Chart using the sample data
      const line_ids=data.line_ids;
      const line_labels=data.line_labels;
      const Station_values=data.Station_values;
  
      //start building the layouts for bubble plot:
      let bubblelayout={
        margin: {t: 0},
        hovermode:"closests",
        xaxis:{title:"OTU id"}
      }
  
      let bubbledata=[
        {
          x: line_ids,
          y: Station_values,
          text: line_labels,
          mode:"markers",
          marker:{
            size: Station_values,
            color: line_ids,
            colorscale:"Blackbody"
          }
        }
      ]
  
      Plotly.plot("bubble", bubbledata, bubblelayout);
  
      // @TODO: Build a Pie Chart
      // HINT: You will need to use slice() to grab the top 10 sample_values,
      // otu_ids, and labels (10 each).
      let piedata=[
        {
          values:line_values.slice(0,10),
          labels:line_ids.slice(0,10),
          hovertext:line_labels.slice(0,10),
          hoverinfo:"hovertext",
          type:"pie"
        }
      ];
  
      let pielayout={
        margin:{ t: 0, l: 0}
      };
  
      Plotly.plot("pie",piedata,pielayout)
  })
  }


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of station names to populate the select options
  d3.json("/names").then((StationNames) => {
    StationNames.forEach((Station) => {
      selector
        .append("option")
        .text(Station)
        .property("value", station);
    });

    // Use the first sample from the list to build the initial plots
    const firstStation = StationNames[0];
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
