# Earthquake Data Visualization with Leaflet

## Background
The United States Geological Survey (USGS) is tasked with providing crucial scientific data on natural hazards, ecosystem health, and the impacts of climate and land-use changes. Through its research, the USGS develops methods and tools to provide timely, relevant, and useful information about Earth's processes.

This project was developed to assist the USGS in visualizing earthquake data, with the goal of enhancing public understanding and promoting collaboration with government organizations. The interactive visualization created aims to raise awareness about critical environmental issues and support funding efforts for future research.

## Project Overview

The project repository, titled `leaflet-challenge`, is organized into two key parts:

### Part 1: Earthquake Visualization

In Part 1, the focus was on visualizing an earthquake dataset provided by the USGS. The main steps involved are as follows:

- **Dataset Acquisition**:  
  Earthquake data was sourced from the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php), specifically utilizing the dataset for "All Earthquakes from the Past 7 Days."

- **API Integration**:  
  D3.js was used to perform an API call to retrieve the earthquake data in GeoJSON format.

- **Interactive Map Creation**:  
  Using Leaflet.js, an interactive map was developed to plot earthquake occurrences based on their geographical coordinates (longitude and latitude). The size of each marker represents the earthquake's magnitude, and the color indicates the depth, with darker colors signifying greater depth. Clicking on a marker reveals a popup with detailed information about the earthquake, such as its location, magnitude, and depth.

- **Legend Integration**:  
  A dynamic legend was included to provide context for the color coding, explaining the relationship between depth and marker color.

### Part 2: Tectonic Plates and Seismic Activity (Optional)

In Part 2, the project was extended by incorporating tectonic plate data to explore the relationship between tectonic boundaries and earthquake occurrences. The following steps were taken:

- **Tectonic Plates Dataset**:  
  The tectonic plates data was sourced from the [Tectonic Plates GitHub repository](https://github.com/fraxen/tectonicplates), allowing for the visualization of the relationship between tectonic boundaries and seismic activity.

- **Map Enhancements**:
  - Multiple base maps were added to offer users different visualization options.
  - Earthquake and tectonic plate data were organized into separate overlay layers, allowing users to toggle between datasets.
  - Layer controls were implemented, providing users with the ability to easily switch between different map layers and data sets.

## Technologies Used

- **HTML5**: Structured the web pages.
- **JavaScript (ES6)**: Handled data fetching, processing, and the creation of the interactive map.
- **Leaflet.js**: Powered the interactive map and managed geospatial data visualization.
- **D3.js**: Enabled data fetching from the USGS GeoJSON API and provided tools for dynamic visualization.
- **CSS3**: Styled the web pages to ensure a clean and user-friendly interface.

## Deployment

The project has been deployed and can be accessed at the following link:  
[Earthquake Data Visualization](https://kristinaabramoff.github.io/leaflet_deploy/).

## Conclusion

This project successfully visualizes real-time earthquake data provided by the USGS, offering a clear and interactive way to understand earthquake distribution and impact on a global scale. By integrating optional tectonic plate data, the visualization provides additional insights into the relationship between tectonic activity and earthquakes.

## References

- Earthquake dataset: [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
- Tectonic plates dataset: [Tectonic Plates GitHub](https://github.com/fraxen/tectonicplates)


