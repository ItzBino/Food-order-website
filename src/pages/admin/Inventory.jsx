import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import ProductForm from '../../components/Admin/ProductForm';
import { toast } from 'react-toastify';

const Inventory = () => {
  const { food_list, setFoodList } = useContext(StoreContext);
  const [editingItem, setEditingItem] = useState(null);

  const deleteProduct = (_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      setFoodList(prev => prev.filter(item => item._id !== _id));
      toast.success("Product deleted successfully");
    }
  };

  const handleProductUpdate = (msg) => {
    toast.success(msg);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Inventory</h2>

      {/* ProductForm will call back after add/edit */}
      <ProductForm
        editingItem={editingItem}
        setEditingItem={setEditingItem}
        onAction={(type) =>
          type === 'edit'
            ? handleProductUpdate("Product updated successfully")
            : handleProductUpdate("Product added successfully")
        }
      />

      <div className="grid gap-4 mt-6">
        {food_list.map((item) => (
          <div key={item._id} className="p-4 border rounded shadow flex justify-between">
            <div>
              <p><b>{item.name}</b> (${item.price})</p>
              <p>{item.category}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditingItem(item)} className="text-blue-500">Edit</button>
              <button onClick={() => deleteProduct(item._id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;



