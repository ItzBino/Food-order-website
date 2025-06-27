import { createContext, useState } from "react";
import { food_list as defaultFoodList } from "../assets/assets";
import { useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState(() => {
  const stored = localStorage.getItem("food_list");
  return stored ? JSON.parse(stored) : defaultFoodList;
});



useEffect(() => {
  localStorage.setItem("food_list", JSON.stringify(foodList));
}, [foodList]);



  const addToCart = (itemId) => {
    const id = itemId.toString();
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    const id = itemId.toString();
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id]--;
      }
      return updated;
    });
  };

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = foodList.find((product) => product._id.toString() === itemId);
      if (item) {
        totalAmount += item.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    food_list: foodList,       
    setFoodList,               
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;








// import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemId) => {
//     const id = itemId.toString();
//     setCartItems((prev) => ({
//       ...prev,
//       [id]: prev[id] ? prev[id] + 1 : 1,
//     }));
//   };

//   const removeFromCart = (itemId) => {
//     const id = itemId.toString();
//     setCartItems((prev) => {
//       const updated = { ...prev };
//       if (updated[id] === 1) {
//         delete updated[id];
//       } else {
//         updated[id]--;
//       }
//       return updated;
//     });
//   };

//   const getTotalQuantity = () => {
//     return Object.values(cartItems).reduce((a, b) => a + b, 0);
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartItems) {
//       const item = food_list.find((product) => product._id.toString() === itemId);
//       if (item) {
//         totalAmount += item.price * cartItems[itemId];
//       }
//     }
//     return totalAmount;
//   };

//   const contextValue = {
//     cartItems,
//     food_list,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     getTotalQuantity,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
