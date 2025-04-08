# School Project for CRUD App with FastAPI, MySQL, and Frontend UI 

## 🧠 About the Project

We built this project to deepen our understanding of databases and how to interact with them in real-world applications. Over the past few weeks, we explored various databases and benchmarking methods to evaluate their strengths and differences.

For our final implementation, we created a full-stack **CRUD (Create, Read, Update, Delete)** application using:

- 🐍 **FastAPI** as the backend framework
- 🛢 **MySQL** for the database
- 💻 **Vanilla JavaScript + HTML/CSS** for the frontend UI

Our app allows users to view, insert, update, and delete user data through a simple web interface.

---


## 🔧 Features

- 📋 Display user data in a dynamic HTML table
- ➕ Add new users to the database
- ✏️ Update existing user information
- ❌ Delete users by ID
- 🔄 Auto-refresh UI on data operations

---

## Technologies Used: 
- FastAPI
- MySQL
- HTML/CSS
- JavaScript (Vanilla)
- Docker (for setup and benchmarking)
- SQLAlchemy (optional ORM layer)

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js (optional for frontend development)
- MySQL server
- Docker (optional, helpful for cross-platform issues)

### Backend Setup (FastAPI)

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate

2. Install dependencies;
   ```bash
   pip install fastapi uvicorn sqlalchemy pymysql

3. Start FastAPI Server:
   ```bash
   uvicorn main:app --reload


### Benchmarking and Challenges: 
One of the main challenges we faced was setting up benchmarking tools across platforms. Many benchmarking tools are built for Windows, but our team mostly uses macOS. We addressed this by:

Trying Docker-based solutions

Following cross-platform tutorials and community guidance


