Application Overview
This Vite application allows users to create and manage accounts with the following functionalities:

1. Home Page (Home.jsx)
Displays a welcome message with the username.
Protected route: Users must be logged in to access this page.

3. Navbar (Navbar.jsx)
Shows a "Login as [username]" text when a user is logged in.
Includes a dropdown menu with options: Profile and Logout.
Protected route: Navbar is visible only to logged-in users.

5. Login Page (Login.jsx)
Contains input fields for email and password.
Includes a "Login" button to authenticate users.
Provides a link to the "Create Account" page for new users.
Unprotected route: Accessible to all users.

7. Register Page (Register.jsx)
Includes input fields for username, email, mobile number, password, and confirm password.
Password validation requirements:
Minimum 8 characters
At least one uppercase letter
At least one lowercase letter
At least one special character
Contains a "Create Account" button to register users.
Provides a link to the "Login" page for existing users.
  
8. Profile Page (Profile.jsx)
Displays all profile details (username, email, mobile number, etc.).
Includes an "Edit" button to enable editing mode.
Provides a "Save" button to save changes.
Provides a "Password Recovery" button to access current password if forgot.
Protected route: Users must be logged in to access this page.

State Management
LocalStorage: Used to persist user data across page reloads.

Redux Toolkit: Manages application state, including user authentication status and profile information.

Route Protection
All routes are protected to ensure users must be logged in to access certain pages.
If a user refreshes the page, their data is maintained using LocalStorage and Redux.

LIVE-LINK:https://accountmanagerwithkeyur.vercel.app/

![login](https://github.com/user-attachments/assets/cc598ef4-2d8f-4639-aa45-da9f83b278b7)
![profile](https://github.com/user-attachments/assets/2d2285d8-92f6-41b8-87b4-887ee1e8f13f)
![dasdashboard ](https://github.com/user-attachments/assets/fa6b7df9-37b3-486b-9ddc-e3b3c32c2d04)



   
