import React from 'react';
import { ArrowRight, Heart, BookOpen, Users } from 'lucide-react';

export default function SplashPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-gray-100 p-4">
      {/* Logo and Header */}
      {/* <div className="absolute top-5 left-5 flex items-center space-x-2">
        <img src="/opp_int.jpg" alt="Opportunity International Logo" className="w-16 h-auto" />
      </div> */}

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold font-mono">
          <span className="animate-gradient-text bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 bg-clip-text text-transparent">
            Opportunity International
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering communities through education and opportunity
        </p>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Community Support</h3>
            <p className="text-gray-600">Providing resources and support to underprivileged communities</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Education Access</h3>
            <p className="text-gray-600">Creating pathways to quality education for all</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Empowerment</h3>
            <p className="text-gray-600">Building sustainable futures through skill development</p>
          </div>
        </div>

        {/* CTA Button with Gradient */}
        <button 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-full shadow-lg hover:shadow-xl overflow-hidden"
          onClick={() => window.location.href = '/login'}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 animate-gradient-x"></div>
          <span className="relative flex items-center">
            Access Education Portal
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600">10,000+</div>
            <div className="text-gray-600">Students Supported</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600">Communities Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">95%</div>
            <div className="text-gray-600">Program Success Rate</div>
          </div>
        </div>
      </div>

      {/* Add keyframes for both gradient animations */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}