"use client";
import Sidebar from '../sidebar_components/sidebar';
import { useState } from "react";

export default function Dashboard() {
  // Initialize progress states for each project
  const [progress, setProgress] = useState({
    playground: 60,
    library: 45,
    stemLab: 30,
    cafeteria: 75,
  });

  // Handler to update the progress of a specific project
  const handleProgressChange = (project, value) => {
    setProgress((prev) => ({ ...prev, [project]: value }));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isAuthenticated={true}/>

      {/* Main Content */}
      <div className="w-4/5 p-8 space-y-6">
        {/* Top Row - Funding Cards */}
        <div className="flex space-x-6">
          {/* Funding Left Card */}
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800">Funding Left</h2>
            <div className="mt-4 text-gray-700">
              <p className="text-2xl font-semibold">$8,000</p>
              <p className="text-sm mt-2">
                <span className="font-bold text-green-500">+10%</span> from last month
              </p>
            </div>
          </div>

          {/* Monthly Funding Card */}
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800">Monthly Funding Received</h2>
            <div className="mt-4 text-gray-700">
              <p className="text-2xl font-semibold">$1,000</p>
              <p className="text-sm mt-2">
                <span className="font-bold text-green-500">+15%</span> from last month
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Ongoing Projects */}
        <div>
          <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Rebuilding Playground</h3>
              <div className="mt-4 text-gray-700">
                <p className="mb-2">Improving playground facilities for the kids.</p>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress.playground}
                  onChange={(e) => handleProgressChange("playground", e.target.value)}
                  className="w-full"
                />
                <p className="text-sm mt-2">{progress.playground}% Complete</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">New Library Construction</h3>
              <div className="mt-4 text-gray-700">
                <p className="mb-2">Building a new library for the school.</p>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress.library}
                  onChange={(e) => handleProgressChange("library", e.target.value)}
                  className="w-full"
                />
                <p className="text-sm mt-2">{progress.library}% Complete</p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Classroom Materials</h3>
              <div className="mt-4 text-gray-700">
                <p className="mb-2">Distributing Materials</p>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress.stemLab}
                  onChange={(e) => handleProgressChange("stemLab", e.target.value)}
                  className="w-full"
                />
                <p className="text-sm mt-2">{progress.stemLab}% Complete</p>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Cafeteria Renovation</h3>
              <div className="mt-4 text-gray-700">
                <p className="mb-2">Renovating the cafeteria facilities.</p>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress.cafeteria}
                  onChange={(e) => handleProgressChange("cafeteria", e.target.value)}
                  className="w-full"
                />
                <p className="text-sm mt-2">{progress.cafeteria}% Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
