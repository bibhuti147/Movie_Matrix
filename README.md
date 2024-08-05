# MovieMatrix

MovieMatrix is a Vite&React-based web application that allows users to explore a curated list of movies and TV shows. Users can search for movies or TV shows, filter by category, and view detailed information about each item.

## Features

- **Search**: Look for specific movies or TV shows by title.
- **Filter**: Categorize items by "All," "Movies," or "TV Shows."
- **Dynamic Content**: Display search results or suggested items based on user input.
- **Mobile Friendly**: The website is Mobile Responsive.

## Installation

1. **Clone the Repository**:
   `git clone https://github.com/your-username/MovieMatrix.git`
   `cd MovieMatrix`

2. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies:
   `npm install`

3. **Run the Application**:
   Start the development server:
   `npm run dev`

   The application will be running at localHost

## Deployment

Deploy the application using Vercel for easy setup and configuration.

1. **Install Vercel CLI**:
   `npm install -g vercel`

2. **Build the Project**:
   `npm run build`

3. **Deploy**:
   Navigate to the project directory and run:
   `vercel`

## Usage

- **Search Bar**: Use the search bar to find specific movies or TV shows. Type your query and press Enter or click the search icon.
- **Category Buttons**: Use the category buttons to filter items by "All," "Movies," or "TV Shows."

## Code Structure

- **Components**:

  - `Header`: The header component of the Web-Application.
  - `MovieBox`: Component Cards to display Poster and Name of the Movie or TV Show.

- **Context**:

  - `MyContext`: Provides global state management for the Web-Application.

- **Pages**:
  - `Home`: The main page of the Webapp that shows currated list of my personal Movies and TV Shows.This is page contains Header,Search Bar,Category Filter.
  - `MovieDetails`: This the page that gives the user brief plot summary and other important details of the Movie or TV Show.

## API

This application uses the [OMDb API](http://www.omdbapi.com/) to fetch movie and TV show data. Make sure to replace the API key with your own in the fetch URL.

## Contributing

Feel free to fork this project and submit pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License.
