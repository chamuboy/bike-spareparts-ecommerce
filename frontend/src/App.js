import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import AddItem from './pages/AddItem';
import ItemList from './components/ItemList';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminOrderList from './components/AdminOrderList';  
import AdminOrderDetail from './components/AdminOrderDetail';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetails';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
                <Route path="/add-item" element={<AddItem />} />
                <Route path="/items/:category/:subcategory" element={<ItemList />} />
                <Route path="/item/:id" element={<ItemDetail/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout/:id" element={<Checkout />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/admin/orders" element={<AdminOrderList />} />
                <Route path="/admin/orders/:orderId" element={<AdminOrderDetail />} />
                <Route path="/orders" element={<OrderList />} />
                <Route path="/orders/:orderId" element={<OrderDetail />} />
            </Routes>
        </div>
    );
}

export default App;
