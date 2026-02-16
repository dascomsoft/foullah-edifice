// app/stade/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Users, Calendar, Trophy } from 'lucide-react';

export default function StadePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/images/foullah2.jpg"
          alt="Stade Omnisports Idriss Mahamat Ouya"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Notre Stade
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl"
            >
              Stade Omnisports Idriss Mahamat Ouya
            </motion.p>
          </div>
        </div>
      </section>

      {/* Infos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">20 000 - 30 000</h3>
              <p className="text-gray-600">Places assises</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">2000</h3>
              <p className="text-gray-600">Année d'inauguration</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">N'Djaména</h3>
              <p className="text-gray-600">Capitale du Tchad</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Multi-sports</h3>
              <p className="text-gray-600">Football, Athlétisme</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <h2 className="text-3xl font-bold mb-6">
                Un Lieu <span className="text-blue-600">Emblématique</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Le Stade Omnisports Idriss Mahamat Ouya est le plus grand stade du Tchad. 
                Inauguré en 2000, il porte le nom d'une figure importante du sport tchadien.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                D'une capacité de 20 000 à 30 000 spectateurs, ce stade multifonctionnel 
                accueille les plus grands événements sportifs du pays, notamment les matchs 
                de l'équipe nationale et les finales des compétitions nationales.
              </p>
              <p className="text-lg text-gray-700">
                C'est dans cette enceinte que Foullah Édifice FC dispute ses matchs à domicile, 
                porté par ses fidèles supporters qui créent une ambiance unique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              data-aos="fade-left"
            >
              <Image
                src="/images/foullah4.jpg"
                alt="Vue du stade"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Galerie du <span className="text-blue-600">Stade</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/images/foullah2.jpg', '/images/foullah4.jpg', '/images/foullah5.jpg', '/images/foullah6.jpg', '/images/foullahnational.jpg', '/images/foullah.jpg'].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={img}
                  alt={`Stade vue ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}