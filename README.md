# 🛍️ BalaJi ClothHouse

A full-stack MERN e-commerce web application for browsing and purchasing clothing/blouse products, built and maintained by **BalaJi Enterprises**.

**🔗 Live Demo:** [https://bala-ji-cloth-store.vercel.app/](https://bala-ji-cloth-store.vercel.app/)

---

## 📖 About

BalaJi ClothHouse is an online storefront that lets customers browse products, filter by category, and view detailed product listings. The app is built with a React frontend and a Node.js/Express backend, using MongoDB Atlas as the database, and is deployed on Vercel.

---

## ✨ Features

- 🛒 Product listing with category-based filtering
- 🔍 Search functionality
- 📦 Product detail pages
- ⚡ Skeleton/shimmer loading states for a smoother UX
- 🧹 Clear filter option for quick reset
- 📱 Responsive design across devices
- 🔄 State management with Redux for consistent data flow
- 🌐 RESTful API integration between frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- **React.js** – Component-based UI library
- **Redux** – Global state management
- **HTML5** – Markup structure
- **CSS3** – Styling and layout
- **JavaScript (ES6+)** – Core application logic

### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework for REST APIs

### Database
- **MongoDB Atlas** – Cloud-hosted NoSQL database

### Deployment
- **Vercel** – Hosting for both frontend and backend

---

## 📂 Project Structure

```
bala-ji-cloth-store/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
|   |        ├──    Reudx and Pages # Reusable UI components and store,slice file 
│   │   ├── Css/          # Css file (e.g., ProductPage.css)
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
└── README.md
```

> Note: Update this structure to match your actual repository layout if it differs.

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn
- A MongoDB Atlas account and connection string

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/bala-ji-cloth-store.git
   cd bala-ji-cloth-store
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file inside the `server` folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Create a `.env` file inside the `client` folder (if needed for API base URL):
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

5. **Run the backend server**
   ```bash
   cd server
   npm run dev
   ```

6. **Run the frontend**
   ```bash
   cd client
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

This project is deployed on **Vercel**:
- Frontend and backend are configured as separate deployments (or via Vercel serverless functions, depending on setup).
- Environment variables (`MONGO_URI`, etc.) are configured in the Vercel project settings.

**Live URL:** [https://bala-ji-cloth-store.vercel.app/](https://bala-ji-cloth-store.vercel.app/)

---

## 🔌 API Overview

| Method | Endpoint             | Description                  |
|--------|-----------------------|-------------------------------|
| GET    | `/api/products`       | Fetch all products            |
| GET    | `/api/products/:id`   | Fetch a single product        |
| GET    | `/api/products?category=` | Fetch products by category |
| POST   | `/api/products`       | Add a new product (admin)     |

> Update this table with your actual API routes.

---

## 🗺️ Roadmap

- [ ] Add user authentication (login/signup)
- [ ] Implement cart and checkout flow
- [ ] Add payment gateway integration
- [ ] Order history and tracking
- [ ] Admin dashboard for product/inventory management

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

**BalaJi Enterprises**
Maintained by Keshav

- 🔗 Live Site: [bala-ji-cloth-store.vercel.app](https://bala-ji-cloth-store.vercel.app/)
