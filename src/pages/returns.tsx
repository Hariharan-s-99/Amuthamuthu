// pages/returns.tsx
import React from 'react';
import Link from 'next/link';

const Returns: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold text-green-600">
            AMUTHAMUTHU
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Returns</h1>
        <p className="text-gray-600">Our return policy details. Coming soon...</p>
      </main>
    </div>
  );
};

export default Returns; 