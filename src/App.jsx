import React from 'react';
import Navbar from './components/navbar/Navbar';
import home from './assets/home.mp4';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function App() {
  const services = [
    {
      title: "Event Planning",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Comprehensive event planning services to make your special day perfect."
    },
    {
      title: "Cake Design",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Custom cake designs that taste as beautiful as they look."
    },
    {
      title: "Floral Design",
      image: "https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Stunning floral arrangements to enhance your wedding aesthetic."
    },
    {
      title: "Photography",
      image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Capturing your precious moments with artistic vision and attention to detail."
    }
  ];

  const portfolio = [
    {
      image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      alt: "Elegant couple in garden"
    },
    {
      image: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
      alt: "Romantic couple under veil"
    },
    {
      image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
      alt: "Couple in urban setting"
    },
    {
      image: "https://images.pexels.com/photos/1589821/pexels-photo-1589821.jpeg",
      alt: "Couple embracing outdoors"
    },
    {
      image: "https://images.pexels.com/photos/1589822/pexels-photo-1589822.jpeg",
      alt: "Romantic wedding portrait"
    }
  ];

  const instagramFeed = [
    "https://images.pexels.com/photos/1589821/pexels-photo-1589821.jpeg",
    "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
    "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
    "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
    "https://images.pexels.com/photos/1589822/pexels-photo-1589822.jpeg",
    "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg"
  ];

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

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Section Title with Leaf Icon */}
            <div className="flex flex-col items-center mb-16">
              <Leaf className="text-sage-green w-12 h-12 mb-4 text-emerald-200" />
              <h2 className="text-5xl font-light text-primary text-center">What We Can Do</h2>
              <div className="w-64 h-px bg-neutral-300 mt-8"></div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="overflow-hidden mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 rounded-lg object-cover hover:scale-125 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl text-center font-light text-primary mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm text-center hidden">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title with Leaf Icon */}
            <div className="flex flex-col items-center mb-16">
              <Leaf className="text-sage-green w-12 h-12 mb-4 text-emerald-200" />
              <h2 className="text-5xl font-light text-primary text-center">Our Amazing Work</h2>
              <div className="w-64 h-px bg-neutral-300 mt-8"></div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[400px] object-cover hover:scale-125 transition-transform duration-700 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className=" py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Feelings Section */}
              <div>
                <h3 className="text-3xl font-light text-amber-200 mb-6">Feelings</h3>
                <p className="text-neutral-600 mb-6">
                  Welcome and open yourself to your truest love this year with us! With the Release Process
                </p>
                <div className="flex gap-4">
                  <Facebook className="w-5 h-5 text-neutral-600 hover:text-amber-200 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-neutral-600 hover:text-amber-200 cursor-pointer" />
                  <Instagram className="w-5 h-5 text-neutral-600 hover:text-amber-200 cursor-pointer" />
                </div>
              </div>

              {/* Information Section */}
              <div>
                <h3 className="text-2xl font-light text-neutral-800 mb-6">Information</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-neutral-600 hover:text-amber-200">About Us</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-amber-200">Portfolio</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-amber-200">Latest News</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-amber-200">Contact us</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-amber-200">Our Services</a></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-2xl font-light text-neutral-800 mb-6">Contact</h3>
                <p className="text-neutral-600 mb-4">Would you have any enquiries. Please feel free to contact us</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-200" />
                    <a href="mailto:Feelings@gmail.com" className="text-neutral-600 hover:text-amber-200">Feelings@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-amber-200" />
                    <a href="tel:+888123869523" className="text-neutral-600 hover:text-amber-200">+888 (123) 869523</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-200" />
                    <span className="text-neutral-600">New York — 1075 Firs Avenue</span>
                  </div>
                </div>
              </div>

              {/* Instagram Section */}
              <div>
                <h3 className="text-2xl font-light text-neutral-800 mb-6">Instagram</h3>
                <div className="grid grid-cols-3 gap-2">
                  {instagramFeed.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                      <img
                        src={image}
                        alt="Instagram feed"
                        className="w-full h-24 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
              <p className="text-neutral-500">
                © 2025 Feelings Template. Design By wpOceans. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* <div className="h-[1000px]"></div> */}
      </div>
    </div>
  );
}

export default App;
