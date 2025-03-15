import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CouponClaim = () => {
  const handleClaim = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/coupons/claim', {}, { withCredentials: true });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleClaim}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Claim Coupon
      </button>
    </div>
  );
};

export default CouponClaim;
