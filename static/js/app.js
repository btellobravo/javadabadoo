function buildMetadata(StationId) {

 
  

  // Use `d3.json` to fetch the metadata for a station
    d3.json(`/metadata/${StationId}`).then((data) =>{
        // Use d3 to select the panel with id of `#station-metadata`
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

function buildCharts(Station) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/station/${Station}`).then((data) =>{

    // @TODO: Build a Bubble Chart using the sample data
    const YearIds=data.YearIds_ids;
    const Year_labels=data.Year_labels;
    const Influx_values=data.Influx_values;

    //start building the layouts for bubble plot:
    let bubblelayout={
      margin: {t: 0},
      hovermode:"closests",
      xaxis:{title:"Years"}
    }

    let bubbledata=[
      {
        x: YearIds_ids,
        y: Influx_values,
        text: Year_labels,
        mode:"markers",
        marker:{
          size: Influx_values,
          color: YearIds,
          colorscale:"Blackbody"
        }
      }
    ]

    Plotly.plot("bubble", bubbledata, bubblelayout);

    // @Build a Pie Chart
  
    let piedata=[
      {
        values:Influx_values.slice(0,10),
        labels:YearIds.slice(0,10),
        hovertext:Year_labels.slice(0,10),
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

  // Use the list of sample names to populate the select options
  d3.json("/names").then((StationNames) => {
    StationNames.forEach((Station) => {
      selector
        .append("option")
        .text(Station)
        .property("value", Station);
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