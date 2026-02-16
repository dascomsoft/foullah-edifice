// app/actualites/[id]/page.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { allNews } from '@/app/data/news';

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Trouver l'article correspondant à l'ID
    const id = parseInt(params.id);
    console.log('ID recherché:', id);
    const foundArticle = allNews.find(news => news.id === id);
    console.log('Article trouvé:', foundArticle);
    setArticle(foundArticle);

    // Trouver des articles similaires (même catégorie, différents de l'article actuel)
    if (foundArticle) {
      const related = allNews
        .filter(news => news.category === foundArticle.category && news.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [params.id]);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/actualites" className="text-blue-600 hover:underline">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section avec l'image de l'article */}
      <section className="relative h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Catégorie */}
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              
              {/* Titre */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                {article.title}
              </h1>
              
              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Tag size={18} />
                  {article.readTime} de lecture
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Bouton retour */}
            <Link 
              href="/actualites"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition mb-8 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition" />
              Retour aux actualités
            </Link>

            {/* Auteur */}
            <div className="flex items-center gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={article.authorImage || '/images/foullah.jpg'}
                  alt={article.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{article.author}</h3>
                <p className="text-gray-600">{article.authorTitle || 'Journaliste'}</p>
              </div>
            </div>

            {/* CONTENU CORRIGÉ - Version avec affichage HTML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mb-12"
            >
              {/* Remplacer dangerouslySetInnerHTML par un rendu conditionnel */}
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p className="text-gray-500 italic">Contenu non disponible</p>
              )}
            </motion.div>

            {/* Galerie d'images */}
            {article.gallery && article.gallery.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Galerie photos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {article.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={img}
                        alt={`Galerie ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mb-12">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Partage social */}
            <div className="border-t border-b py-6 mb-12">
              <h3 className="text-lg font-semibold mb-4">Partager cet article</h3>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                  <Facebook size={20} />
                </button>
                <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition">
                  <Twitter size={20} />
                </button>
                <button className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition">
                  <Linkedin size={20} />
                </button>
                <button className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Articles <span className="text-blue-600">similaires</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
                >
                  <Link href={`/actualites/${related.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-blue-600 font-medium">{related.category}</span>
                      <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-blue-600 transition line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}