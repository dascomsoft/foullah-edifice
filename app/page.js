// app/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from './components/HeroSlider';
import StatsSection from './components/StatsSection';
import LatestNews from './components/LatestNews';
import TeamPreview from './components/TeamPreview';
import PartnersSection from './components/PartnersSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
      
      {/* Section Présentation */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Foullah Édifice FC</span>
                <br />L'Excellence Tchadienne
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Fondé en 2007 par Ibrahim Wang Laouna Foullah, notre club incarne les valeurs 
                de <span className="font-semibold text-blue-600">Solidarité, Soutien et Victoire</span>. 
                Depuis notre création, nous nous engageons à promouvoir les jeunes talents tchadiens 
                et à représenter fièrement notre nation sur la scène africaine.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Basés au Stade Omnisports Idriss Mahamat Ouya de N'Djaména, nous sommes devenus 
                l'un des clubs les plus titrés du football tchadien, avec 4 championnats nationaux 
                et de nombreuses participations aux compétitions continentales.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Découvrir Notre Histoire
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              data-aos="fade-left"
            >
              <Image
                src="/images/foullah.jpg"
                alt="Foullah Édifice FC - Équipe"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />
      <LatestNews />
      <TeamPreview />
      <PartnersSection />

      {/* Section Stade */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              data-aos="zoom-in"
            >
              <Image
                src="/images/foullah2.jpg"
                alt="Stade Omnisports Idriss Mahamat Ouya"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-aos="fade-left"
            >
              <h2 className="text-4xl font-bold mb-6">Notre Forteresse</h2>
              <p className="text-xl mb-4">
                Stade Omnisports Idriss Mahamat Ouya
              </p>
              <p className="text-blue-200 mb-4">
                Capacité : 20 000 - 30 000 spectateurs
              </p>
              <p className="text-lg mb-8">
                Inauguré en 2000, ce stade multifonctionnel est le théâtre de nos plus grandes 
                victoires. Chaque match, nos supporters créent une ambiance électrique qui 
                porte l'équipe vers la victoire.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/stade" 
                  className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Visite Virtuelle
                </Link>
                <Link 
                  href="/billetterie" 
                  className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
                >
                  Billetterie
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}