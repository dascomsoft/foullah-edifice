// app/components/HeroSlider.js
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    image: '/images/foullah.jpg',
    title: 'Foullah Édifice FC',
    subtitle: 'Solidarité - Soutien - Victoire',
    description: 'Club de football professionnel basé à N\'Djaména, Tchad',
  },
  {
    image: '/images/foullah2.jpg',
    title: 'L\'Excellence Tchadienne',
    subtitle: '4 fois Champion du Tchad',
    description: '2011, 2013, 2014, 2020 - Une histoire de succès',
  },
  {
    image: '/images/presifoullah1.jpg',
    title: 'Direction du Club',
    subtitle: 'Ibrahim Wang Laouna Foullah & Vice-Présidente',
    description: 'Une gouvernance passionnée au service du football tchadien',
  },
  {
    image: '/images/foullah10.jpg',
    title: 'Le Stade Omnisports',
    subtitle: 'Notre Forteresse',
    description: '20 000 supporters pour nous porter vers la victoire',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="sync" initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-4xl mb-4 text-blue-300">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8">
                {slides[currentSlide].description}
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href='/actualites' 
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Actualités
                </Link>
                <Link 
                  href='/contact' 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition transform hover:scale-105"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition z-20 backdrop-blur-sm"
        aria-label="Slide précédent"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition z-20 backdrop-blur-sm"
        aria-label="Slide suivant"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-600 w-8' 
                : 'bg-white/50 hover:bg-white/80 w-2'
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}