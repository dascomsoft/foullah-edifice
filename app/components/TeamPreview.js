// app/components/TeamPreview.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const players = [
  {
    id: 1,
    name: 'Yves Allarabaye',
    position: 'Milieu Central',
    age: 22,
    image: '/images/foullah5.jpg',
    nationality: 'Tchad',
    value: '75K €',
  },
  {
    id: 2,
    name: 'Aubin Mbaigolmem',
    position: 'Défenseur Central',
    age: 31,
    image: '/images/coachfoullah.jpg',
    nationality: 'Tchad',
    value: '-',
  },
  {
    id: 3,
    name: 'Benjamin Merba',
    position: 'Milieu Central',
    age: 21,
    image: '/images/foullah6.jpg',
    nationality: 'Tchad',
    value: '25K €',
  },
  {
    id: 4,
    name: 'Bakhit Djibrine',
    position: 'Ailier Droit',
    age: 31,
    image: '/images/foullahnational.jpg',
    nationality: 'Tchad',
    value: '-',
  },
];

export default function TeamPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Notre <span className="text-blue-600">Équipe</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Découvrez les joueurs qui portent fièrement les couleurs de Foullah Édifice FC
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-gray-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{player.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{player.position}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Âge: {player.age} ans</span>
                  <span>{player.nationality}</span>
                </div>
                {player.value !== '-' && (
                  <p className="text-sm text-green-600 mt-2">Valeur: {player.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/equipe"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Voir Tout l'Effectif
          </Link>
        </div>
      </div>
    </section>
  );
}