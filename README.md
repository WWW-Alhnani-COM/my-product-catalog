
# MyShop - Product Catalog

<p align="center">
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge">
</p>
<p align="center">
  متجر إلكتروني بسيط مبني باستخدام React و Vite. يعرض منتجات من Fake Store API ويوفر تصفح فئات، بحث، وصفحات تفاصيل المنتج.
</p>

<p align="center">
  <img src=" https://img.shields.io/github/languages/count/WWW-Alhnani-COM/my-product-catalog " alt="GitHub language count">
  <img src="https://img.shields.io/github/license/WWW-Alhnani-COM/my-product-catalog " alt="License">
  <img src="https://img.shields.io/github/last-commit/WWW-Alhnani-COM/my-product-catalog " alt="GitHub last commit">
</p>

---

## 📋 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API](#-api)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 Demo

[https://www-alhnani-com.github.io/my-product-catalog/ ]([https://www-alhnani-com.github.io/my-product-catalog/](https://my-product-catalog-ten.vercel.app/) )

---

## ✨ Features

- **Responsive Design**: واجهة متجاوبة تتناسب مع جميع أحجام الشاشات (الهاتف، التابلت، الحاسوب).
- **Product Catalog**: عرض منتجات من Fake Store API.
- **Category Navigation**: تصفح المنتجات حسب الفئات.
- **Product Details**: عرض تفاصيل المنتج (الاسم، السعر، الوصف، التصنيف، التقييم).
- **Search Functionality**: بحث عن المنتجات باستخدام حقل بحث تفاعلي.
- **Featured Products Carousel**: عرض إعلانات متحركة في البانر العلوي.
- **Discount Badges**: عرض شارات خصم على البطاقات.
- **Shopping Cart Icon**: أيقونة سلة المشتريات في الهيدر.
- **Modern UI**: تصميم حديث وأنيق باستخدام CSS Modules.

---

## 🛠 Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/ ) - مكتبة JavaScript لبناء واجهات المستخدم.
  - [Vite](https://vitejs.dev/ ) - أداة بناء سريعة لمشاريع JavaScript الحديثة.
  - [React Router DOM](https://reactrouter.com/ ) - لتوجيه الصفحات داخل التطبيق.
- **Styling**:
  - [CSS Modules](https://github.com/css-modules/css-modules ) - تنسيق مكونات React بشكل محلي.
- **API**:
  - [Fake Store API](https://fakestoreapi.com/ ) - API وهمي لجلب بيانات المنتجات.
- **Icons**:
  - [React Icons](https://react-icons.github.io/react-icons/ ) - مجموعة أيقونات لاستخدامها في التطبيق.
- **Deployment**:
  - [GitHub Pages](https://pages.github.com/ ) - لاستضافة النسخة النهائية من التطبيق.

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/WWW-Alhnani-COM/my-product-catalog.git 
   ```

2. **Navigate to the project directory:**

   ```bash
   cd my-product-catalog
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

---

## 🧪 Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser and go to:**

   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
my-product-catalog/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Categories/
│   │   ├── products/
│   │   │   └── ProductCard/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── LoadingSpinner/
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Products/
│   │   └── ProductDetails/
│   ├── hooks/
│   │   ├── useProducts.js
│   │   └── useProductDetails.js
│   ├── services/
│   ├── contexts/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 API

يستخدم المشروع [Fake Store API](https://fakestoreapi.com/ ) للحصول على بيانات المنتجات. لا حاجة إلى مصادقة.

- **Get All Products**: `https://fakestoreapi.com/products `
- **Get Product by ID**: `https://fakestoreapi.com/products/ {id}`

---

## 📸 Screenshots

<!-- قم بتحميل الصور إلى مجلد مثل 'docs/screenshots/' داخل مستودعك على GitHub -->
<!-- ثم استخدم روابط GitHub المباشرة للصور -->

<p align="center">
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge">


</p>

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change, or submit a Pull Request directly.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

Mohammad Alhnani - [Mohammadalhnani@gmail.com] - [[https://www.linkedin.com/in/muhammad-al-hanani-5a5a50373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app]]

Project Link: [https://github.com/WWW-Alhnani-COM/my-product-catalog ](https://github.com/WWW-Alhnani-COM/my-product-catalog )

```
