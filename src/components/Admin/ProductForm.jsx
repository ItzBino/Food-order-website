import React, { useState, useEffect, useContext, useRef } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const ProductForm = ({ editingItem, setEditingItem, onAction }) => {
  const { food_list, setFoodList } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      setFormData({
        name: '',
        price: '',
        category: '',
        image: '',
        description: '',
      });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.price || !formData.category) {
      toast.error("Please fill out all required fields");
      return;
    }

    if (editingItem) {
      setFoodList(prev => prev.map(item =>
        item._id === editingItem._id ? formData : item
      ));
      toast.success("Product updated successfully");
      onAction?.("edit");
    } else {
      setFoodList(prev => [
        ...prev,
        { ...formData, _id: uuidv4() },
      ]);
      toast.success("Product added successfully");
      onAction?.("add");
    }

    setEditingItem(null);
    setFormData({ name: '', price: '', category: '', image: '', description: '' });
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: url }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: url }));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="mb-4 flex flex-col items-center p-2">
      <input className='mb-2 w-80 p-3 border border-gray-800' name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input className='mb-2 w-80 p-3 border border-gray-800' name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input className='mb-2 w-80 p-3 border border-gray-800' name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      
      <div
        className="mb-2 w-80 h-40 border-2 border-dashed border-gray-800 flex flex-col items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 text-sm text-gray-600 relative"
        onDrop={handleImageDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current.click()}
      >
        {formData.image ? (
          <img src={formData.image} alt="preview" className="w-full h-10 object-cover" />
        ) : (
          <p>Drag & drop or click to upload image</p>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </div>

      <textarea className='mb-2 w-80 p-3 border border-gray-800' name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button className='bg-green-800 text-white w-40 p-2 rounded hover:bg-green-900' onClick={handleSubmit}>
        {editingItem ? "Update" : "Add"} Product
      </button>
    </div>
  );
};

export default ProductForm;
