// app/components/Footer.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logofoullah.jpg"
                  alt="Foullah Édifice FC"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="font-bold text-xl">Foullah Édifice FC</span>
            </div>
            <p className="text-gray-400 mb-4">
              Club de football professionnel basé à N'Djaména, Tchad. Fondé en 2007, 
              nous représentons fièrement le football tchadien en Afrique.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition">Le Club</Link></li>
                <li><Link href="/president" className="text-gray-400 hover:text-blue-400 transition">Président</Link></li> {/* Nouveau */}
              <li><Link href="/histoire" className="text-gray-400 hover:text-blue-400 transition">Histoire</Link></li>
              <li><Link href="/equipe" className="text-gray-400 hover:text-blue-400 transition">Équipe</Link></li>
              <li><Link href="/palmares" className="text-gray-400 hover:text-blue-400 transition">Palmarès</Link></li>
              <li><Link href="/actualites" className="text-gray-400 hover:text-blue-400 transition">Actualités</Link></li>
              <li><Link href="/billetterie" className="text-gray-400 hover:text-blue-400 transition">Billetterie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-blue-400" />
                <span>Quartier Gassi, N'Djaména, Tchad</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-blue-400" />
                <span>+235 66 20 97 53</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-blue-400" />
                <span>foullahedifice2007@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-3">
              Inscrivez-vous pour recevoir les dernières actualités du club.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Foullah Édifice FC. Tous droits réservés.</p>
          <p className="text-sm mt-2">
            Site officiel du club - Solidarité - Soutien - Victoire
          </p>
        </div>
      </div>
    </footer>
  );
}