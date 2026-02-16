// app/histoire/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Trophy, Star } from 'lucide-react';

const timelineEvents = [
  {
    year: 2007,
    title: 'Fondation du Club',
    description: 'Création de Foullah Édifice FC par Ibrahim Wang Laouna Foullah après un tournoi local à Gassi. Le club est immédiatement champion de D2 de N\'Djaména.',
    image: '/images/foullah.jpg',
  },
  {
    year: 2008,
    title: 'Promotion en D1',
    description: 'Le club accède à la première division du championnat tchadien.',
    image: '/images/foullah2.jpg',
  },
  {
    year: 2010,
    title: 'Premier Titre Majeur',
    description: 'Victoire en Coupe de N\'Djaména, premier trophée important du club.',
    image: '/images/foullah4.jpg',
  },
  {
    year: 2011,
    title: 'Premier Championnat National',
    description: 'Foullah Édifice remporte son premier championnat du Tchad et se qualifie pour la Ligue des Champions CAF.',
    image: '/images/foullah5.jpg',
  },
  {
    year: 2013,
    title: 'Doublé Historique',
    description: 'Le club réalise le doublé Championnat - Coupe du Tchad, une première dans son histoire.',
    image: '/images/foullah6.jpg',
  },
  {
    year: 2014,
    title: 'Troisième Titre Consécutif',
    description: 'Troisième championnat national consécutif, confirmant la domination du club.',
    image: '/images/foullahnational.jpg',
  },
  {
    year: 2020,
    title: 'Quatrième Sacre National',
    description: 'Après une pause, le club renoue avec le titre de champion du Tchad.',
    image: '/images/foullah.jpg',
  },
  {
    year: 2025,
    title: 'Refondation et Nouveau Départ',
    description: 'Champion de la Ligue Provinciale lors d\'une refondation avec 11 clubs.',
    image: '/images/foullah2.jpg',
  },
];

export default function HistoirePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-blue-900">
        <Image
          src="/images/foullahnational.jpg"
          alt="Histoire de Foullah Édifice FC"
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
              Notre Histoire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              De la fondation à nos jours - 18 ans de passion et de succès
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center mb-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Year Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold z-10 hidden lg:block">
                  {event.year}
                </div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-2xl font-bold mb-2 text-blue-600 lg:hidden">
                      {event.year}
                    </h3>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline */}
                <div className="hidden lg:block lg:w-2/12"></div>

                {/* Image for alternating */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participations Continentales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Participations <span className="text-blue-600">Continentales</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
              data-aos="fade-right"
            >
              <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ligue des Champions CAF</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span>2012 : Tour préliminaire</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span>2014 : 1er tour</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span>2015 : 1er tour</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
              data-aos="fade-left"
            >
              <Trophy className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Coupe de la Confédération</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span>2011 : 2e tour (meilleure performance)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}