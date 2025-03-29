# URL Shortener Service

A full‑stack URL shortening service that allows users to input a long URL and receive a shortened version. The backend is built with Node.js, Express, and MongoDB (using Mongoose), while the frontend is a React application styled with Material UI (MUI). This project is highly customizable so you can adjust the BASE_URL, appearance, and functionality to suit your needs.

## Features

- **Shorten URLs:** Enter a long URL and get a unique shortened URL.
- **Redirection:** Visiting the short URL automatically redirects to the original URL.
- **URL Listing:** View a list of all shortened URLs along with their creation date.
- **Validation:** Server‑side URL format validation ensures valid URLs.
- **Highly Customizable:** Easily change environment variables, adjust UI components, and extend backend functionality.

## Technology Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose, nanoid, dotenv, cors.
- **Frontend:** React, Material UI (MUI), Axios.
- **Database:** MongoDB

## Directory Structure

```
url-shortener/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Url.js
│   └── routes/
│       └── urls.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── config.js
│       ├── components/
│       │   ├── ShortenForm.js
│       │   └── UrlList.js
│       └── styles/
│           └── main.css
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local instance or hosted)

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the backend directory with the following content (adjust values as needed):
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/url_shortener_db
   BASE_URL=http://localhost:5000
   ```

4. **Start the backend server:**
  - For development:
    ```bash
    npm run dev
    ```
  - For production:
    ```bash
    npm start
    ```

5. **API Endpoints:**
  - **Create URL:** `POST http://localhost:5000/api/urls`
  - **List URLs:** `GET http://localhost:5000/api/urls`
  - **Redirection:** Any `GET` request to `http://localhost:5000/<shortCode>` will redirect to the original URL.
  - **Health Check:** `GET http://localhost:5000/api/health` (if implemented)

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the frontend:**  
   Open `src/config.js` and update the following if needed:
  - `backendUrl`: URL of your backend server.

4. **Start the frontend development server:**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

### Production Build

#### Backend

- Ensure your environment variables are correctly set and run:
  ```bash
  npm start
  ```

#### Frontend

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Deploy:**  
   Serve the contents of the `build` folder using your preferred hosting platform or integrate it with your backend.

## Customization

- **BASE_URL:**  
  Update the `BASE_URL` in the backend `.env` file to reflect your domain (e.g., `https://yourdomain.com`).

- **UI Adjustments:**  
  Customize Material UI components in the `frontend/src/components/` folder. Global styling can be modified in `frontend/src/styles/main.css`.

- **Backend Modifications:**  
  Extend or modify models and routes in the `backend` folder to add new features or change functionality.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or customizations. If you encounter any bugs or have feature requests, please open an issue.

## License

This project is licensed under the MIT License.

## Authors

The UNC-CH Google Developer Student Club (GDSC) team.
