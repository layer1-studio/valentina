import React, { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('valentina_shopping_bag');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('valentina_wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('valentina_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem('valentina_orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        localStorage.setItem('valentina_shopping_bag', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('valentina_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        if (user) {
            localStorage.setItem('valentina_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('valentina_user');
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('valentina_orders', JSON.stringify(orders));
    }, [orders]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (productId, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    const addOrder = (order) => {
        setOrders(prev => [order, ...prev]);
    };

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return total + (price * item.quantity);
    }, 0);

    return (
        <StoreContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal,
            wishlist, toggleWishlist,
            user, login, logout,
            orders, addOrder,
            isCartOpen, setIsCartOpen,
            isSearchOpen, setIsSearchOpen,
            isWishlistOpen, setIsWishlistOpen,
            isProductModalOpen, setIsProductModalOpen,
            selectedProduct, setSelectedProduct,
            isOrderModalOpen, setIsOrderModalOpen,
            selectedOrder, setSelectedOrder
        }}>
            {children}
        </StoreContext.Provider>
    );
};
