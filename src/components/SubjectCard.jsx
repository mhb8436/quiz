"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/quiz/${subject.name.toLowerCase()}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 p-6">
        {/* Icon Container */}
        <div className="w-16 h-16 mb-4 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-2xl text-white font-bold">
            {subject.name.charAt(0)}
          </span>
        </div>

        {/* Subject Name */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {subject.name}
        </h2>

        {/* Question Count */}
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-lg">
            {subject.questions.length} Questions
          </span>
        </div>

        {/* Start Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-full text-center font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            Start Quiz
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full transform translate-x-12 -translate-y-12 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full transform -translate-x-12 translate-y-12 opacity-20"></div>
    </motion.div>
  );
}
