// app/contact/page.js
"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Formatage du message pour WhatsApp
    const message = `*Nouveau message depuis le site web*%0A%0A` +
                   `*Prénom:* ${formData.prenom}%0A` +
                   `*Nom:* ${formData.nom}%0A` +
                   `*Email:* ${formData.email}%0A` +
                   `*Sujet:* ${formData.sujet}%0A` +
                   `*Message:* ${formData.message}`;
    
    // Numéro WhatsApp (format international sans le +)
    const phoneNumber = "23566209753"; // 235 66 20 9753 sans espaces
    
    // Redirection vers WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section avec image de fond */}
      <section className="relative h-[300px] bg-blue-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Contactez-<span className="text-blue-300">nous</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Une question, un partenariat ? Nous sommes à votre écoute
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          
          {/* Message WhatsApp en vedette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Réponse rapide sur WhatsApp
                  </h3>
                  <p className="text-green-700 mb-3">
                    Notre équipe vous répond en temps réel sur WhatsApp. Cliquez sur le bouton ci-dessous pour nous contacter directement.
                  </p>
                  <a
                    href="https://wa.me/23566209753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle size={20} />
                    Nous contacter sur WhatsApp
                    <span className="text-sm bg-green-700 px-2 py-1 rounded-full">235 66 20 9753</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact avec WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Send className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
              </div>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Objet de votre message"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 flex items-center gap-2">
                    <MessageCircle size={16} />
                    En cliquant sur envoyer, vous serez redirigé vers WhatsApp pour finaliser votre message.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle size={20} />
                  Envoyer sur WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                  Nos coordonnées
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Adresse</h3>
                      <p className="text-gray-600">Quartier Gassi, N'Djaména, Tchad</p>
                      <p className="text-sm text-gray-500">Siège social du club</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Téléphone</h3>
                      <p className="text-gray-600">+235 66 20 9753</p>
                      <p className="text-sm text-gray-500">Principal (WhatsApp disponible)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">foullahedifice2007@gmail.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24-48h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Horaires</h3>
                      <p className="text-gray-600">Lundi - Vendredi: 9h - 18h</p>
                      <p className="text-gray-600">Samedi: 9h - 13h</p>
                      <p className="text-sm text-gray-500">Fermé le dimanche</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte de localisation simple */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg mb-3">Accès rapide</h3>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600">Quartier Gassi</p>
                    <p className="text-gray-500 text-sm">N'Djaména, Tchad</p>
                    <a 
                      href="https://maps.google.com/?q=N'Djaména+Tchad" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-600 text-sm hover:underline"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct */}
              <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="font-semibold text-lg">WhatsApp Direct</h3>
                </div>
                <p className="mb-4 text-green-100">
                  Le moyen le plus rapide de nous contacter
                </p>
                <a
                  href="https://wa.me/23566209753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-green-700 text-center py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  Démarrer une conversation
                </a>
              </div>
            </motion.div>
          </div>

          {/* Section FAQ rapide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold">Partenariats ?</p>
                <p className="text-sm text-gray-600">Contactez notre direction commerciale</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold">Presse & Médias ?</p>
                <p className="text-sm text-gray-600">foullahedifice2007@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold">Billetterie ?</p>
                <p className="text-sm text-gray-600">+235 66 20 9753</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}