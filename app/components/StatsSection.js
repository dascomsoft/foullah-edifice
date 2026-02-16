// app/components/StatsSection.js
"use client";

import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '4', label: 'Championnats Nationaux', color: 'text-yellow-500' },
  { icon: Award, value: '2', label: 'Coupes du Tchad', color: 'text-blue-600' },
  { icon: Users, value: '50+', label: 'Joueurs Formés', color: 'text-green-500' },
  { icon: Calendar, value: '18', label: 'Ans d\'Histoire', color: 'text-purple-500' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Notre <span className="text-blue-600">Héritage</span> en Chiffres
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-lg hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Icon className={`w-16 h-16 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}