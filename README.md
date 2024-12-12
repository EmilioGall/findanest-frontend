# FindNest Frontend

A web-based application that allows users to search for apartments based on various criteria such as location, price range, and amenities. The application is a single-page application (SPA) built using Vue.js that communicates with a backend API to retrieve data.

## Table of Contents

- [Features](#features)
- [Services](#services)
- [Installation](#installation)
- [Milestones](#milestones)
- [Contributing](#contributing)

## Features

Search Functionality

- Users can search for apartments by location, price, and other filters.
- Results are displayed in a list view, with options to filter by distance, price, and availability.

Booking System

- Users can book apartments sending a message directly from the search results page.
- Users will receive a confirmation email with the booking details.

User Profiles

- Users can create and manage their profiles, including adding and editing their contact information.

Apartment Listings

- The application displays a list of available apartments that match the user's search criteria.

Apartment Details

- Users can view detailed information about each apartment, including its description, images, and amenities.

## Services

- **TomTom**: For geolocation services to retrieve latitude and longitude coordinates from addresses.
- **Braintree**: For payment gateway services to process payments.

## Installation

To install the FindAnest Frontend, you can use npm by running the following commands:

```bash
npm install findanest-frontend
```

## Milestones

Milestone 1

- Create a reusable component containing a search bar and a calendar for users to search for apartments.
  
Milestone 2

- Integrate the Apartment API to fetch apartment information and populate the search results page.
  
Milestone 3

- Implement functionality that triggers an API call whenever a user searches for an apartment, returning a list of available options.

Milestone 4

- Update the search results page in real-time whenever an apartment's availability changes or when a new apartment is added.

## Contributing

We welcome contributions! If you're interested in contributing to the project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

For more information and updates, check out the project repository on [GitHub](https://github.com/EmilioGall/findanest-frontend). 

---

Happy coding!
