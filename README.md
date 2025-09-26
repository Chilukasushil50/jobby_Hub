## ✨ Core Features

### 👤 User Features
* **Secure Authentication:** Users can sign up and log in to their accounts safely.
* **Job Search:** A dynamic search bar to find relevant job postings.
* **Advanced Filtering:** Filter jobs by type (e.g., Internship, Full-time) and schedule (e.g., Part-time, Full-time).
* **Application Submission:** An easy-to-use form for users to apply for jobs.
* **Notifications:** Users receive notifications from admins regarding their application status and interview schedules.

### 👑 Admin Features
* **Admin Dashboard:** A central place to view and manage all user applications.
* **Application Review:** Admins can view the details submitted by each applicant.
* **Interview Scheduling:** Admins can set an interview date and send it as a notification to the user.
* **(Optional) Job Management:** Admins can create, update, or delete job postings.

---

## 🛠️ Technology Stack

* **Frontend:** React.js (with Vite)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Tokens (JWT)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have the following software installed on your machine:
* Node.js (LTS version recommended)
* npm (comes with Node.js)
* MongoDB (or a MongoDB Atlas connection string)

### Installation & Setup

1.  **Clone the repository to your local machine:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Set up the Backend Server:**
    ```sh
    cd server
    npm install
    ```
    Create a file named `.env` in the `server` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

3.  **Set up the Frontend Client:**
    ```sh
    cd ../client
    npm install
    ```

### Running the Application

1.  **Start the backend server** (from the `/server` directory):
    ```sh
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

2.  **Start the frontend client** (from the `/client` directory):
    ```sh
    npm run dev
    ```
    The React application will open in your browser at `http://localhost:5173` (or another available port).

