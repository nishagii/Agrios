import axios from "axios";
import React, { useEffect, createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [all_product, setAllProduct] = useState([]);
    const [userType, setUserType] = useState("");
    const [userName, setUserName] = useState('');
    const [error, setError] = useState(null);

    const url = "http://localhost:4000";

    // Function to handle errors
    const handleError = (error) => {
        console.error("An error occurred:", error);
        setError(error.message);
    };

    const updateCart = (newCartItems) => {
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    const addToCart = async (itemId) => {
        const newCartItems = { ...cartItems };
        if (!newCartItems[itemId]) {
            newCartItems[itemId] = 5;
        } else {
            newCartItems[itemId] += 5;
        }
        updateCart(newCartItems);
        if (token) {
            await axios.post(url + '/api/cart/add', { itemId }, { headers: { Authorization: `Bearer ${token}` } });
        }
    };

    const removeFromCart = async (itemId) => {
        const newCartItems = { ...cartItems };
        if (newCartItems[itemId] && newCartItems[itemId] > 0) {
            newCartItems[itemId] -= 5;
            updateCart(newCartItems);
            if (token) {
                await axios.post(url + '/api/cart/remove', { itemId }, { headers: { Authorization: `Bearer ${token}` } });
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === item);
                if (itemInfo) {  // Check if itemInfo is defined
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchAllProduct = async () => {
        try {
            const response = await axios.get(url + '/api/fvege/list');
            setAllProduct(response.data.data);
        } catch (error) {
            handleError(error);
        }
    };

    const fetchUserData = async () => {
        try {
            if (token) {
                const response = await axios.get(url + '/api/user/list', { headers: { Authorization: `Bearer ${token}` } });
                setUserType(response.data.type); // Ensure response.data.type is the correct field
                setUserName(response.data.name);
            }
        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchAllProduct();
            const savedToken = localStorage.getItem('token');
            if (savedToken) {
                setToken(savedToken);
                await fetchUserData(); // Fetch user data after setting the token
            }
            const savedUserType = localStorage.getItem('userType');
            const savedUserName = localStorage.getItem('userName');
            if (savedUserType) {
                setUserType(savedUserType);
            }
            if (savedUserName) {
                setUserName(savedUserName);
            }
            const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
            if (savedCartItems) {
                setCartItems(savedCartItems);
            }
        }
        loadData();
    }, []); // Empty dependency array to run only on mount

    const contextValue = {
        all_product,
        setCartItems,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        setUserType,
        setUserName,
        userName,
        userType,
        error
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
