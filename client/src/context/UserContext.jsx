import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext({
  user: null,
  cart: [],
  addProductToCart: (data) => {},
  authenticate: (data) => {},
  increment: () => {},
  decrement: () => {},
  removeProductFromCart: (id) => {}
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");
  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:4269/api/user/${id}`);
        console.log(res);
        if (res.status == 200) {
          setUser(res.data.user);
          setCart(res.data.user.cart);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const checkAuth = () => {
      if (id) {
        const result = fetch("/");
        setUser({ id });
      }
    };

    checkAuth();
    getUserDetail();
  }, []);

  const authenticate = (data) => {
    setUser({ ...data });
  };

  const addProductToCart = (data) => {
    setCart([...cart, { ...data }]);
  };   
  
  const removeProductFromCart = (id) => {
    let changedCart = cart.filter(c => c._id !== id);

    setCart([...changedCart]);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        authenticate,
        addProductToCart,
        cart,
        removeProductFromCart
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
