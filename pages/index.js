import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Deliberate, Methodical, and Transparent Leadership
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Ryan Bradley for Florida's 1st Congressional District, 2028
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#join"
            className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-blue-100 transition"
          >
            Join the Campaign
          </a>
          <a
            href="#volunteer"
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white hover:text-blue-800 transition"
          >
            Volunteer
          </a>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="join" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Campaign</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Be part of a grassroots movement for real leadership in Northwest Florida. Sign up to stay informed.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md border border-gray-300 w-72 max-w-full"
        />
        <button className="ml-2 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </section>

      <section id="volunteer" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Volunteer</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Whether it’s knocking on doors, phone banking, or helping at events — we need your help to bring change to FL-1.
        </p>
        <button className="bg-blue-800 text-white py-3 px-6 rounded-2xl hover:bg-blue-700">
          Get Involved
        </button>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p>Paid for by Ryan Bradley for Congress. All rights reserved. 2025.</p>
      </footer>
    </div>
  );
}
