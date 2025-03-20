"use client";

import React from "react";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("/api/scores");
        const data = await response.json();
        console.log(data);
        setResults(data);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Quiz Results</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Subject (Total Users)</th>
              <th className="py-2 px-4 border-b">Score</th>
              <th className="py-2 px-4 border-b">Total Questions</th>
              <th className="py-2 px-4 border-b">Correct Answers</th>
              <th className="py-2 px-4 border-b">Wrong Answers</th>
              <th className="py-2 px-4 border-b">Unattempted Questions</th>
              <th className="py-2 px-4 border-b">Percentage</th>
              <th className="py-2 px-4 border-b">Time Spent</th>
              <th className="py-2 px-4 border-b">Average Time Per Question</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">
                  {result.subject} ({result._count.userId})
                </td>
                <td className="py-2 px-4 border-b">{result._avg.score}</td>
                <td className="py-2 px-4 border-b">
                  {result._avg.totalQuestions}
                </td>
                <td className="py-2 px-4 border-b">
                  {result._avg.correctAnswers}
                </td>
                <td className="py-2 px-4 border-b">
                  {result._avg.wrongAnswers}
                </td>
                <td className="py-2 px-4 border-b">
                  {result._avg.unattemptedQuestions}
                </td>
                <td className="py-2 px-4 border-b">
                  {result._avg.percentage}%
                </td>
                <td className="py-2 px-4 border-b">{result._avg.timeSpent}</td>
                <td className="py-2 px-4 border-b">
                  {result._avg.averageTimePerQuestion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultPage;
