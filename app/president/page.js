// app/president/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Trophy, Heart, Target, Briefcase, Calendar, MapPin, Mail, Phone, Star, TrendingUp, Shield, BookOpen } from 'lucide-react';

export default function PresidentPage() {
  return (
    <div className="pt-20">
      {/* Hero Section avec image du président */}
      <section className="relative h-[500px]">
        <Image
          src="/images/presifoullah.jpg"
          alt="Sénateur Ibrahim Wang Laouna Foullah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Président Fondateur & Sénateur
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Ibrahim Wang Laouna <span className="text-blue-400">Foullah</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Un visionnaire au service de la jeunesse tchadienne
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Un <span className="text-blue-600">Leader</span> Engagé
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Le sénateur Ibrahim Wang Laouna Foullah incarne une vision moderne du leadership au Tchad. 
                Entrepreneur accompli, mécène passionné et homme politique engagé, il a fait de la lutte 
                contre le chômage des jeunes son combat prioritaire.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Fondateur du club Foullah Édifice FC en 2007, il a transformé sa passion pour le football 
                en un véritable outil de développement social et économique. Sous son impulsion, le club 
                est devenu bien plus qu'une simple équipe sportive : un véritable tremplin pour la jeunesse 
                tchadienne.
              </p>
              <p className="text-lg text-gray-700">
                "Le football n'est pas qu'un sport, c'est une école de la vie. Il apprend la discipline, 
                le travail d'équipe et la persévérance. C'est pourquoi j'ai voulu en faire un levier 
                d'insertion pour nos jeunes", confie-t-il régulièrement.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/presifoullah4.jpg"
                alt="Sénateur Ibrahim Foullah"
                fill
                className="object-fill"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lutte contre le chômage */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lutte contre le <span className="text-blue-600">chômage</span> des jeunes
              </h2>
              <p className="text-xl text-gray-600">
                Un engagement concret et des résultats probants
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Insertion professionnelle</h3>
                <p className="text-gray-600">
                  Grâce au club Foullah Édifice, plus de 50 jeunes ont été professionnalisés dans 
                  le football, et des dizaines d'autres ont trouvé des emplois dans les métiers 
                  liés au sport : encadrement technique, administration, communication, 
                  maintenance des infrastructures, etc.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Lutte contre l'exclusion</h3>
                <p className="text-gray-600">
                  Le club offre un cadre structurant qui éloigne les jeunes de l'oisiveté et 
                  des risques sociaux. La pratique sportive encadrée, les valeurs de solidarité 
                  et de discipline contribuent à former des citoyens responsables.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations et impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Un <span className="text-blue-600">Impact</span> Concret
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center shadow-lg"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Jeunes professionnalisés</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center shadow-lg"
            >
              <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <p className="text-gray-600">Championnats nationaux</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center shadow-lg"
            >
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
              <p className="text-gray-600">Ans d'engagement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center shadow-lg"
            >
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Jeunes formés</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages et vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/presifoullah.jpg"
                alt="Sénateur Ibrahim Foullah en action"
                fill
                className="object-fill"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sa <span className="text-blue-600">Vision</span> pour le Tchad
              </h2>
              
              <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                <p className="text-lg italic text-gray-700">
                  "Le football est un puissant vecteur d'intégration sociale et de développement économique. 
                  À travers Foullah Édifice, nous offrons aux jeunes bien plus qu'un club : un cadre 
                  d'épanouissement, des opportunités professionnelles et des valeurs qui les préparent 
                  à devenir les acteurs du Tchad de demain."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    IF
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Ibrahim Wang Laouna Foullah</p>
                    <p className="text-sm text-gray-500">Sénateur & Président Fondateur</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 text-white p-4 rounded-xl">
                  <Target className="w-8 h-8 mb-2" />
                  <p className="font-semibold">Objectif 2027</p>
                  <p className="text-sm">Créer 100 emplois supplémentaires</p>
                </div>
                <div className="bg-blue-800 text-white p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 mb-2" />
                  <p className="font-semibold">Perspective</p>
                  <p className="text-sm">Centre de formation moderne</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagements et actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Ses <span className="text-blue-600">Engagements</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Formation des jeunes</h3>
              <p className="text-gray-600">
                Mise en place d'un centre de formation de haut niveau pour détecter et 
                accompagner les talents dès le plus jeune âge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Double projet</h3>
              <p className="text-gray-600">
                Allier sport et études pour préparer l'avenir des jeunes au-delà de 
                leur carrière sportive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Actions sociales</h3>
              <p className="text-gray-600">
                Programmes d'insertion pour les jeunes défavorisés et actions de 
                solidarité dans les quartiers de N'Djaména.
              </p>
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
          >
            En <span className="text-blue-600">Images</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/presifoullah.jpg"
                alt="Sénateur Ibrahim Foullah"
                fill
                className="object-fill"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/presifoullah4.jpg"
                alt="Sénateur Ibrahim Foullah avec les joueurs"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Soutenir cette vision
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Rejoignez le mouvement pour l'autonomisation des jeunes par le sport
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Contacter le président
              </Link>
              <Link
                href="/equipe"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Découvrir l'équipe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}