import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const AdminPanel = () => {
  const { food_list } = useContext(StoreContext);
  const recentItems = [...food_list].slice(-3).reverse(); 

  return (
    <div className="admin-panel p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-lg font-semibold mb-2">Recently Added or Edited Products</h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-white shadow border rounded-lg">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {recentItems.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-2">{item.name}</td>
                <td className="p-2">${item.price}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">
                  <img src={item.image} alt={item.name} className="h-10 w-10 object-cover rounded" />
                </td>
              </tr>
            ))}
            {recentItems.length === 0 && (
              <tr>
                <td colSpan="4" className="p-2 text-center text-gray-500">No recent products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
