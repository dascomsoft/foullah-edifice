// app/calendrier/page.js
"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { useState } from 'react';

const matches = [
  {
    date: '09 Février 2026',
    competition: 'Première Division',
    home: 'Foullah Édifice FC',
    away: 'Tourbillon',
    score: '0 - 0',
    status: 'Terminé',
    location: 'Stade Omnisports Idriss Mahamat Ouya',
  },
  {
    date: '02 Février 2026',
    competition: 'Première Division',
    home: 'Foullah Édifice FC',
    away: 'Stars J. Talents',
    score: '1 - 1 (4-2 pen)',
    status: 'Terminé',
    location: 'Stade Omnisports Idriss Mahamat Ouya',
  },
  {
    date: '25 Janvier 2026',
    competition: 'Première Division',
    home: 'Foullah Édifice FC',
    away: 'TP Elect-Sport',
    score: '2 - 0',
    status: 'Terminé',
    location: 'Stade Omnisports Idriss Mahamat Ouya',
  },
  {
    date: '18 Janvier 2026',
    competition: 'Première Division',
    home: 'Foullah Édifice FC',
    away: 'AS PSI',
    score: '3 - 1',
    status: 'Terminé',
    location: 'Stade Omnisports Idriss Mahamat Ouya',
  },
  {
    date: '22 Février 2026',
    competition: 'Première Division',
    home: 'Gazelle FC',
    away: 'Foullah Édifice FC',
    score: '-',
    status: 'À venir',
    location: 'Stade de Gazelle',
  },
  {
    date: '01 Mars 2026',
    competition: 'Première Division',
    home: 'Foullah Édifice FC',
    away: 'AS CotonTchad',
    score: '-',
    status: 'À venir',
    location: 'Stade Omnisports Idriss Mahamat Ouya',
  },
  {
    date: '08 Mars 2026',
    competition: 'Première Division',
    home: 'Renaissance FC',
    away: 'Foullah Édifice FC',
    score: '-',
    status: 'À venir',
    location: 'Stade de Renaissance',
  },
  {
    date: '15 Mars 2026',
    competition: 'Coupe du Tchad',
    home: 'Foullah Édifice FC',
    away: 'AS Santé d\'Abeché',
    score: '-',
    status: 'À venir',
    location: 'Stade Omnisports Idriss Mahamat Ouya',
  },
];

export default function CalendrierPage() {
  const [filter, setFilter] = useState('all');

  const filteredMatches = matches.filter(match => {
    if (filter === 'upcoming') return match.status === 'À venir';
    if (filter === 'past') return match.status === 'Terminé';
    return true;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-blue-900">
        <Image
          src="/images/foullah4.jpg"
          alt="Calendrier des matchs"
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
              Calendrier & Résultats
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl"
            >
              Suivez tous les matchs de la saison
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Tous les matchs
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              À venir
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Terminés
            </button>
          </div>
        </div>
      </section>

      {/* Matches */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredMatches.map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 border-l-4 ${
                  match.status === 'Terminé' ? 'border-green-500' : 'border-blue-500'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <span className="text-sm text-gray-600">{match.date}</span>
                    </div>
                    <div className="text-center">
                      <Trophy className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <span className="text-sm text-gray-600">{match.competition}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.status === 'Terminé' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {match.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-4">
                  <div className="text-right">
                    <span className="font-semibold text-lg">{match.home}</span>
                  </div>
                  <div className="text-center">
                    <span className={`text-2xl font-bold ${
                      match.status === 'Terminé' ? 'text-gray-800' : 'text-gray-400'
                      }`}>
                      {match.score}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-lg">{match.away}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{match.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classement */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Classement <span className="text-blue-600">Première Division</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Pos</th>
                  <th className="px-4 py-3 text-left">Équipe</th>
                  <th className="px-4 py-3 text-center">Pts</th>
                  <th className="px-4 py-3 text-center">J</th>
                  <th className="px-4 py-3 text-center">V</th>
                  <th className="px-4 py-3 text-center">N</th>
                  <th className="px-4 py-3 text-center">D</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50 font-semibold">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Foullah Édifice FC</td>
                  <td className="px-4 py-3 text-center">45</td>
                  <td className="px-4 py-3 text-center">26</td>
                  <td className="px-4 py-3 text-center">13</td>
                  <td className="px-4 py-3 text-center">6</td>
                  <td className="px-4 py-3 text-center">7</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Gazelle FC</td>
                  <td className="px-4 py-3 text-center">48</td>
                  <td className="px-4 py-3 text-center">26</td>
                  <td className="px-4 py-3 text-center">14</td>
                  <td className="px-4 py-3 text-center">6</td>
                  <td className="px-4 py-3 text-center">6</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Renaissance FC</td>
                  <td className="px-4 py-3 text-center">42</td>
                  <td className="px-4 py-3 text-center">26</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-center">6</td>
                  <td className="px-4 py-3 text-center">8</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
}