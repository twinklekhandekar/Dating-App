Dating App
A full-stack dating application built with MERN (MongoDB, Express, React, Node.js) and Google OAuth authentication. Users can sign in via Google, discover other users, like profiles, and get matched. Designed with production-ready architecture and clean UI/UX.

Features
Google OAuth Login – Secure authentication with Google accounts.
User Profiles – Name, email, photo.
Discover Users – Swipe/browse other users.
Like & Match System – Users can like others; matches are notified.
JWT Authentication – Stored in httpOnly cookies for security.
Protected Routes – Sensitive pages accessible only after login.
Responsive UI – Tailwind CSS and React for modern look.

Tech Stack
Frontend: React, React Router, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
Authentication: Passport.js (Google OAuth), JWT
Deployment: Render (frontend & backend)
Other Tools: Axios, cookie-parser, CORS

Local Development Instructions
Follow these steps to run the project locally on your machine:

1️⃣ Clone the repository
git clone https://github.com/yourusername/Dating-App.git
cd Dating-App

2️⃣ Setup Backend
cd server
npm install

Environment Variables
Create a .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:5173
MONGO_URI: Your MongoDB Atlas connection string
JWT_SECRET: Any strong secret for JWT
CLIENT_URL: Local frontend URL (Vite default is http://localhost:5173)

Start Backend
npm run dev


Backend should now run on http://localhost:5000.

3️⃣ Setup Frontend
cd ../client
npm install

Environment Variables
Create .env in client/:
VITE_API_URL=http://localhost:5000
This points frontend API calls to your local backend.

Start Frontend
npm run dev

Frontend should now run on http://localhost:5173.

4️⃣ Google OAuth Setup (Local)
Go to Google Cloud Console
Create OAuth 2.0 Client ID → Web Application

Add Authorized redirect URIs for local development:
http://localhost:5000/auth/google/callback

Add Authorized JavaScript origins:
http://localhost:5173


Use these credentials in your backend .env.

5️⃣ Testing Locally

Open browser → http://localhost:5173

Click Sign in with Google

Allow Google permissions

You will be redirected to Discover page automatically

Like users, check matches, etc.
