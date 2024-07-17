# Leaflet-challenge


## Background
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

To aid USGS in their mission, I have developed a new set of tools that visualize their earthquake data, allowing for better public education and interaction with government organizations. This project helps to illustrate the critical issues facing our planet and potentially secure more funding for future research.

##Project Overview
I created a new repository named leaflet-challenge to host this project. The project is organized into two parts: Part 1 and Part 2, each addressing specific visualization tasks using HTML, JavaScript, Leaflet, and D3.js.

### Part 1
In Part 1, I visualized an earthquake dataset provided by the USGS. The steps included:

Dataset Acquisition:

I obtained earthquake data from the USGS GeoJSON Feed.
I selected a dataset (e.g., "All Earthquakes from the Past 7 Days") to work with.
API Call:

Using D3.js, I made an API call to fetch the earthquake data in JSON format from the USGS GeoJSON Feed.
Data Visualization:

Using Leaflet, I created a map plotting all earthquakes from the dataset based on their longitude and latitude.
The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color.
Popups provide additional information about the earthquake when its associated marker is clicked.
A legend was created to provide context for the map data.

### Part 2
In Part 2, I further enhanced the map by plotting additional datasets to illustrate the relationship between tectonic plates and seismic activity. The steps included:

Tectonic Plates Data:

I plotted a second dataset to illustrate the relationship between tectonic plates and seismic activity.
Data on tectonic plates was obtained from the tectonicplates GitHub repository.
Advanced Features:

I plotted the tectonic plates dataset alongside the original earthquake data.
Additional base maps were added for better visualization options.
Each dataset was organized into separate overlays that can be turned on and off independently.
Layer controls were added to the map to enhance user interaction.
Technologies Used
HTML: Structured the web pages.
JavaScript: Fetched and processed the data, and created the interactive map.
Leaflet: Used for creating interactive maps.
D3.js: Utilized for data visualization and API calls.
CSS: Styled the web pages.


## Conclusion
This project successfully visualizes earthquake data provided by the USGS using Leaflet and D3.js. The visualization aids in understanding the distribution and impact of earthquakes globally. The optional part of the challenge adds further insights by plotting tectonic plates data, enhancing the understanding of the relationship between tectonic activity and earthquakes.
