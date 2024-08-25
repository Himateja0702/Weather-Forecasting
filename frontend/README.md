# Weather Forecasting Web App

## Overview
The Weather Forecasting Web App provides real-time weather information based on the user's current location or a location entered by the user. The app is designed to be simple, user-friendly, and responsive across various devices.

## Features
- **Real-Time Weather Data**: Fetches current weather conditions including temperature, humidity, wind speed, and a brief weather description.
- **Location Support**: Users can either allow the app to detect their location or input a city name manually.
- **Responsive Design**: The interface is responsive and adapts to different screen sizes (desktop, tablet, mobile).
- **Error Handling**: Basic error handling for invalid city names, API errors, and location detection issues.
- **User Search History (Optional)**: Stores user search history for easy access to past searches (requires backend setup).

## Technologies Used
- **Frontend**:
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Bootstrap](https://getbootstrap.com/) or [Tailwind CSS](https://tailwindcss.com/): For responsive design.
  - [Axios](https://axios-http.com/): For making API requests.

- **Backend (Optional)**:
  - [Node.js](https://nodejs.org/): JavaScript runtime for server-side programming.
  - [Express](https://expressjs.com/): Web framework for Node.js.
  - [MongoDB](https://www.mongodb.com/): NoSQL database for storing user search history.
  - [Mongoose](https://mongoosejs.com/): ODM for MongoDB.
  
- **API**:
  - [OpenWeatherMap API](https://openweathermap.org/api): Provides weather data.

## Setup and Installation

### Prerequisites
- Node.js (v12.x or higher)
- npm or yarn
- MongoDB Atlas account (for backend)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weather-forecasting-app.git
    cd weather-forecasting-app
    ```

2. **Install dependencies for both frontend and backend**:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. **Set up the environment variables**:
    Create a `.env` file in the `backend` directory and add the following:
    ```bash
    PORT=5000
    MONGODB_URI=mongodb+srv://Himateja:<Teja123>@atlascluster.epnrmb7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster
    WEATHER_API_KEY=584711cd1659380995808dfdb443660e
    ```

4. **Run the backend**:
    ```bash
    cd backend
    npm start
    ```

5. **Run the frontend**:
    ```bash
    cd frontend
    npm start
    ```

6. **Access the app**:
    Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Input a city name**: Type a city name into the search box and hit "Enter" to see the current weather for that location.
- **Use current location**: If prompted, allow the app to use your current location to display weather data.
- **View weather information**: The app will display temperature, humidity, wind speed, and a brief weather description.

## Troubleshooting

- **Port already in use**: If you encounter a `EADDRINUSE` error, the port might already be in use. You can either kill the process using the port or change the port number in the `.env` file.
- **Location services not enabled**: Ensure that location services are enabled on your device and that you have granted the app permission to access your location.

## Contributing
Feel free to fork this repository and submit pull requests. Any contributions are welcome!

## License
This project is licensed under the MIT License.

## Acknowledgments
- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [React](https://reactjs.org/) for making frontend development enjoyable.
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for backend development.
