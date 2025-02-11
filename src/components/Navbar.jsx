import { FaHome, FaStar } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const points = useSelector((state) => state.points);

  return (
    <nav className="py-2 px-4 lg:py-3 lg:px-5 bg-lightGold fixed z-50 top-0 left-[50%] translate-x-[-50%] rounded-b-lg shadow-lg shadow-broun">
      <ul className="flex items-center justify-center gap-4 md:gap-7 lg:gap-10">
        <li onClick={() => navigate("")}>
          <div className="py-1 px-2 rounded-lg shadow-lg bg-white text-[16px] md:text-[20px] lg:text-[22px] shadow-sm border flex items-center justify-between gap-2">
            <span className="text-lightYellow">
              <FaStar />
            </span>
            <span className="text-black font-bold">{points}</span>
          </div>
        </li>
        <li onClick={() => navigate("/home")}>
          <button className="rounded-full p-3 text-[18px] shadow-lg border md:text-[24px] lg:text-[30px] text-broun bg-white">
            <FaHome />
          </button>
        </li>
        <li onClick={() => navigate("/map")}>
          <button className="rounded-full p-3 text-[18px] shadow-lg border md:text-[24px] lg:text-[30px] text-broun bg-white">
            <FaMapLocation />
          </button>
        </li>
        <li onClick={() => navigate("/redeem")}>
          <button className="py-1 px-2 rounded-lg bg-white shadow-lg border text-broun md:text-[20px] lg:text-[22px]">
            Redeem
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
