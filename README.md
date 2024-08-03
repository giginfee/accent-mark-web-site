
# Accent Mark Web Application

This repository contains the source code for the Accent Mark web application, which was made to help ukrainian student get ready for exams.
Users are able to improve their knowledge in accent marks in ukrainian language.
Front-end deployed on Netlify and a back-end deployed on Render.
**! Sadly, authentication is not working due to Netlify cookies restrictions.!**
Wait for a few minutes after accessing the web-site because server sleeps due to inactivity.

## Features

- Interactive user interface for practicing accent marks with quiz
- User authentication and progress tracking

## Technologies Used

- **Front-end**: Vue.js
- **Back-end**: Node.js, Express, MongoDB
- **Deployment**: Netlify (Front-end), Render (Back-end)
  
## Deployment

### Front-end

The front-end is deployed on Netlify.

- **Netlify URL**: [https://accent-mark-web-site.netlify.app/](https://accent-mark-web-site.netlify.app/)

### Back-end

The back-end is deployed on Render.

- **Render URL**: [https://accent-mark-web-site.onrender.com/](https://accent-mark-web-site.onrender.com/)

  
## Clone repository

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/accent-mark-web-app.git
   cd accent-mark-web-app
   ```

2. **Install dependencies for both front-end and back-end:**

   ```bash
   # Navigate to front-end directory
   cd front
   npm install

   # Navigate to back-end directory
   cd ../server
   npm install
   ```

### Running Locally

1. **Set up environment variables:**

   Create a `config.env` file in the `server` directory and add your environment variables:

   ```env
   PORT=3000
   MONGO_URL=mongodb+srv://<USER>:<password>@cluster0.jxalnm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   MONGO_PASSWORD=******
   ```
   *To get access to the database contact me directly*

   Create a `.env` file in the `fron` directory and add your environment variables:

   ```env
   VITE_API_URL=http://localhost:3000
   
   Additionaly, navigate to "server/app.js" and "server/middleware/authMiddleware.js" and change origin to the url of website

2. **Start the back-end server:**

   ```bash
   cd server
   npm start
   ```

3. **Start the front-end development server:**

   ```bash
   cd client
   npm run dev
   ```
