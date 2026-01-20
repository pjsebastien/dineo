import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectComponent: React.FC = () => {
  const { path } = useParams<{ path: string }>();

  useEffect(() => {
    // Redirections vers le blog
    const redirects: Record<string, string> = {
      '10-choses-incontournables-a-faire-a-la-reunion': 'https://blog.dineo.re/10-choses-incontournables-a-faire-a-la-reunion',
      'a-la-decouverte-du-rhum-reunionnais-saveurs-histoire-et-secrets-de-fabrication': 'https://blog.dineo.re/a-la-decouverte-du-rhum-reunionnais-saveurs-histoire-et-secrets-de-fabrication',
      'avis-et-tarifs-helicoptere-reunion': 'https://blog.dineo.re/avis-et-tarifs-helicoptere-reunion',
      'canyoning-bras-rouge': 'https://blog.dineo.re/canyoning-bras-rouge',
      'cascade-jacqueline': 'https://blog.dineo.re/cascade-jacqueline',
      'cascade-niagara-la-reunion': 'https://blog.dineo.re/cascade-niagara-la-reunion',
      'gestion-entreprise-la-reunion': 'https://blog.dineo.re/gestion-entreprise-la-reunion',
      'la-cuisine-creole-a-la-reunion': 'https://blog.dineo.re/la-cuisine-creole-a-la-reunion',
      'la-reunion-dom-ou-tom': 'https://blog.dineo.re/la-reunion-dom-ou-tom',
      'location-van-la-reunion': 'https://blog.dineo.re/location-van-la-reunion',
      'parapente-a-la-reunion-avis-tarifs': 'https://blog.dineo.re/parapente-a-la-reunion-avis-tarifs',
      'peche-au-gros-reunion': 'https://blog.dineo.re/peche-au-gros-reunion',
      'plongee-ile-de-la-reunion': 'https://blog.dineo.re/plongee-ile-de-la-reunion',
      'quelle-heure-est-il-a-la-reunion': 'https://blog.dineo.re/quelle-heure-est-il-a-la-reunion',
      'randonnee-quad-la-reunion': 'https://blog.dineo.re/randonnee-quad-la-reunion',
      'rencontre-geants-mers-reunion-2023': 'https://blog.dineo.re/rencontre-geants-mers-reunion-2023',
      'reunion-en-janvier-avis': 'https://blog.dineo.re/reunion-en-janvier-avis',
      'trouver-un-artisan-la-reunion-974': 'https://blog.dineo.re/trouver-un-artisan-la-reunion-974',
      'vacances-ile-maurice': 'https://blog.dineo.re/vacances-ile-maurice',
      'voyager-a-la-reunion-en-mai-avis-et-meteo': 'https://blog.dineo.re/voyager-a-la-reunion-en-mai-avis-et-meteo'
    };

    if (path && redirects[path]) {
      window.location.href = redirects[path];
    }
  }, [path]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirection en cours...</p>
      </div>
    </div>
  );
};

export default RedirectComponent;