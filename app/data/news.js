// app/data/news.js
export const allNews = [
  // NOUVEAU MATCH DU 16 FEVRIER 2026 (placé en tête)
  {
    id: 13,
    title: 'Victoire ÉCLATANTE ! Foullah Édifice bat USM 3-2 dans un match épique',
    excerpt: 'Au terme d\'un match passionnant, Foullah Édifice s\'impose 3-2 face à USM pour la 15ème journée de la Ligue Provinciale de N\'Djaména.',
    content: `
      <div class="space-y-6">
        <div class="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
          <img src="/images/foullah6.jpg" alt="Victoire de Foullah Édifice contre USM" class="object-cover w-full h-full" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p class="text-white text-sm">Les joueurs célèbrent cette victoire importante</p>
          </div>
        </div>
        
        <div class="bg-yellow-100 p-6 rounded-xl my-8 text-center">
          <p class="text-2xl font-bold text-yellow-800 mb-2">🏆 15ème JOURNÉE - LIGUE PROVINCIALE DE N'DJAMÉNA</p>
          <p class="text-4xl font-black text-blue-800 mt-4 mb-2">FOULLAH ÉDIFICE 3 - 2 USM</p>
          <p class="text-lg text-gray-700">16 Février 2026 - Stade Omnisports Idriss Mahamat Ouya</p>
        </div>
        
        <p class="text-xl leading-relaxed font-semibold">Félicitations à toute l'équipe pour cette victoire magnifique ! 🔥🔥🔥</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Les buteurs du match :</p>
          <ul class="mt-4 space-y-3">
            <li class="flex items-center gap-3">
              <span class="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <span class="font-medium">Bakhit Djibrine (23e) - Sur penalty</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <span class="font-medium">Yves Allarabaye (45+2e) - Frappe splendide</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <span class="font-medium">Benjamin Merba (78e) - But de la victoire</span>
            </li>
          </ul>
          <p class="mt-4 text-gray-600">USM avait réduit le score par deux fois (52e et 83e) mais n'a pas pu empêcher la victoire des bleus et ciel.</p>
        </div>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">Le résumé du match</h3>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-bold text-lg mb-3">1ère mi-temps</h4>
            <p>Dès l'entame du match, Foullah Édifice impose son rythme. À la 23e minute, Bakhit Djibrine transforme un penalty avec sang-froid. L'équipe continue de pousser et juste avant la pause, Yves Allarabaye envoie une frappe magistrale dans la lucarne (45+2). 2-0 à la pause, une première période parfaitement maîtrisée.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-bold text-lg mb-3">2ème mi-temps</h4>
            <p>USM revient des vestiaires avec de meilleures intentions et réduit le score à la 52e minute. Le match devient plus serré. À la 78e, Benjamin Merba surgit au second poteau et crucifie le gardien adverse : 3-1 ! USM marque un second but à la 83e, mais la défense tient bon. Victoire 3-2 !</p>
          </div>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-xl my-8">
          <p class="text-lg italic text-blue-800">"Quel match ! Les joueurs ont montré un cœur énorme. Nous avons su gérer les temps forts et faibles. Cette victoire est méritée et elle nous rapproche de notre objectif. Félicitations à toute l'équipe et merci aux supporters pour leur soutien sans faille !"</p>
          <div class="mt-4 flex items-center">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              TJ
            </div>
            <div class="ml-3">
              <p class="font-semibold">Toukam Julien</p>
              <p class="text-sm text-gray-500">Entraîneur Principal</p>
            </div>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">Les statistiques du match</h3>
        
        <div class="grid grid-cols-2 gap-4 text-center mb-6">
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">55%</p>
            <p class="text-sm">Possession</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">45%</p>
            <p class="text-sm">Possession</p>
          </div>
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">16</p>
            <p class="text-sm">Tirs</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">10</p>
            <p class="text-sm">Tirs</p>
          </div>
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">7</p>
            <p class="text-sm">Tirs cadrés</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">5</p>
            <p class="text-sm">Tirs cadrés</p>
          </div>
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">8</p>
            <p class="text-sm">Corners</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">4</p>
            <p class="text-sm">Corners</p>
          </div>
        </div>
        
        <div class="bg-green-100 p-6 rounded-xl mt-8">
          <p class="font-bold text-xl text-center text-green-800 mb-2">⭐ HOMME DU MATCH ⭐</p>
          <p class="text-center text-lg">Yves Allarabaye - Un but magnifique et une activité incessante au milieu</p>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-2xl font-bold text-blue-800">🔵⚪ VICTOIRE ! FOULLAH ÉDIFICE FORT ! ⚪🔵</p>
        </div>
      </div>
    `,
    image: '/images/foullah6.jpg',
    date: '16 Février 2026',
    author: 'Service Communication',
    category: 'Match',
    readTime: '5 min',
    authorImage: '/images/coachfoullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah6.jpg',
      '/images/foullah10.jpg',
      '/images/foullah20.jpg',
    ],
    tags: ['Match', 'Victoire', 'USM', '15ème journée', 'Ligue Provinciale', '3-2', 'Félicitations'],
  },

  // Ancien match du 6 Janvier (id:1) - maintenant en deuxième position
  {
    id: 1,
    title: 'Foullah Édifice FC signe un partenariat historique avec Fura Sport',
    excerpt: 'Le club annonce un accord de partenariat de deux ans avec l\'équipementier belge Fura Sport. Ce partenariat marque un tournant dans le développement du club.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Foullah Édifice FC est fier d'annoncer la signature d'un partenariat exclusif de deux ans avec l'équipementier sportif belge Fura Sport. Cet accord, historique pour le football tchadien, permettra au club de bénéficier d'équipements de haute qualité pour toutes ses équipes, des professionnels aux jeunes catégories.</p>
        
        <div class="bg-blue-50 p-6 rounded-xl my-8">
          <p class="text-lg italic text-blue-800">"C'est une étape importante dans notre développement", a déclaré le président Ibrahim Wang Laouna Foullah. "Fura Sport partage nos valeurs d'excellence et de passion pour le football. Ce partenariat va nous permettre de doter nos joueurs du meilleur équipement pour performer sur le terrain et représenter dignement le Tchad sur la scène internationale."</p>
        </div>
        
        <p>L'équipementier belge, reconnu mondialement pour la qualité de ses produits et son engagement envers le sport africain, fournira l'ensemble des tenues de match, d'entraînement et de loisir pour toutes les équipes du club. Les nouveaux maillots, spécialement conçus aux couleurs du club (bleu ciel, blanc et orange), seront dévoilés lors d'une cérémonie spéciale prévue dans les prochaines semaines au Stade Omnisports Idriss Mahamat Ouya.</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">Les avantages de ce partenariat :</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Équipements techniques de dernière génération pour tous les joueurs</li>
          <li>Maillots personnalisés avec les dernières technologies sportives</li>
          <li>Programme de formation pour les jeunes sur l'utilisation des équipements</li>
          <li>Visibilité internationale grâce au réseau de Fura Sport</li>
        </ul>
        
        <p>Ce partenariat s'inscrit dans la stratégie de professionnalisation ambitieuse du club tchadien, qui vise à se développer tant sur le plan sportif que structurel. "Nous voulons offrir à nos joueurs les meilleures conditions possibles pour s'épanouir et atteindre leur plein potentiel", a ajouté le président lors de la conférence de presse.</p>
        
        <div class="bg-yellow-50 p-6 rounded-xl mt-8">
          <p class="font-semibold">À savoir :</p>
          <p>Fura Sport équipe déjà plusieurs clubs professionnels en Afrique et en Europe. Ce partenariat place Foullah Édifice FC parmi les clubs les mieux équipés d'Afrique centrale.</p>
        </div>
      </div>
    `,
    image: '/images/partenairefoullah.jpg',
    date: '6 Janvier 2026',
    author: 'Direction du Club',
    category: 'Partenariat',
    readTime: '5 min',
    authorImage: '/images/presifoullah.jpg',
    authorTitle: 'Président du Club',
    gallery: [
      '/images/partenairefoullah.jpg',
      '/images/partenairefoullah1.jpg',
      '/images/partenairefoullah2.jpg',
    ],
    tags: ['Partenariat', 'Équipementier', 'Fura Sport', 'Développement', 'Sponsoring'],
  },

  // ... (tous les autres articles restent identiques, juste avec leurs ids respectifs)
  {
    id: 2,
    title: 'Foullah Édifice accroché par Tourbillon (0-0) au Stade de Diguel',
    excerpt: 'Match nul et vierge entre Foullah Édifice et Tourbillon dans un derby intense de N\'Djaména.',
    content: `
      <div class="space-y-6">
        <div class="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
          <img src="/images/foullah6.jpg" alt="Match Foullah vs Tourbillon" class="object-cover w-full h-full" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p class="text-white text-sm">Le Stade de Diguel a vibré pour ce derby</p>
          </div>
        </div>
        
        <p class="text-xl leading-relaxed">Dans un match intense disputé ce 20 janvier au Stade de Diguel, Foullah Édifice FC a été tenu en échec par son rival Tourbillon (0-0). Une rencontre marquée par une grosse intensité physique et plusieurs occasions chaudes, mais aucun des deux camps n'a réussi à trouver le chemin des filets.</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">Le résumé du match</h3>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-bold text-lg mb-3">1ère mi-temps</h4>
            <p>Dès l'entame du match, Foullah Édifice impose son rythme. À la 12e minute, Bakhit Djibrine voit sa frappe repoussée par le gardien adverse. Tourbillon répond à la 25e par une contre-attaque dangereuse, bien maîtrisée par la défense centrale emmenée par Aubin Mbaigolmem. Les occasions se multiplient mais le score reste vierge à la pause.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-bold text-lg mb-3">2ème mi-temps</h4>
            <p>Au retour des vestiaires, Foullah pousse davantage. Yves Allarabaye, très en vue, obtient un coup franc dangereux à la 67e minute, mais sa tentative passe de peu à côté. Les dernières minutes sont électriques, avec un sauvetage décisif du gardien Kourdina Mangana à la 89e. Score final 0-0.</p>
          </div>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-xl my-8">
          <p class="text-lg italic text-blue-800">"Nous aurions mérité la victoire mais ce point est important pour la suite", a commenté l'entraîneur Djimta Yamtamadji. "L'équipe a montré un bon visage, avec une belle organisation défensive et des opportunités en contre-attaque. Nous continuons de progresser."</p>
        </div>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">Les statistiques du match</h3>
        
        <div class="grid grid-cols-2 gap-4 text-center mb-6">
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">58%</p>
            <p class="text-sm">Possession</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">42%</p>
            <p class="text-sm">Possession</p>
          </div>
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">14</p>
            <p class="text-sm">Tirs</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">8</p>
            <p class="text-sm">Tirs</p>
          </div>
          <div class="bg-blue-600 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">6</p>
            <p class="text-sm">Corners</p>
          </div>
          <div class="bg-gray-700 text-white p-4 rounded-xl">
            <p class="text-3xl font-bold">3</p>
            <p class="text-sm">Corners</p>
          </div>
        </div>
        
        <p>Avec ce résultat, Foullah Édifice reste dans le top 3 du championnat et confirme sa solidité défensive. Le prochain match sera crucial pour la course au titre.</p>
      </div>
    `,
    image: '/images/foullah6.jpg',
    date: '20 Janvier 2026',
    author: 'Service Communication',
    category: 'Match',
    readTime: '6 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah6.jpg',
      '/images/foullah4.jpg',
      '/images/foullah5.jpg',
    ],
    tags: ['Match', 'Championnat', 'Tourbillon', 'Derby', 'Stade de Diguel'],
  },

  {
    id: 3,
    title: 'Victoire précieuse contre Gazelle FC (1-0) au Stade Paris Congo',
    excerpt: 'Un but de Bakhit Djibrine offre la victoire à Foullah Édifice face à Gazelle FC.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Foullah Édifice FC s'est imposé sur le score de 1-0 face à Gazelle FC ce 5 janvier au Stade Paris Congo. Un match maîtrisé de bout en bout par les hommes de Djimta Yamtamadji, qui confirment leur bonne dynamique.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ But : Bakhit Djibrine (37e)</p>
        </div>
        
        <p>La première période est équilibrée, avec des occasions de part et d'autre. C'est finalement juste avant la pause que Bakhit Djibrine, bien servi par Yves Allarabaye, trompe le gardien adverse d'une frappe croisée imparable. 1-0 à la mi-temps.</p>
        
        <p>En seconde période, Foullah Édifice gère son avantage avec intelligence, plaçant des contres dangereux sans réussir à doubler la mise. La défense, impeccable, repousse toutes les tentatives adverses. Gazelle FC pousse dans les dernières minutes mais bute sur un grand Kourdina Mangana, décisif sur plusieurs frappes.</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">La réaction du capitaine</h3>
        
        <div class="bg-blue-50 p-6 rounded-xl">
          <p class="text-lg italic">"C'est une victoire importante pour la confiance", a déclaré le capitaine après le match. "Nous avons montré que nous pouvons rivaliser avec les meilleures équipes du championnat. Gazelle est un concurrent direct, ces trois points valent de l'or."</p>
        </div>
        
        <p>Avec cette victoire, Foullah Édifice se rapproche du leader et reste en course pour le titre. Prochain rendez-vous : la réception de Ferah FC.</p>
      </div>
    `,
    image: '/images/foullah10.jpg',
    date: '05 Janvier 2026',
    author: 'Service Communication',
    category: 'Match',
    readTime: '4 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah10.jpg',
      '/images/foullah4.jpg',
      '/images/foullah.jpg',
    ],
    tags: ['Match', 'Victoire', 'Gazelle FC', 'Championnat', 'Paris Congo'],
  },

  {
    id: 4,
    title: 'Défaite amère face à Ferah FC (1-2)',
    excerpt: 'Foullah Édifice s\'incline à domicile contre Ferah FC malgré une belle réaction en seconde période.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 30 décembre, Foullah Édifice FC s'est incliné 2-1 face à Ferah FC dans un match à rebondissements. Une défaite amère pour les locaux qui ont pourtant tout donné pour revenir au score.</p>
        
        <div class="bg-red-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-red-800">⚽ Les buts :</p>
          <p class="mt-2">Foullah : Benjamin Merba (72e)</p>
          <p>Ferah : (23e, 58e)</p>
        </div>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">Le déroulement du match</h3>
        
        <p>Le début de match est difficile pour Foullah. Ferah ouvre le score à la 23e minute sur une erreur de marquage. Les visiteurs doublent la mise à l'heure de jeu (58e) et semblent se diriger vers une victoire tranquille.</p>
        
        <p>C'est sans compter sur la réaction d'orgueil des joueurs de Foullah. Benjamin Merba, entré en jeu, réduit l'écart à la 72e minute d'une frappe splendide des 20 mètres. Les dernières minutes sont un siège du camp adverse, mais le but de l'égalisation ne viendra pas.</p>
        
        <div class="bg-blue-50 p-6 rounded-xl my-8">
          <p class="text-lg italic">"Nous avons trop mal commencé le match", a regretté l'entraîneur Djimta Yamtamadji. "Mais la réaction en fin de match est encourageante pour la suite. Nous devons apprendre à être plus constants."</p>
        </div>
        
        <p>Cette défaite est un avertissement pour le club, qui devra se montrer plus vigilant à l'avenir pour rester dans la course au titre.</p>
      </div>
    `,
    image: '/images/foullah20.jpg',
    date: '30 Décembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '4 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah20.jpg',
      '/images/foullah5.jpg',
      '/images/foullah6.jpg',
    ],
    tags: ['Match', 'Défaite', 'Ferah FC', 'Championnat'],
  },

  {
    id: 5,
    title: 'Démonstration face à AS Colombe (2-0) au Stade de Farche',
    excerpt: 'Foullah Édifice s\'impose largement face à AS Colombe grâce à des buts de Bakhit Djibrine et Mahamat Lossou.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 23 décembre, Foullah Édifice FC a livré une prestation majuscule au Stade de Farche en dominant AS Colombe 2-0. Une victoire qui porte la marque des grands soirs.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Les buts : Bakhit Djibrine (34e), Mahamat Lossou (67e)</p>
        </div>
        
        <p>Dès l'entame du match, Foullah impose son rythme. La possession est largement en faveur des locaux qui multiplient les occasions. À la 34e, Bakhit Djibrine ouvre le score d'une tête plongeante sur un centre parfait d'Acyl Mbogo. 1-0 à la pause.</p>
        
        <p>La seconde période est tout aussi maîtrisée. Mahamat Lossou, le défenseur central, double la mise sur corner à la 67e minute, son premier but de la saison. Le score aurait pu être plus lourd sans un grand gardien adverse.</p>
        
        <p>Avec cette victoire, Foullah Édifice enchaîne une troisième victoire consécutive et confirme son statut de prétendant au titre.</p>
      </div>
    `,
    image: '/images/foullah2.jpg',
    date: '23 Décembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '3 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah6.jpg',
      '/images/foullah2.jpg',
      '/images/foullah4.jpg',
    ],
    tags: ['Match', 'Victoire', 'AS Colombe', 'Championnat', 'Stade Farche'],
  },

  {
    id: 6,
    title: 'FESTIVAL DE BUTS ! Foullah écrase Jeunes Talents 8-1 au Stade Paris Congo',
    excerpt: 'Une démonstration offensive historique de Foullah Édifice qui inscrit 8 buts face à Jeunes Talents.',
    content: `
      <div class="space-y-6">
        <div class="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
          <img src="/images/foullah65.jpg" alt="Fête des buts" class="object-cover w-full h-full" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p class="text-white text-sm">Les joueurs célèbrent cette victoire historique</p>
          </div>
        </div>
        
        <p class="text-xl leading-relaxed">Le 19 décembre restera dans les annales du club ! Foullah Édifice FC a littéralement atomisé Jeunes Talents sur le score sans appel de 8 buts à 1 au Stade Paris Congo. Une démonstration offensive qui restera comme l'un des plus grands succès de l'histoire du club.</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">La pluie de buts</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-green-100 p-4 rounded-xl">
            <p class="font-bold text-lg">1ère mi-temps</p>
            <p>⚽ Yves Allarabaye (8e)<br>
            ⚽ Bakhit Djibrine (15e)<br>
            ⚽ Benjamin Merba (23e)<br>
            ⚽ Hassan Hissein (35e)<br>
            ⚽ Bakhit Djibrine (42e)</p>
          </div>
          <div class="bg-green-100 p-4 rounded-xl">
            <p class="font-bold text-lg">2ème mi-temps</p>
            <p>⚽ Yaya Kerim (52e)<br>
            ⚽ Bakhit Djibrine (67e) - Hat-trick !<br>
            ⚽ Alafi Esaie Mayakmon (81e)<br>
            ⚽ But de Jeunes Talents (88e)</p>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-xl my-8">
          <p class="text-2xl font-bold text-center mb-2">8-1</p>
          <p class="text-center text-lg">La plus large victoire de la saison</p>
        </div>
        
        <p>Bakhit Djibrine a signé un triplé mémorable, tandis que Yves Allarabaye a été élu homme du match pour sa performance étincelante. Le public du Paris Congo a assisté à un véritable festival offensif.</p>
        
        <div class="bg-blue-50 p-6 rounded-xl">
          <p class="text-lg italic">"Ce soir, tout a fonctionné", a savouré l'entraîneur. "Les joueurs ont été magnifiques. C'est ce genre de performance qui construit la confiance et marque les esprits."</p>
        </div>
      </div>
    `,
    image: '/images/foullah65.jpg',
    date: '19 Décembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '5 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Entraîneur Principal',
    gallery: [
      '/images/foullah65.jpg',
      '/images/foullah6.jpg',
      '/images/foullah5.jpg',
    ],
    tags: ['Match', 'Victoire historique', '8 buts', 'Triplé', 'Jeunes Talents', 'Paris Congo'],
  },

  {
    id: 7,
    title: 'Foullah s\'impose dans le choc face à AS Coton (2-1) au Stade Farche',
    excerpt: 'Dans un match intense, Foullah Édifice prend le dessus sur AS Coton grâce à des buts en fin de match.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 8 décembre, Foullah Édifice FC a remporté un choc important face à AS Coton sur le score de 2-1 au Stade Farche. Une victoire qui fait du bien au classement.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Les buts :</p>
          <p class="mt-2">Foullah : Yves Allarabaye (73e), Bakhit Djibrine (81e)</p>
          <p>AS Coton : (52e)</p>
        </div>
        
        <p>Le match est serré, équilibré. AS Coton ouvre le score en début de seconde période (52e) et semble tenir sa victoire. Mais Foullah a des ressources insoupçonnées. Yves Allarabaye, d'une frappe enroulée, égalise à la 73e. L'embellie se confirme quand Bakhit Djibrine, servi en profondeur, trompe le gardien adverse à la 81e.</p>
        
        <p>Les dernières minutes sont tendues, mais la défense tient bon. Foullah s'impose et recolle au peloton de tête.</p>
        
        <p>"Nous n'avons jamais douté", a confié le capitaine. "Même menés, nous savions que nous pouvions revenir. Cette équipe a du caractère."</p>
      </div>
    `,
    image: '/images/fullah30.jpg',
    date: '08 Décembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '3 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/fullah30.jpg',
      '/images/foullah.jpg',
      '/images/foullah2.jpg',
    ],
    tags: ['Match', 'Victoire', 'AS Coton', 'Championnat', 'Stade Farche'],
  },

  {
    id: 8,
    title: 'Jour sans face à Sovotours (1-4) au Stade de Farcha',
    excerpt: 'Foullah Édifice subit une lourde défaite face à Sovotours, malgré l\'ouverture du score.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 5 décembre, Foullah Édifice FC a vécu une après-midi difficile face à Sovotours au Stade de Farcha, s'inclinant lourdement 4-1.</p>
        
        <div class="bg-red-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-red-800">⚽ Les buts :</p>
          <p class="mt-2">Foullah : Acyl Mbogo (12e)</p>
          <p>Sovotours : (24e, 38e, 52e, 78e)</p>
        </div>
        
        <p>Tout avait pourtant bien commencé pour Foullah. À la 12e minute, Acyl Mbogo ouvre le score d'une frappe puissante sous la barre. Les locaux maîtrisent leur sujet et semblent bien partis pour l'emporter.</p>
        
        <p>Mais c'est sans compter sur la réaction de Sovotours, qui égalise à la 24e avant de prendre l'avantage juste avant la pause (38e). En seconde période, le scénario tourne au cauchemar : deux nouveaux buts adverses plombent complètement les débats (52e, 78e).</p>
        
        <p>"C'est une défaite difficile à accepter", a reconnu l'entraîneur. "Nous avons bien commencé, mais nous avons complètement craqué après leur égalisation. Il faudra retenir les leçons de ce match."</p>
        
        <p>Cette défaite sert d'avertissement. Le club devra se remobiliser rapidement pour les prochains rendez-vous.</p>
      </div>
    `,
    image: '/images/foullah40.jpg',
    date: '05 Décembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '4 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah40.jpg',
      '/images/foullah4.jpg',
      '/images/foullah5.jpg',
    ],
    tags: ['Match', 'Défaite', 'Sovotours', 'Championnat', 'Stade Farcha'],
  },

  {
    id: 9,
    title: 'Foullah Édifice démarre fort avec une victoire 3-0 contre Yves',
    excerpt: 'Pour la première journée du championnat, Foullah Édifice s\'impose largement 3-0 face à Yves.',
    content: `
      <div class="space-y-6">
        <div class="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
          <img src="/images/foullah45.jpg" alt="Match Foullah vs Yves" class="object-cover w-full h-full" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p class="text-white text-sm">Foullah Édifice célèbre sa victoire inaugurale</p>
          </div>
        </div>
        
        <p class="text-xl leading-relaxed">Le championnat du Tchad de football a débuté en beauté pour Foullah Édifice FC. Le 29 octobre 2025, l'équipe s'est imposée 3-0 face à Yves lors de la première journée, au Stade Omnisports Idriss Mahamat Ouya.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Les buts :</p>
          <p class="mt-2">Yves Allarabaye a inscrit un triplé (12e, 45e, 78e)</p>
        </div>
        
        <p>Dès la 12e minute, Yves Allarabaye ouvre le score d'une frappe croisée. Il double la mise juste avant la pause (45e) et signe son triplé à la 78e minute, offrant une victoire éclatante pour l'entrée en lice des bleus et ciel.</p>
        
        <p>"C'est le début de rêve", a commenté l'entraîneur Djimta Yamtamadji. "Trois buts, trois points, une prestation solide. Nous lançons parfaitement notre saison."</p>
      </div>
    `,
    image: '/images/foullah45.jpg',
    date: '29 Octobre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '3 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah45.jpg',
      '/images/foullah.jpg',
      '/images/foullah4.jpg',
    ],
    tags: ['Match', 'Victoire', 'Triplé', 'Yves Allarabaye', 'Journée 1'],
  },

  {
    id: 10,
    title: 'Foullah s\'impose 2-0 face à Galactik en déplacement',
    excerpt: 'Deuxième victoire consécutive pour Foullah Édifice qui domine Galactik 2-0.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 3 novembre 2025, pour la deuxième journée du championnat, Foullah Édifice FC s'est imposé 2-0 face à Galactik. Une victoire importante à l'extérieur qui confirme le bon début de saison.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Les buts :</p>
          <p class="mt-2">Benjamin Merba (34e), Bakhit Djibrine (72e)</p>
        </div>
        
        <p>Benjamin Merba ouvre le score à la 34e minute d'une frappe lointaine. En seconde période, Bakhit Djibrine double la mise à la 72e et scelle le sort de la rencontre.</p>
        
        <p>Deux matches, deux victoires, 5 buts marqués, 0 encaissé : Foullah Édifice réalise un début de saison parfait.</p>
      </div>
    `,
    image: '/images/foullah50.jpg',
    date: '3 Novembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '3 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah50.jpg',
      '/images/foullah2.jpg',
      '/images/foullah5.jpg',
    ],
    tags: ['Match', 'Victoire', 'Galactik', 'Journée 2'],
  },

  {
    id: 11,
    title: 'Foullah bat Emat 1-0 et enchaîne une troisième victoire',
    excerpt: 'Troisième succès consécutif pour Foullah Édifice qui domine Emat sur le score de 1-0.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 19 novembre 2025, pour la troisième journée, Foullah Édifice FC s'est imposé 1-0 face à Emat. Un score étriqué mais qui permet aux bleus et ciel de continuer leur sans-faute.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Le but :</p>
          <p class="mt-2">Mahamat Lossou (52e)</p>
        </div>
        
        <p>Dans un match serré, c'est le défenseur Mahamat Lossou qui débloque la situation à la 52e minute sur corner. La défense tient bon jusqu'au bout et préserve le clean sheet.</p>
        
        <p>Trois matches, trois victoires, toujours 0 but encaissé. Une défense de fer !</p>
      </div>
    `,
    image: '/images/foullah55.jpg',
    date: '19 Novembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '3 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah55.jpg',
      '/images/foullah6.jpg',
      '/images/foullah.jpg',
    ],
    tags: ['Match', 'Victoire', 'Emat', 'Journée 3'],
  },

  {
    id: 12,
    title: 'Démonstration ! Foullah écrase As Dgssie 4-1',
    excerpt: 'Une victoire éclatante 4-1 face à As Dgssie pour la quatrième journée.',
    content: `
      <div class="space-y-6">
        <p class="text-xl leading-relaxed">Le 23 novembre 2025, Foullah Édifice FC a livré une prestation majuscule en s'imposant 4-1 face à As Dgssie. Un festival offensif qui confirme le statut de favori du club.</p>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <p class="text-lg font-semibold text-green-800">⚽ Les buts :</p>
          <p class="mt-2">Bakhit Djibrine (8e, 45e), Yves Allarabaye (23e), Yaya Kerim (67e)</p>
          <p class="text-sm text-gray-600 mt-2">As Dgssie réduit le score à la 81e</p>
        </div>
        
        <p>Dès la 8e minute, Bakhit Djibrine ouvre le score. Yves Allarabaye double la mise à la 23e. Avant la pause, Bakhit Djibrine inscrit son deuxième but (45e). En seconde période, Yaya Kerim porte le score à 4-0 avant le but de l'honneur adverse.</p>
        
        <p>Avec 4 victoires en 4 matches, 10 buts marqués et 1 seul encaissé, Foullah Édifice réalise un début de saison historique !</p>
      </div>
    `,
    image: '/images/foullah60.jpg',
    date: '23 Novembre 2025',
    author: 'Service Communication',
    category: 'Match',
    readTime: '4 min',
    authorImage: '/images/foullah.jpg',
    authorTitle: 'Service Presse',
    gallery: [
      '/images/foullah60.jpg',
      '/images/foullah5.jpg',
      '/images/foullah4.jpg',
    ],
    tags: ['Match', 'Victoire', 'As Dgssie', 'Journée 4', '4 buts'],
  },
];