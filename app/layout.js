// app/layout.js
import { Nunito } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'], // Tous les poids pour plus de flexibilité
});

export const metadata = {
  title: "Foullah Édifice FC - Club de Football Professionnel du Tchad",
  description: "Site officiel de Foullah Édifice FC, club de football basé à N'Djaména. Découvrez l'histoire, l'équipe, le palmarès et les actualités du club.",
  keywords: "Foullah Édifice, football tchadien, N'Djaména, LINAFOOT, club de football",
  authors: [{ name: 'Foullah Édifice FC' }],
  
  // Utiliser directement le JPG comme favicon
  icons: {
    icon: '/images/logofoullah.jpg',
    shortcut: '/images/logofoullah.jpg',
    apple: '/images/logofoullah.jpg',
  },
  
  // Open Graph
  openGraph: {
    title: 'Foullah Édifice FC',
    description: 'Club de football professionnel du Tchad',
    url: 'https://foullahedifice.td',
    siteName: 'Foullah Édifice FC',
    images: [
      {
        url: '/images/logofoullah.jpg',
        width: 1200,
        height: 630,
        alt: 'Foullah Édifice FC Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logofoullah.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logofoullah.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logofoullah.jpg" />
      </head>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}