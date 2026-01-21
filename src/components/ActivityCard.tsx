import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin } from 'lucide-react';
import { Activity } from '../types/Activity';

interface ActivityCardProps {
  activity: Activity;
  onBook: (activity: Activity) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onBook }) => {
  const rating = parseFloat(activity.note.split('/')[0]);
  const reviewCount = activity.nb_avis.replace('≈', '').replace('~', '');

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onBook(activity);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Link to={`/activite/${activity.slug}`} onClick={handleCardClick} className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
          <img
            src={activity.image_url_1}
            alt={activity.titre}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {activity.categorie}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-xs text-gray-600">({reviewCount})</span>
          </div>
        </div>
      </div>

      <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {activity.titre}
          </h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{activity.lieu}</span>
        </div>

        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
            {activity.sous_categorie}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {activity.resume}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{activity.duree}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>Dès {activity.age_min}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">{activity.prix_des}</span>
            <span className="text-sm text-gray-600 ml-1">par personne</span>
          </div>
          
          <div className="flex space-x-2">
            <Link
              to={`/activite/${activity.slug}`}
              onClick={handleDetailsClick}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
            >
              Voir détails
            </Link>
            <button
              onClick={handleBookClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
              rel="nofollow"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default ActivityCard;