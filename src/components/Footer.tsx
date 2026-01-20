import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Dineo</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre spécialiste des activités à La Réunion. Découvrez l'île intense 
              à travers des expériences authentiques et inoubliables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-pink-600 rounded"></div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Activités</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Randonnées</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports nautiques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Activités aériennes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Découverte nature</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@dineo.re</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+262 692 XX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Dineo. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
              <Link to="/cgu" className="hover:text-white transition-colors">CGU</Link>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              Dineo participe à des programmes d'affiliation. Certaines réservations réalisées via nos liens 
              peuvent nous générer une commission sans surcoût pour vous.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;