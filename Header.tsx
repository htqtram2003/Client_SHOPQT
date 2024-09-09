import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header bg-white">
      <div className="top-bar rounded-b-lg p-3  fixed top-0 right-0 w-full lg:w-auto">
        <ul className="flex space-x-10 items-center justify-end">
          <li><Link href="#" className="text-gray-700 hover:text-yellow-300">Giới thiệu</Link></li>
          <li><Link href="#" className="text-gray-700 hover:text-yellow-300">Liên hệ</Link></li>
          <li><Link href="#" className="text-gray-700 hover:text-yellow-300">Câu hỏi</Link></li>
          <li><Link href="#" className="text-gray-700 hover:text-yellow-300">Điều khoản</Link></li>
          <li><Link href="/login" className="text-gray-700 hover:text-yellow-300">Login</Link></li>
          <li><Link href="/register" className="text-gray-700 hover:text-yellow-300">Register</Link></li>
        </ul>
      </div>
      <div className="logo-search flex justify-between p-9">
        <div className="logo flex items-center">
          <Image src="/images/logoqt.svg" alt="Thời Trang QT" width={70} height={50} />
          <span className="ml-2 text-4xl font-extrabold text-gray-900">Thời Trang QT</span>
        </div>
        <div className="flex items-center">
        <div className="relative flex items-center max-w-lg mx-auto">
  <input 
    type="text" 
    placeholder="Tìm kiếm sản phẩm..." 
    className="w-full p-4 pl-10 pr-80 right-0 top-0 bottom-0 px-4 rounded-r-full border  border-gray-300 rounded-l-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500 text-gray-900"
  />
  <button className="absolute right-0 top-0 bottom-0 px-4 rounded-r-full bg-yellow-500 text-white flex items-center justify-center shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z" />
  </svg>
</button>

</div>

</div>

        <div className="contact-info text-right">
          <p><strong>Hotline đặt hàng</strong></p>
          <p><strong>0366 455 679</strong></p>
          <p><strong>06H - 20H mỗi ngày</strong></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
