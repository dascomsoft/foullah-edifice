// app/components/PartnersSection.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { name: 'Fura Sport', logo: '/images/partenairefoullah.jpg', type: 'Équipementier Officiel' },
  { name: 'Partenaire 1', logo: '/images/partenairefoullah1.jpg', type: 'Sponsor Principal' },
  { name: 'Partenaire 2', logo: '/images/partenairefoullah2.jpg', type: 'Partenaire Officiel' },
];

export default function PartnersSection() {
  return (
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
          Nos <span className="text-blue-600">Partenaires</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-24 w-24 mx-auto mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.type}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link 
            href="/partenaires"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Devenir Partenaire
          </Link>
        </motion.div>
      </div>
    </section>
  );
}