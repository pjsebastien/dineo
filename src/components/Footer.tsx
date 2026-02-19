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
              <span className="text-2xl font-bold">Dineo</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre spécialiste des activités à La Réunion. Découvrez l'île intense
              à travers des expériences authentiques et inoubliables.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dineo.re" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="https://www.instagram.com/dineo.re" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-pink-600 rounded"></div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Activités</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/randonnees-reunion" className="hover:text-white transition-colors">Randonnées</Link></li>
              <li><Link to="/canyoning-reunion" className="hover:text-white transition-colors">Canyoning</Link></li>
              <li><Link to="/balades-cheval-reunion" className="hover:text-white transition-colors">Balades à cheval</Link></li>
              <li><Link to="/location-van-reunion" className="hover:text-white transition-colors">Location de van</Link></li>
              <li><Link to="/activites-famille-reunion" className="hover:text-white transition-colors">Activités en famille</Link></li>
              <li><Link to="/activites-couple-reunion" className="hover:text-white transition-colors">Activités en couple</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/que-faire-saint-pierre-reunion" className="hover:text-white transition-colors">Saint-Pierre</Link></li>
              <li><Link to="/que-faire-saint-gilles-les-bains-reunion" className="hover:text-white transition-colors">Saint-Gilles</Link></li>
              <li><Link to="/que-faire-cilaos-reunion" className="hover:text-white transition-colors">Cilaos</Link></li>
              <li><Link to="/que-faire-cirque-salazie-reunion" className="hover:text-white transition-colors">Salazie</Link></li>
              <li><Link to="/que-faire-piton-fournaise-reunion" className="hover:text-white transition-colors">Piton de la Fournaise</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
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