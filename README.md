
# 📦 Product Listing App

A fully responsive **Product Listing Application** built with **Next.js 16**, **Tailwind CSS**, **Axios**, and a clean **modular architecture**.  
Products are fetched from the public DummyJSON API and displayed with search, sorting, and a modal detail view.

---

## 🚀 Features

- **Fetch Products** from DummyJSON API  
- **Real-time Product Search** (filters by title)
- **Price Sorting**  
  - Low → High  
  - High → Low
- **Responsive Grid Layout**  
  - Mobile (1 column)  
  - Tablet (2–3 columns)  
  - Desktop (4 columns)
- **Reusable UI Components**  
  - `<ProductCard />`  
  - `<ProductModal />`
- **Custom Hook**  
  - `useProducts()` (fetching + filtering + sorting)
- **Axios HTTP client**
- **Next.js Image Optimization**
- **Tailwind CSS for styling**
- **Clean modular folder structure**

---

## 🗂 Folder Structure

```

app/
├── page.jsx
├── components/
│   ├── ProductCard.jsx
│   ├── ProductModal.jsx
│   └── index.js
├── hooks/
│   └── useProducts.js
└── services/
└── productService.js

````

---

## 🔧 Tech Stack

- **Next.js 16 (App Router + Turbopack)**
- **React 18**
- **Tailwind CSS**
- **Axios**
- **DummyJSON API**
- **Next.js `<Image />` Optimization**

---

## 🛠 Installation & Setup

Clone the repo:

```bash
git clone https://github.com/your-username/product-listing-app.git
cd product-listing-app
````

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit the app in your browser:

```
http://localhost:3000
```

---

## 🌐 API Used

DummyJSON Products Endpoint:

```
https://dummyjson.com/products
```

---


## 🔍 How It Works

### 1. Fetch Products

`productService.js` fetches the product list using axios.

### 2. Processing Logic

`useProducts.js` manages:

* loading state
* search filtering
* price sorting
* memoized computed results

### 3. UI Components

* `ProductCard.jsx` → product preview
* `ProductModal.jsx` → detailed popup

### 4. Fully Responsive

Built with Tailwind CSS responsive utilities.

---

## 📱 Screenshots

<img width="1908" height="879" alt="image" src="https://github.com/user-attachments/assets/0a5c6c1e-366b-4f14-8786-8ebef54239d3" />



