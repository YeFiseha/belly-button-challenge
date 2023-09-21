// Load the URL into a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Initializing the dashboard as the data is loaded
dataPromise.then(data => {

    // Dropdown menu for sample selection
    var selector = d3.select("#selDataset");

    // Getting all sample names from the data
    var sampleNames = data.names;

    // Adding sample names to the dropdown menu options
    sampleNames.forEach(sample => {
        selector
            .append("option")
            .text(sample)
            .property("value", sample);
    });

    // The first sample name is displayed first (at the begining) on the dashboard 
    var firstSample = sampleNames[0];

    // Show information and charts for the first sample
    buildMetadata(firstSample, data);
    buildCharts(firstSample, data);
});

// The function below applies when a new sample is selected from the dropdown menu
function optionChanged(newSample) {

    // Update the sample information and charts for the selected new sample
    dataPromise.then(data => {
        buildMetadata(newSample, data);
        buildCharts(newSample, data);
    });
}

// The function below shows the demographic information for the selected sample
function buildMetadata(sample, data) {

    // Metadata for all samples
    var metadata = data.metadata;

    // Metadata only includes selected samples
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var selectedSample = metadataArray[0];
    var PANEL = d3.select("#sample-metadata");

    // Clear previous demographic information
    PANEL.html("");

    // Showing demographic information for the selected sample
    Object.entries(selectedSample).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key}: ${value}`);
    });
}

// Charts for the selected sample
function buildCharts(sample, data) {

    // Get all the sample data
    var samples = data.samples;

    // Sample data only includes the selected sample
    var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);

    // Metadata data only includes the selected sample
    var metadataArray = data.metadata.filter(sampleObj => sampleObj.id == sample);
    var selectedSample = sampleArray[0];

    // Get the data for the selected sample
    var otu_ids = selectedSample.otu_ids;
    var otu_labels = selectedSample.otu_labels;
    var sample_values = selectedSample.sample_values;
    var wfreq = metadataArray[0].wfreq;

    // Bar Chart

      // Y labels (out_ids) and the slice function is used to display the top 10 OTUs found in the sample
      var yticks = otu_ids.slice(0,10).map(outId => `OTU ${outId}`).reverse();

      // Reverse function is applied so that the bar chart is dislayed with descending order of values 
      var barData = [{
          x: sample_values.slice(0,10).reverse(),
          y: yticks,
          type: "bar",
          orientation: "h",
          text: otu_labels.slice(0,10),
      }];
  
      // Plot the bar chart
      Plotly.newPlot("bar", barData);

    // Bubble Chart
      var bubbleData = [{
          x: otu_ids,
          y: sample_values,
          mode: "markers",
          marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: "Picnic"
          },
          text: otu_labels
      }];
  
      var bubbleLayout = {
          xaxis: {title: "OTU IDs"}
      };
  
      // Plot the bubble chart
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    }
  