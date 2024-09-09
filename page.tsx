'use client'
import { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Navbar from "@/components/Navbar";
import Slideshow from '@/components/slideshow';
import Footer from '@/components/Footer';

export default function Register() {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/auth/v1/register', { name, email, password, phone , birthday, address, gender});
      console.log('Registration success:', data);
      setIsRegistered(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
        setMessage(error.response?.data?.message || 'Registration failed');
      } else {
        console.error('Unexpected error:', (error as Error).message);
        setMessage('Unexpected error occurred');
      }
    }
  };

  const sendOtp = async () => {
    try {
      const { data } = await axios.post('http://localhost:4000/auth/v1/send-otp-email', { email });
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:4000/auth/v1/verify-otp-email', { otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage((error as any).response?.data?.error || 'Error verifying OTP.');
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <Navbar />
    <Slideshow />
    <br></br>
    <main className="flex-grow p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
        {!isRegistered ? (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                    <input
                        id="birthday"
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder="Birthday"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-orange-400 text-white font-medium rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-150 ease-in-out"
                >
                    Register
                </button>
            </form>
        ) : (
            <div className="space-y-6">
                <button
                    type="button"
                    onClick={sendOtp}
                    className="w-full py-2 px-4 bg-orange-300 text-white font-medium rounded-lg shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-150 ease-in-out"
                >
                    Send OTP
                </button>
                <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                    <input
                        id="otp"
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-150 ease-in-out"
                    />
                </div>
                <button
                    type="button"
                    onClick={verifyOtp}
                    className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
                >
                    Verify OTP
                </button>
                {message && <p className="text-center text-sm text-gray-600">{message}</p>}
            </div>
        )}
    </main>
    <br></br>
    <Footer/>
</div>
  )}