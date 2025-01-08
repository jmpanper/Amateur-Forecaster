# Amateur Weather Forecaster

This project was developed to explore JavaScript and learn how to connect to various APIs. The main feature allows users to check the weather based on their geolocation.

## Project Overview
Amateur Weather Forecaster is a simple project that is continuously improved to enhance both its functionality and user experience. The primary technologies used in this project are HTML, CSS, and JavaScript. For real-time weather data, it leverages the WeatherAPI, known for its free and scalable features.

### Key Features
- **Real-time Weather Information**: Fetches weather data based on the user's current geolocation.
- **User Interface**: A minimalistic and user-friendly interface designed for easy navigation and readability.

## Technologies Used
- **HTML**: Structure and content of the application.
- **CSS**: Styling and layout for a more appealing design.
- **JavaScript**: Core functionality and API integration.
- **WeatherAPI**: Provides real-time weather data.

## Challenges and Solutions
### Icon Handling
Initially, there was an issue with setting up icons as the WeatherAPI did not send them correctly. This was resolved by:
- Saving the required icons as assets within the project.
- Mapping the icons returned by the API to the corresponding files in the assets folder.

### Current Issues
- **API Call Restriction**: Due to the use of HTTP for API calls, GitHub Pages blocks these requests. Switching to HTTPS is necessary to resolve this issue.

## Future Improvements
- **Enhanced Styling**: Continuously working on improving the visual appeal.
- **Additional Features**: Planning to add more features for an enriched user experience.
