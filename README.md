---

Comprehensive Cybersecurity Assistance Platform

Enhanced Digital Safety Made Simple


---

🚀 Problem Statement

In today’s interconnected world, safeguarding digital assets is crucial. However, cybersecurity tools are often fragmented and difficult to use. Our solution consolidates these tools into one user-friendly platform, empowering users with knowledge and tools to enhance their digital safety.


---

✨ Our Solution

A centralized platform offering a suite of cybersecurity tools, seamlessly accessible via Google Login, designed to improve online safety with simplicity and efficiency.


---

🌟 Features

🌐 Landing Page

Overview of Services: A clear and concise description of all available tools.

Google Login: Quick and secure access with OAuth 2.0 integration.


📊 Dashboard

Your centralized hub for all cybersecurity features:

🔑 Password Strength Checker

Analyzes passwords for strength.

Provides actionable suggestions for improvement.


🔐 Password Encryption Plugin

Converts simple passwords into secure, encrypted versions.

Allows reusing encrypted passwords by entering the same simple password.


📧 Email Breach Checker

Checks if your email address has been part of any known data breaches.


📂 Code Vulnerability Scanner

Upload code files or paste GitHub links to identify vulnerabilities.


📰 Cybersecurity Blog

Stay informed with the latest threats and practical security advice.



---

💻 Technology Stack

Frontend

Framework: Next.js

Styling: Tailwind CSS, Styled Components

Authentication: Google OAuth 2.0 (via next-auth)


Backend

Database: Neon (with Prisma ORM)

APIs: Integrated third-party APIs for enhanced functionality


Deployment

Frontend: Vercel

Backend: Neon



---

📦 Setup Instructions

Prerequisites

Node.js: Installed on your machine.

Neon Database: Set up either locally or via the cloud.

API Keys: Ensure you have the following:

Google OAuth credentials

API key for Have I Been Pwned



Steps to Run the Project

1. Clone the Repository:

git clone https://github.com/ramgopal99/Shieldify
cd Shieldify


2. Install Dependencies:

npm install


3. Configure Environment Variables:

Create a .env.local file in the root directory.

Add the following variables:

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
HIBP_API_KEY=your_hibp_api_key
DATABASE_URL=your_database_url



4. Run the Application:

npm run dev


5. Access the App:
Open http://localhost:3000 in your browser.




---

🛠️ Deployment

Frontend Deployment (Vercel):

1. Connect your GitHub repository to Vercel.


2. Deploy the project directly from the Vercel dashboard.



Backend Deployment (Neon):

1. Ensure your Neon database is set up and running.


2. Deploy the backend configurations for Prisma.




---

🤝 Contribution

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to improve the platform.


---

📧 Contact

For questions or support, email us at: ramgopalbagh009@gmail.com

---

🔒 Stay Safe Online!

Your digital security, simplified.


---

