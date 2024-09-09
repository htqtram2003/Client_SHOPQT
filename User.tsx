'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/user'
import React from 'react';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:4000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-gray-800 dark:text-gray-200 tracking-tight leading-tight drop-shadow-lg text-center">
    DANH SÁCH USERS
  </h1>
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {currentUsers.map((user) => (
      <li key={user._id} className="p-6 border rounded-lg shadow-lg transform transition-all hover:scale-105">
        <img
          src={user.image}
          alt={user.name}
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-600 object-cover"
        />
        <h2 className="text-2xl font-bold text-center text-indigo-700">{user.name}</h2>
        <p className="text-center text-gray-600">Email: {user.email}</p>
      </li>
    ))}
  </ul>

  {/* Pagination */}
  <div className="flex justify-center mt-12">
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-indigo-500 text-white rounded-l-lg hover:bg-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    <span className="px-4 py-2 bg-white text-indigo-700 border border-indigo-500">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</div>

  );
}
