'use client'
import { useState, useRef, useEffect } from 'react';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-lg text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-black"
      >
        Tất cả loại hàng
        <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Quần</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Áo thun</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Áo khoác</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Đồ lót</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Đồ mùa hè</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Đồ mua đông</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Đồ dành cho nam</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Đồ dành cho nữ</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Đồ dành cho trẻ em</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
