import React from 'react';
import { getRandomInternalLink } from '../utils/seo';

const SEOContent: React.FC = () => {
  const internalLink = getRandomInternalLink();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Découvrez toutes les activités à La Réunion
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'île de La Réunion offre une diversité d'<strong>activités à la Réunion</strong> exceptionnelle. 
                Des sommets du Piton de la Fournaise aux lagons cristallins de l'ouest, chaque coin de l\'île 
                révèle des trésors naturels uniques. Que vous soyez amateur de sensations fortes ou en quête 
                de détente, les <strong>activités La Réunion</strong> sauront combler toutes vos attentes.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>La Réunion : activités à découvrir</strong> dans les trois cirques classés UNESCO, 
                Mafate, Cilaos et Salazie, offrent des panoramas à couper le souffle. Les randonnées guidées 
                vous mènent au cœur de paysages volcaniques spectaculaires, tandis que les <strong>activités île de la Réunion</strong> 
                aquatiques révèlent la richesse des fonds marins de l'océan Indien.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour une <strong>activité la Réunion</strong> inoubliable, optez pour un survol en hélicoptère 
                des cirques et du volcan, ou tentez l'expérience unique du parapente au-dessus des lagons. 
                Les amateurs de sports nautiques trouveront leur bonheur avec la plongée sous-marine, 
                le snorkeling ou encore l'observation des cétacés.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Découvrez toutes nos <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">{internalLink}</a> 
                {' '}soigneusement sélectionnées pour vous garantir des expériences authentiques et sécurisées.
                Chaque prestataire est choisi pour son expertise et son respect de l'environnement exceptionnel de l\'île intense.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir Dineo pour vos activités à faire à la Réunion ?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Sélection rigoureuse des meilleurs prestataires locaux
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Réservation simplifiée via nos partenaires de confiance
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Paiement sécurisé et annulation flexible sur la plupart des activités
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Activités adaptées à tous les niveaux et tous les âges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;