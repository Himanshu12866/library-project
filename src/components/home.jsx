import "../styles/home.css";

export default function Home() {
    return (
        <div className="home-box">
            <div>
                <h1>WELCOME TO THE VIDEO WORLD</h1>
                <p>This is my first Full Stack Porject</p>
                <ul style={{ textAlign: "left", listStyle: "none" }}>
                    <li className="fw-bold">
                        1. Frontend (React)
                        <div>
                            <p style={{ textIndent: "25px" }}>
                                React will handle the user interface of your video library. You
                                will create components for different parts of the app such as:
                            </p>
                            <ul>
                                <li>Video Listing Page: Display all available videos.</li>
                                <li>
                                    Video Details Page: Shows video metadata, like title,
                                    description, category, etc.
                                </li>
                                <li>
                                    Search and Filter Features: Allow users to search for and
                                    filter videos based on categories, genres, or other metadata.
                                </li>
                                <li>
                                    User Authentication: Allow users to register, login, and
                                    manage their account.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <hr></hr>
                    <li className="fw-bold">
                        2. Backend (Node.js and Express)
                        <div>
                            <p style={{ textIndent: "25px" }}>
                                Express.js is the backend framework that will handle routing,
                                APIs, and server-side logic
                            </p>
                            <p>
                                Node.js will run the server and handle requests from the client
                            </p>
                            <ul>
                                <li>
                                    Routes: Create API endpoints to
                                    <ul>
                                        <li>Upload, retrieve, update, and delete video data.</li>
                                        <li>
                                            Serve video streams (if handling video storage directly).
                                        </li>
                                        <li>
                                            Manage user authentication (e.g., JWT-based login system).
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Middleware: Use middleware for handling authentication,
                                    request validation, and error handling.{" "}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <hr></hr>
                    <li>
                      
                       3. Database (MongoDB)
                        <div>
                            <p>MongoDB will store your data:</p>
                            <ul>
                                <li>
                                    Videos Collection: Metadata about the videos such as title,
                                    description, file path, upload date, etc.
                                </li>
                                <li>
                                    Users Collection: Information on users (if applicable),
                                    including usernames, passwords (hashed), favorites, watch
                                    history, etc.
                                </li>
                                <li>
                                    Comments or Reviews Collection: If your app includes user
                                    reviews or comments on videos.f
                                </li>
                            </ul>
                        </div>
                    </li>
                    <hr></hr>
                    <li>
                        4. File Storage
                        <ul>
                            <li>Cloud Storage: You can store video files in services like AWS S3, Google Cloud Storage, or use MongoDB GridFS to store large files directly in MongoDB.</li>
                            <li>Video Streaming: For streaming functionality, you will serve video files in chunks (using HTTP range headers).</li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li>
                        <p> 5. Authentication (Optional)</p>
                        <ul>
                            <li>Use JWT (JSON Web Tokens) to manage authentication.</li>
                            <li>Create login and registration routes.</li>
                            <li>Protect certain routes (e.g., uploading videos) with authentication middleware.</li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li>
                        <p> 6. Deployment</p>
                        <ul>
                            <li>
                                For deployment, you can host the frontend on platforms like Vercel or Netlify and the backend on Heroku or AWS.
                            </li>
                            <li>
                                Use MongoDB Atlas for the database in the cloud.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Steps Involved:</p>
                        <ul>
                            <li>
                                Set up React app with components for video listing, search, and viewing.
                            </li>
                            <li>
                                Build Express backend to handle CRUD operations for videos, authentication, and file handling.
                            </li>
                            <li>
                                Set up MongoDB to store video metadata and user data.
                            </li>
                            <li>
                                Integrate video storage/streaming using cloud services or a file system.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
