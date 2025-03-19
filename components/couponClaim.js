'use client'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CouponClaim = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleClaim = async () => {
    try {
      setErrorMessage(''); // Clear previous errors
      const response = await axios.post('http://localhost:5000/api/coupons/claim', {}, { withCredentials: true });
      toast.success(response.data.message);
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong!';
      setErrorMessage(message);
      toast.error(message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Claim Your Coupon</h2>
        <button
          onClick={handleClaim}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Claim Coupon
        </button>
        {errorMessage && (
          <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default CouponClaim;
