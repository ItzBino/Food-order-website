import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const FoodItem = ({ image, price, _id, description, name }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[_id?.toString()] || 0;

  const handleAddItem = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User:", user);
    if (!user) {
      toast.warn("Please log in to add items to your cart.");
      return;
    }

    console.log("Adding to cart:", _id);
    addToCart(_id);
  };

  const handleRemoveItem = () => {
    removeFromCart(_id);
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            className='add'
            onClick={handleAddItem}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className='food-item-counter'>
            <img onClick={handleRemoveItem} src={assets.remove_icon_red} alt="remove" />
            <p>{itemCount}</p>
            <img onClick={handleAddItem} src={assets.add_icon_green} alt="add" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc dark:text-white">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
