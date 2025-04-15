import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="space-y-4">
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold">Foliage</h2>
          <p>A web app for flower enthusiasts to track flower-foraging locations.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-semibold">BudgetSync</h2>
          <p>A personal finance app that helps users manage and track their budget.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
