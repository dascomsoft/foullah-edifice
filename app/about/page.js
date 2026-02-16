// app/about/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[800px] bg-blue-900">
        <Image
          src="/images/foullah20.jpg"
          alt="Foullah Édifice FC"
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
              Le Club
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Solidarité - Soutien - Victoire
            </motion.p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Qui sommes-<span className="text-blue-600">nous ?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Foullah Édifice Football Club est un club de football tchadien fondé le 9 février 2007 
                par Ibrahim Wang Laouna Foullah, un entrepreneur et mécène passionné par le sport. 
                Basé à N'Djaména, le club s'est rapidement imposé comme l'une des meilleures équipes 
                du pays.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Notre mission est de promouvoir les jeunes talents locaux et de représenter fièrement 
                le Tchad sur la scène africaine. Nous croyons en la formation et au développement 
                des joueurs, tout en maintenant des valeurs fortes de solidarité et d'excellence.
              </p>
              <p className="text-lg text-gray-700">
                Aujourd'hui, Foullah Édifice FC est reconnu comme un club formateur et compétitif, 
                avec un palmarès impressionnant de 4 championnats nationaux et de nombreuses 
                participations aux compétitions continentales.
              </p>
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
                src="/images/foullah2.jpg"
                alt="Foullah Édifice FC - Histoire"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
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
            Nos <span className="text-blue-600">Valeurs</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Solidarité</h3>
              <p className="text-gray-600">
                Ensemble, nous formons une famille. La solidarité est au cœur de notre projet, 
                sur et en dehors du terrain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Soutien</h3>
              <p className="text-gray-600">
                Nous soutenons nos joueurs, notre staff et notre communauté. Chaque membre du club 
                compte et mérite notre soutien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Victoire</h3>
              <p className="text-gray-600">
                Nous visons l'excellence et la victoire dans tout ce que nous entreprenons, 
                avec détermination et passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Président */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              data-aos="fade-right"
            >
              <Image
                src="/images/presifoullah.jpg"
                alt="Ibrahim Wang Laouna Foullah - Président"
                fill
                className="object-fill"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-aos="fade-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le <span className="text-blue-600">Président</span>
              </h2>
              <h3 className="text-2xl font-semibold mb-3">Ibrahim Wang Laouna Foullah</h3>
              <p className="text-lg text-gray-700 mb-4">
                Entrepreneur et mécène passionné par le football, Ibrahim Wang Laouna Foullah a fondé 
                le club en 2007 après avoir repéré des jeunes talents lors d'un tournoi local à Gassi. 
                Ancien joueur amateur, il a toujours eu à cœur de promouvoir le football tchadien et 
                de donner leur chance aux jeunes.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Sous sa présidence, le club est devenu l'un des plus titrés du Tchad, avec 4 championnats 
                nationaux et de nombreuses participations aux compétitions continentales. Son engagement 
                et sa vision ont permis de développer une structure professionnelle et form// app/about/page.js (suite)
              </p>
              <p className="text-lg text-gray-700">
                "Notre objectif est de faire de Foullah Édifice FC un club de référence en Afrique centrale, 
                tout en restant fidèle à nos valeurs de solidarité et de formation des jeunes talents tchadiens."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff */}
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
            Notre <span className="text-blue-600">Staff</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-64">
                <Image
                  src="/images/coachfoullah.jpg"
                  alt="Djimta Yamtamadji - Entraîneur"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Djimta Yamtamadji</h3>
                <p className="text-blue-600 font-medium mb-3">Entraîneur Principal</p>
                <p className="text-gray-600">
                  En poste depuis 2019, il a mené l'équipe à la victoire en championnat en 2020.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-64">
                <Image
                  src="/images/foullah6.jpg"
                  alt="Ousmanou Christophe - Directeur Technique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ousmanou Christophe</h3>
                <p className="text-blue-600 font-medium mb-3">Directeur Technique</p>
                <p className="text-gray-600">
                  Camerounais, ancien de Coton Sport, il apporte son expertise depuis 2022.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-64">
                <Image
                  src="/images/foullah5.jpg"
                  alt="Staff Technique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Staff Technique</h3>
                <p className="text-blue-600 font-medium mb-3">Équipe d'encadrement</p>
                <p className="text-gray-600">
                  Une équipe de professionnels dédiés à la performance et au développement des joueurs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}