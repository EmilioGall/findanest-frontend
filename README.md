# FindNest Frontend

The frontend for the FindNest platform, a single-page application (SPA) that enables users to search, view, and book apartments based on various criteria such as location, price range, and amenities. The application is built using Vue.js and communicates with the FindNest backend API to deliver a seamless user experience.

## Table of Contents

- [Dependencies](#dependencies)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Services](#services)
- [Milestones](#milestones)
- [Contributing](#contributing)

## Dependencies

The project is built with the following key technologies:

- **Vue.js (v2.6.11)**: Core framework for building the SPA.
- **Bootstrap (v4.6.0)**: Styling and layout framework.
- **Axios (v0.21.1)**: For making HTTP requests.
- **Vue Router (v3.5.3)**: For managing client-side routing.

## Features

1. **Search Functionality**:
   - Users can search for apartments using filters like location, price range, and amenities.
   - Results are displayed in a list view with options to sort and refine.

2. **Real-time Apartment Listings**:
   - Displays available apartments based on search criteria.
   - Updates dynamically to reflect changes in availability.

3. **Booking System**:
   - Users can book apartments directly from the search results or apartment details page.
   - Sends booking confirmation emails to users.

4. **User Profiles**:
   - Users can create and manage their profiles, including adding and editing contact information.

5. **Apartment Details**:
   - Detailed view of each apartment, including descriptions, images, and amenities.

## Environment Variables

The application requires certain environment variables for configuration. Create a `.env` file in the root directory and define the following variables:

- `VUE_APP_API_BASE_URL`: URL for the backend API.
- `VUE_APP_TOMTOM_API_KEY`: API key for TomTom services.
- `VUE_APP_BRAINTREE_TOKEN`: Token for the Braintree payment gateway.

Refer to `.env.example` for a complete list of required variables.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/EmilioGall/findanest-frontend.git
   cd findanest-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Update .env with appropriate values.
   ```

4. Start the development server:
   ```bash
   npm run serve
   ```

5. Open the application in your browser:
   ```

   http://localhost:8080
   ```

## Services

The project integrates the following external services:

- **TomTom API**: Provides geolocation and mapping capabilities.
- **Braintree**: Manages payment processing for bookings.

## Milestones

1. **Reusable Search Components**:
   - Develop a component with a search bar and calendar for apartment search functionality.

2. **API Integration**:
   - Fetch apartment data using the backend API and populate the search results page.

3. **Dynamic Updates**:
   - Implement real-time updates to reflect apartment availability changes.

4. **Enhanced Booking Workflow**:
   - Allow users to securely book apartments with payment integration.

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

For more details, visit the [GitHub repository](https://github.com/EmilioGall/findanest-frontend).

---

Happy coding!
