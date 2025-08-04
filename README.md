# Advanced React E-Commerce Application

A modern, feature-rich e-commerce application built with React, Redux Toolkit, and React Query, demonstrating advanced React concepts and best practices.

## 🚀 Features

### Product Catalog
- **Product Listing**: Display all products with title, price, category, description, rating, and image
- **Category Navigation**: Dynamic category filtering using a dropdown populated from the API
- **Add to Cart**: One-click addition of products to shopping cart from the product listing

### Shopping Cart Management
- **Redux Toolkit State Management**: Centralized cart state with actions for add, update, and remove
- **Session Storage Persistence**: Cart data persists across browser sessions
- **Quantity Management**: Update product quantities directly in the cart
- **Real-time Calculations**: Dynamic total price and item count updates

### Advanced Features
- **React Query Integration**: Efficient data fetching with caching and error handling
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Loading States**: Proper loading indicators throughout the application
- **Error Handling**: Comprehensive error states and user feedback
- **Checkout Simulation**: Complete checkout flow with cart clearing

## 🛠 Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Redux Toolkit**: Simplified Redux for state management
- **React Query (TanStack Query)**: Data fetching and server state management
- **FakeStoreAPI**: Mock e-commerce API for product data
- **CSS3**: Modern CSS with Grid and Flexbox layouts
- **Session Storage**: Browser storage for cart persistence

## 📡 API Integration

This application integrates with [FakeStoreAPI](https://fakestoreapi.com/) to demonstrate:

- **Product Fetching**: Retrieve all products from `/products`
- **Category Fetching**: Get categories from `/products/categories`
- **Category Filtering**: Filter products by category using `/products/category/{category}`
- **Caching Strategy**: React Query handles caching and background updates

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd advanced-react-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🏗 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header with cart count
│   ├── Home.jsx               # Main product listing page
│   ├── CategoryFilter.jsx     # Category dropdown component
│   ├── ProductCard.jsx        # Individual product display
│   ├── ShoppingCart.jsx       # Shopping cart page
│   ├── CartItem.jsx           # Individual cart item
│   └── CheckoutModal.jsx      # Checkout confirmation modal
├── store/
│   ├── store.js               # Redux store configuration
│   └── cartSlice.js           # Cart state slice with reducers
├── services/
│   └── api.js                 # API service functions
├── hooks/
│   └── useApi.js              # React Query hooks
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── styles/                    # Component-specific CSS files
```

## 🎯 Key Learning Objectives Achieved

### State Management
- ✅ Redux Toolkit implementation for shopping cart
- ✅ Session storage integration for data persistence
- ✅ Complex state updates with proper immutability

### Data Fetching
- ✅ React Query for efficient API calls
- ✅ Caching strategies and background updates
- ✅ Loading and error state management

### Component Architecture
- ✅ Reusable component design
- ✅ Props and event handling patterns
- ✅ Conditional rendering and list rendering

### User Experience
- ✅ Responsive design for all devices
- ✅ Intuitive navigation and interactions
- ✅ Real-time feedback and updates

## 🔧 Configuration

### Redux Store Configuration
The application uses Redux Toolkit with the following setup:
- Cart slice for managing shopping cart state
- Session storage middleware for persistence
- Proper action creators and selectors

### React Query Configuration
- 5-minute stale time for product data
- 10-minute stale time for category data
- Automatic background refetching
- Error boundary handling

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first CSS approach
- Flexible grid layouts for product display
- Adaptive navigation for different screen sizes
- Touch-friendly interactions on mobile devices

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Image Lazy Loading**: Product images load as needed
- **Memoization**: React Query caching prevents unnecessary requests
- **Optimized Bundle**: Tree shaking and minification in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStoreAPI](https://fakestoreapi.com/) for providing the mock e-commerce API
- [React](https://reactjs.org/) team for the amazing framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management
- [TanStack Query](https://tanstack.com/query) for excellent data fetching capabilities

---

**Built with ❤️ as part of Advanced React learning objectives**
