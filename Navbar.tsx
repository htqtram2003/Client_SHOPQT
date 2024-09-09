import DropdownMenu from "@/components/DropdownMenu";

const Navbar = () => (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <DropdownMenu />
      <ul className="flex space-x-9">
      <li>
    <a href="/" className="text-white hover:text-yellow-500 hover:underline font-medium transition-colors duration-300">
      Trang chủ
    </a>
  </li>
  <li>
    <a href="#" className="text-white hover:text-yellow-500 hover:underline font-medium transition-colors duration-300">
      Sản phẩm
    </a>
  </li>
  <li>
    <a href="#" className="text-white hover:text-yellow-500 hover:underline font-medium transition-colors duration-300">
      Giỏ hàng
    </a>
  </li>
  <li>
    <a href="#" className="text-white hover:text-yellow-500 hover:underline font-medium transition-colors duration-300">
      Thanh toán
    </a>
  </li>
  <li>
    <a href="#" className="text-white hover:text-yellow-500 hover:underline font-medium transition-colors duration-300">
      Liên hệ
    </a>
  </li>
      </ul>
      <div className="space-x-4">
        <span>🔔</span>
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </nav>
  );
  
  export default Navbar;
  