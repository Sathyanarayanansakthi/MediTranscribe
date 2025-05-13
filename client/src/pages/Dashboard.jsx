import React from 'react';
import { FaUser, FaCog } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 w-full md:w-64 p-5 text-white md:h-screen">
        <h2 className="text-3xl font-bold text-center mb-6">MediTranscribe</h2>
        <nav>
          <ul>
            <li className="mt-10">
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 hover:text-teal-300 transition-all"
              >
                <FaUser className="text-xl" />
                <span className="text-xl">Dashboard</span>
              </Link>
            </li>
            <li className="mt-10">
              <Link
                to="/dashboard/convert"
                className="flex items-center space-x-3 hover:text-teal-300 transition-all"
              >
                <FaCog className="text-xl" />
                <span className="text-xl">Convert Prescription</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
