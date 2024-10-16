# Car Wash booking System Client
This is a complete cash wash booking and management system website. Visit the live deployment link: [PolishPro - Car Wash](https://car-washing-system-client-sigma.vercel.app/)

This is the frontend repository of the project. To know about the backend, visit the backend repository: [Car Wash Booking System Backend](https://github.com/D1Asif/car-washing-system)

## Technologies
TypeScript, React, Redux Toolkit, RTK Query, Zod, React Router, Tailwind CSS, Keep React, AamarPay Payment

## Features
1. Authentication with validation and error messages
2. Service page: Car wash services are displayed with search (debounced) and filter functionality.
3. Service details page: Details of a particular service is shown. User can choose a date and the slot for that service on that specific date is going to appearr. User can pick one of the available slots and proceed to booking.
4. Booking page: User can fill out the information and proceed to booking and payment.
5. User dashborad: i. Booking tab: The upcoming and the past bookings are displayed. Upcoming bookings are displayed with countdown. ii. Account infor mation tab: User can update the account info.
6. Admin Dashboard:
   i. Service Management tab: Admin can add, edit and delete a service.
   ii. Slot Management tab: Admin can create slots, update availability
   iii. User Management tab: Admin view list of the users and make any general user and admin.
   iv. Bookings Tab: Admin can view the bookings.
7. Review: A review section in the home page is added. Unauthenticated user cannot access the review section. There's a login button in the section which will send the user to the login page. After successful login it redirects the user to the review section. User can now provide review with rating and comment. On submitting the review the form gets replaced by reviews of other users. There's a see all review button which takes the user to the all review page.
8. Other features: scroll to top button, 404 pages, toasts etc has been implemented.

## How to run
To run locally follow the following steps:
1. Clone the repo in your machine.
2. Go to the root directory and run `npm install` to install the dependencies.
3. Add the enviromnet variables.
4. Run `npm run dev` to start the app in development.
