import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
    return (
        <div>
            <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-6">About Fantasy Home</h2>
        <p data-aos="fade-left" className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
          Fantasy Home is your trusted partner in finding the perfect residential solution in Dhaka. Whether you're searching for a single-family home, townhouse, apartment, student housing, senior living community, or vacation rental, we've got you covered.
        </p>
        <div data-aos="fade-left" className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
            Founded in [year], Fantasy Home has been dedicated to providing top-notch real estate services in Dhaka. Our journey began with a vision to simplify the property search process and help individuals and families find their dream homes.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Achievements</h3>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
            Over the years, Fantasy Home has earned recognition for our exceptional service and commitment to client satisfaction. We take pride in our numerous awards and accolades, which reflect our dedication to excellence in the real estate industry.
          </p>
        </div>
        <div data-aos="fade-left" className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Environmental Commitment</h3>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
            At Fantasy Home, we understand the importance of sustainability and environmental responsibility. That's why we are committed to implementing eco-friendly practices in our operations and promoting energy-efficient homes. By embracing green initiatives, we aim to contribute to a healthier planet for future generations.
          </p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;