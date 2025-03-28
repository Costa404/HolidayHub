HolidayHub

The application is fullstack and fully functional, with only a few TypeScript types and state management to be adjusted. The application is responsive.
This app allows users to manage their holidays with features for both regular users and admins.

  Login & Signup: Users log in with email and password. Admins can manage accounts, and new users can sign up.

  User Management: Admins can add/remove users. Each user has a unique profile with personal details.

   Holiday Booking: Users can book holidays through an interactive calendar. Admins can view all bookings.

Technologies Used:

  Frontend: React, TypeScript, Zustand, and React Router with lazy loading.

  Backend: Node.js, PostgreSQL (used to store user and holiday data), Express

Installation:

  Backend:

   Navigate to the server folder:
   cd Server

   Install the backend dependencies:
   npm install

   Insert the .env file at the root of the server side (IMPORTANT, Check email).

   Start the backend server:
   npm run dev

  Frontend:

   Navigate to the client folder:
   cd Client

   Install the frontend dependencies:
   npm install

   Start the frontend server:
   npm run dev

  For testing 
  mail: admin@admin.com password: admin@admin.com
  mail: user@user.com password: user@user.com
