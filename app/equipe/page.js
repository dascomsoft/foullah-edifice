// app/equipe/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Users, Search, Filter, Shield, Award, Calendar, Flag } from 'lucide-react';

// Données du staff
const staff = [

  {
    name: 'Toukam Julien',
    role: 'Entraîneur Principal',
    image: '/images/coachfoullah.jpg',
    bio: 'En poste depuis 2019, champion du Tchad en 2020 avec Foullah Édifice.',
  },
  {
    name: 'Ousmanou Christophe',
    role: 'Directeur Technique',
    // image: '/images/foullah6.jpg',
    bio: 'Expert camerounais, ancien de Coton Sport. Apporte son expérience internationale.',
  },
  {
    name: 'Emmanuel Boukar',
    role: 'Conseiller Sportif',
    // image: '/images/foullah5.jpg',
    bio: 'A dirigé l\'équipe de 2010 à 2015, remportant plusieurs titres nationaux.',
  },
  {
    name: 'Mahamat Saleh',
    role: 'Préparateur Physique',
    // image: '/images/foullah4.jpg',
    bio: 'Responsable de la condition physique des joueurs depuis 2020.',
  },
];

// Données des joueurs
const players = [
  {
    name: 'BAKHIT',
    fullName: 'Bakhit Djibrine',
    position: 'Gardien',
    age: 28,
    nationality: 'Tchad',
    image: '/images/bakhit.jpg',
    number: 1,
    matches: 45,
    goals: 0,
    joined: '2020',
  },
  {
    name: 'Aubin Mbaigolmem',
    position: 'Défenseur Central',
    age: 31,
    nationality: 'Tchad',
    image: '/images/fabrice.jpg',
    number: 4,
    matches: 78,
    goals: 3,
    joined: '2018',
  },
  {
    name: 'Acyl Mbogo',
    position: 'Arrière Droit',
    age: 24,
    nationality: 'Tchad',
    image: '/images/yves.jpg',
    number: 2,
    matches: 52,
    goals: 2,
    joined: '2019',
  },
  {
    name: 'Hassan Hissein',
    position: 'Milieu Défensif',
    age: 33,
    nationality: 'Tchad',
    image: '/images/merba.jpg',
    number: 6,
    matches: 102,
    goals: 8,
    joined: '2017',
  },
  {
    name: 'Alafi Esaie Mayakmon',
    position: 'Milieu Central',
    age: 29,
    nationality: 'Tchad',
    image: '/images/mouandilmadji.jpg',
    number: 8,
    matches: 67,
    goals: 12,
    joined: '2019',
  },
  {
    name: 'Yves Allarabaye',
    position: 'Milieu Offensif',
    age: 22,
    nationality: 'Tchad',
    image: '/images/notoyoum.jpg',
    number: 10,
    value: '75K €',
    matches: 34,
    goals: 15,
    joined: '2021',
  },
  {
    name: 'Benjamin Merba',
    position: 'Milieu Central',
    age: 21,
    nationality: 'Tchad',
    image: '/images/nathaniel.jpg',
    number: 14,
    value: '25K €',
    matches: 28,
    goals: 4,
    joined: '2022',
  },
  {
    name: 'Yaya Kerim',
    position: 'Milieu Offensif',
    age: 34,
    nationality: 'Tchad',
    image: '/images/mahamat.jpg',
    number: 11,
    matches: 156,
    goals: 23,
    joined: '2016',
  },
  {
    name: 'Bakhit Djibrine',
    position: 'Ailier Droit',
    age: 31,
    nationality: 'Tchad',
    image: '/images/aba.jpg',
    number: 7,
    matches: 89,
    goals: 31,
    joined: '2018',
  },
  {
    name: 'Innocent Mbairamadji',
    position: 'Milieu Défensif',
    age: 26,
    nationality: 'Tchad',
    image: '/images/foullah4.jpg',
    number: 12,
    matches: 41,
    goals: 2,
    joined: '2020',
  },
  {
    name: 'Issa Abakar',
    position: 'Défenseur Central',
    age: 28,
    nationality: 'Tchad',
    image: '/images/foullah5.jpg',
    number: 3,
    matches: 63,
    goals: 1,
    joined: '2019',
  },
  {
    name: 'Mahamat Lossou',
    position: 'Défenseur Latéral',
    age: 27,
    nationality: 'Tchad',
    image: '/images/foullah6.jpg',
    number: 5,
    matches: 55,
    goals: 3,
    joined: '2020',
  },
  {
    name: 'Nathaniel Mbaiam',
    position: 'Attaquant',
    age: 23,
    nationality: 'Tchad',
    image: '/images/nathaniel.jpg',
    number: 9,
    matches: 19,
    goals: 7,
    joined: '2023',
  },
  {
    name: 'Fabrice Ngarasta',
    position: 'Défenseur',
    age: 25,
    nationality: 'Tchad',
    image: '/images/fabrice.jpg',
    number: 15,
    matches: 22,
    goals: 0,
    joined: '2022',
  },
];

export default function EquipePage() {
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Liste des positions disponibles (extraite des données)
  const positions = ['all', ...new Set(players.map(p => p.position))];

  const filteredPlayers = players.filter(player => {
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPosition && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700">
        <Image
          src="/images/foullah50.jpg"
          alt="Équipe de Foullah Édifice FC"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Users className="w-20 h-20 mx-auto mb-6 text-blue-300" />
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Notre <span className="text-blue-300">Équipe</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Joueurs et staff - La famille Foullah Édifice
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats rapides */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{players.length}</div>
              <div className="text-sm text-gray-600">Joueurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{staff.length}</div>
              <div className="text-sm text-gray-600">Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {players.reduce((sum, p) => sum + (p.goals || 0), 0)}
              </div>
              <div className="text-sm text-gray-600">Buts (total)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(players.reduce((sum, p) => sum + (p.age || 0), 0) / players.length)}
              </div>
              <div className="text-sm text-gray-600">Moyenne d'âge</div>
            </div>
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Staff <span className="text-blue-600">Technique</span> & Direction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Des professionnels expérimentés au service de la performance
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Effectif <span className="text-blue-600">Professionnel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Découvrez les joueurs qui portent fièrement les couleurs de Foullah Édifice FC
          </motion.p>

          {/* Filtres et recherche */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {positions.map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSelectedPosition(pos)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedPosition === pos
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {pos === 'all' ? (
                    <span className="flex items-center gap-1">
                      <Filter size={14} /> Tous
                    </span>
                  ) : (
                    pos
                  )}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un joueur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Grille des joueurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedPlayer(player)}
              >
                <div className="relative h-72 bg-gradient-to-b from-blue-900 to-blue-700">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-lg">
                    {player.number}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">
                      {player.matches} matchs • {player.goals} buts
                    </p>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{player.position}</p>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      {player.age} ans
                    </span>
                    <span className="flex items-center gap-1">
                      <Flag size={14} className="text-gray-400" />
                      {player.nationality}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Depuis {player.joined}</span>
                    {player.value && (
                      <span className="text-green-600 font-semibold">{player.value}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-500">Aucun joueur trouvé</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedPosition('all');
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal détaillé du joueur */}
      {selectedPlayer && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlayer(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-700">
              <Image
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                fill
                className="object-cover object-top"
              />
              <button
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70 transition flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedPlayer.name}</h2>
                  <p className="text-xl text-blue-600">{selectedPlayer.position}</p>
                </div>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl">
                  {selectedPlayer.number}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Âge</p>
                  <p className="font-bold">{selectedPlayer.age} ans</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Flag className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Nationalité</p>
                  <p className="font-bold">{selectedPlayer.nationality}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Shield className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Matchs</p>
                  <p className="font-bold">{selectedPlayer.matches}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Award className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Buts</p>
                  <p className="font-bold">{selectedPlayer.goals}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">À propos</h3>
                <p className="text-gray-600">
                  {selectedPlayer.name} évolue au poste de {selectedPlayer.position.toLowerCase()} 
                  à Foullah Édifice FC depuis {selectedPlayer.joined}. 
                  International tchadien, il apporte son expérience et sa qualité technique à l'équipe.
                </p>
              </div>

              <div className="border-t mt-6 pt-6">
                <h3 className="font-bold text-lg mb-3">Statistiques de la saison</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Matchs joués</span>
                      <span className="font-bold">{selectedPlayer.matches}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(selectedPlayer.matches / 40) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Buts marqués</span>
                      <span className="font-bold">{selectedPlayer.goals}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(selectedPlayer.goals / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}