// app/palmares/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Award, Medal, Star } from 'lucide-react';

const competitions = [
  {
    name: 'Compétitions Nationales',
    icon: Trophy,
    color: 'text-yellow-500',
    titles: [
      { name: 'Championnat du Tchad', count: 4, years: '2011, 2013, 2014, 2020' },
      { name: 'Coupe du Tchad', count: 1, years: '2014' },
    ],
  },
  {
    name: 'Compétitions de N\'Djaména',
    icon: Award,
    color: 'text-blue-600',
    titles: [
      { name: 'Ligue Provinciale de N\'Djaména', count: 4, years: '2011, 2013, 2014, 2020' },
      { name: 'Coupe de N\'Djaména', count: 2, years: '2010, 2013' },
      { name: 'Supercoupe de N\'Djaména', count: 2, years: '2015, 2016' },
    ],
  },
  {
    name: 'Autres Titres',
    icon: Medal,
    color: 'text-green-500',
    titles: [
      { name: 'Championnat D2 de N\'Djaména', count: 1, years: '2007' },
    ],
  },
];

const records = [
  { label: 'Plus de titres nationaux', value: '4', description: 'Championnats remportés' },
  { label: 'Meilleure performance continentale', value: '2e tour', description: 'Coupe CAF 2011' },
  { label: 'Joueurs formés', value: '50+', description: 'Talents locaux' },
  { label: 'Saisons en D1', value: '18', description: 'Depuis 2008' },
];

export default function PalmaresPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <Image
          src="/images/foullah5.jpg"
          alt="Palmarès de Foullah Édifice FC"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Palmarès & Records
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Un héritage de victoires et d'excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Records */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {records.map((record, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl text-center shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{record.value}</div>
                <div className="font-semibold text-gray-800 mb-1">{record.label}</div>
                <div className="text-sm text-gray-600">{record.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Titres par compétition */}
          <div className="space-y-12">
            {competitions.map((competition, compIndex) => {
              const Icon = competition.icon;
              return (
                <motion.div
                  key={compIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8"
                  data-aos="fade-up"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <Icon className={`w-12 h-12 ${competition.color}`} />
                    <h2 className="text-3xl font-bold">{competition.name}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {competition.titles.map((title, titleIndex) => (
                      <motion.div
                        key={titleIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: titleIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold">{title.name}</h3>
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {title.count} {title.count > 1 ? 'titres' : 'titre'}
                          </span>
                        </div>
                        <p className="text-gray-600">Années : {title.years}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline des titres */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-900 text-white rounded-2xl p-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Chronologie des Succès</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[2007, 2010, 2011, 2013, 2014, 2015, 2016, 2020].map((year, index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold hover:bg-white/30 transition cursor-default"
                >
                  {year}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}