import React from 'react';
import { Search, MapPin, Star, ArrowDown } from 'lucide-react';
import { activities } from '../data/activities';

interface HeroProps {
  onSearch: (query: string) => void;
  onScrollToActivities: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onScrollToActivities }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez {activities.length} activités à faire à La Réunion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Réservez les meilleures activités de l'île intense : randonnées, plongée, parapente et bien plus encore
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une activité (randonnée, plongée, parapente...)"
                className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none text-lg"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Toute l'île couverte</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              <span>Activités notées 4.5+</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>🏔️ Annulation flexible</span>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              onClick={onScrollToActivities}
              className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Voir toutes les activités
              <ArrowDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;