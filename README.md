# belly-button-challenge
Building interactive dashboard

# BACKGROUND
In this assignment, we build an interactive dashboard to explore the Belly Button Biodiversity dataset.., which catalogs the microbes that colonize human navels.

# Findings

The D3 library is used to read in samples.json file from the provided URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

1.	Dashboard and dropdown menu

Belly Button Biodiversity Dashboard initializes as the data is loaded and a dropdown menu is created for sample selection. All sample names from the data are added to the dropdown menu options. When a new sample is selected from the dropdown menu, the sample information, and charts (created below) are updated for the new selection. 

2.	Metadata for demographic information

Metadata showing demographic information for the selected samples is displayed on the top left side of the dashboard. The metadata updates when a new sample is selected.

3.	Horizontal bar chart

A horizontal bar chart is created, with a dropdown menu, displaying the top 10 OTUs found in a sample (individual). The chart initializes without error and updates when a new sample is selected. It uses Top 10 sample values as values (x-axis values) and out_ids as the labels (y-axis values). ‘otu_labels’ are used as text values (hovertext for the chart). The ‘slice’ function is used to display the top 10 OTUs found in the sample and ‘reverse’ function is applied to display the bar chart with descending order of values.

4.	Bubble chart

The chart initializes without error and updates when a new sample is selected. It uses ‘out_ids’ for the x-axis values and ‘sample_values’ for y-axis values. ‘otu_ids’ are used for market colors, ‘sample_values’ are used for marker size, and ‘out_labels’ are used for text values.

The App is successfully Deployed to this Github repo.

# References

The static folder includes the app.js file

{ } samples.json is the data file

Index.html is the dashboard page (opening the belly button biodiversity dashboard on a browser)

