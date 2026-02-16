// app/equipe/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const staff = [
  {
    name: 'Ibrahim Wang Laouna Foullah',
    role: 'Président Fondateur',
    image: '/images/presifoullah.jpg',
    bio: 'Entrepreneur et mécène, fondateur du club en 2007.',
  },
  {
    name: 'Djimta Yamtamadji',
    role: 'Entraîneur Principal',
    image: '/images/coachfoullah.jpg',
    bio: 'En poste depuis 2019, champion en 2020.',
  },
  {
    name: 'Ousmanou Christophe',
    role: 'Directeur Technique',
    image: '/images/foullah6.jpg',
    bio: 'Expert camerounais, ancien de Coton Sport.',
  },
  {
    name: 'Emmanuel Boukar',
    role: 'Ancien Entraîneur',
    image: '/images/foullah5.jpg',
    bio: 'A dirigé l\'équipe de 2010 à 2015, plusieurs titres.',
  },
];

const players = [
  {
    name: 'Kourdina Mangana',
    position: 'Gardien',
    age: '-',
    nationality: 'Tchad',
    image: '/images/foullah.jpg',
    number: 1,
  },
  {
    name: 'Aubin Mbaigolmem',
    position: 'Défenseur Central',
    age: 31,
    nationality: 'Tchad',
    image: '/images/coachfoullah.jpg',
    number: 4,
  },
  {
    name: 'Acyl Mbogo',
    position: 'Arrière Droit',
    age: 24,
    nationality: 'Tchad',
    image: '/images/foullah2.jpg',
    number: 2,
  },
  {
    name: 'Hassan Hissein',
    position: 'Milieu',
    age: 33,
    nationality: 'Tchad',
    image: '/images/foullah4.jpg',
    number: 6,
  },
  {
    name: 'Alafi Esaie Mayakmon',
    position: 'Milieu',
    age: 29,
    nationality: 'Tchad',
    image: '/images/foullah5.jpg',
    number: 8,
  },
  {
    name: 'Yves Allarabaye',
    position: 'Milieu Central',
    age: 22,
    nationality: 'Tchad',
    image: '/images/foullah6.jpg',
    number: 10,
    value: '75K €',
  },
  {
    name: 'Benjamin Merba',
    position: 'Milieu Central',
    age: 21,
    nationality: 'Tchad',
    image: '/images/foullahnational.jpg',
    number: 14,
    value: '25K €',
  },
  {
    name: 'Yaya Kerim',
    position: 'Milieu Offensif',
    age: 34,
    nationality: 'Tchad',
    image: '/images/foullah.jpg',
    number: 11,
  },
  {
    name: 'Bakhit Djibrine',
    position: 'Ailier Droit',
    age: 31,
    nationality: 'Tchad',
    image: '/images/foullah2.jpg',
    number: 7,
  },
  {
    name: 'Innocent Mbairamadji',
    position: 'Milieu',
    age: 26,
    nationality: 'Tchad',
    image: '/images/foullah4.jpg',
    number: 12,
  },
  {
    name: 'Issa Abakar',
    position: 'Défenseur',
    age: 28,
    nationality: 'Tchad',
    image: '/images/foullah5.jpg',
    number: 3,
  },
  {
    name: 'Mahamat Lossou',
    position: 'Défenseur',
    age: 27,
    nationality: 'Tchad',
    image: '/images/foullah6.jpg',
    number: 5,
  },
  {
    name: 'Ado Tchaoussou Mathieu',
    position: 'Gardien',
    age: 25,
    nationality: 'Tchad',
    image: '/images/foullahnational.jpg',
    number: 16,
  },
];

export default function EquipePage() {
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = players.filter(player => {
    const matchesPosition = selectedPosition === 'all' || player.position.toLowerCase().includes(selectedPosition);
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPosition && matchesSearch;
  });

  const positions = ['all', 'Gardien', 'Défenseur', 'Milieu', 'Attaquant'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-blue-900">
        <Image
          src="/images/foullahnational.jpg"
          alt="Équipe de Foullah Édifice FC"
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
              Notre Équipe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl"
            >
              Joueurs et staff - La famille Foullah Édifice
            </motion.p>
          </div>
        </div>
      </section>

      {/* Staff */}
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
            Staff <span className="text-blue-600">Technique</span> & Direction
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Joueurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Effectif <span className="text-blue-600">Professionnel</span>
          </motion.h2>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {positions.map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSelectedPosition(pos)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    selectedPosition === pos
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {pos === 'all' ? 'Tous' : pos}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Rechercher un joueur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
            />
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {player.number}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{player.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{player.position}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Âge: {player.age !== '-' ? player.age + ' ans' : '-'}</span>
                    <span>{player.nationality}</span>
                  </div>
                  {player.value && (
                    <p className="text-sm text-green-600 mt-2">Valeur: {player.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <p className="text-center text-gray-500 py-12">Aucun joueur trouvé</p>
          )}
        </div>
      </section>
    </div>
  );
}