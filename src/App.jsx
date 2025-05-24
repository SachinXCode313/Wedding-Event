import React from 'react';
import Navbar from './components/navbar/Navbar';
import home from './assets/home.mp4';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center text-white text-center">
        
        {/* Video Container */}
        <div className="relative w-full h-96 lg:h-[100vh]">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-lg"
          >
            <source src={home} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30 rounded-lg px-4">
            <img src="/path/to/logo.png" alt="Logo" className="w-24 md:w-32 mb-4" />

            <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-center">
              Welcome To Gwennies Events
            </h1>

            <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center mt-2">
              Your Moment Our Royal Touch
            </h1>

            <button className="mt-6 rounded-full border border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-all">
              Plan Your Wedding
            </button>
          </div>
        </div>

        <div className="h-[1000px]"></div>
      </div>
    </div>
  );
}

export default App;
