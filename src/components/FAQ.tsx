import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment réserver une activité à La Réunion ?",
      answer: "La réservation est simple : parcourez notre sélection d'activités, consultez les détails de celle qui vous intéresse, puis cliquez sur 'Réserver'. Vous serez redirigé vers la plateforme de réservation de notre partenaire pour finaliser votre réservation en toute sécurité avec un paiement sécurisé."
    },
    {
      question: "Peut-on annuler ou modifier une réservation ?",
      answer: "Oui, la plupart des activités proposent une annulation flexible. Les conditions d'annulation varient selon l'activité et le prestataire, et sont clairement indiquées sur chaque fiche. Généralement, une annulation jusqu'à 24h avant l'activité permet un remboursement complet. Pour toute modification, contactez directement le prestataire via votre espace de réservation."
    },
    {
      question: "Quelles activités pour les familles avec enfants ?",
      answer: "De nombreuses activités sont adaptées aux familles : balades à cheval (dès 9-10 ans), snorkeling dans les lagons protégés (dès 6 ans), kayak transparent, observation des dauphins, ou encore les vols en hélicoptère (dès 2 ans). L'âge minimum est indiqué sur chaque activité."
    },
    {
      question: "Que prévoir en termes de vêtements et équipements ?",
      answer: "L'équipement spécialisé est généralement fourni (casques, combinaisons, matériel de plongée...). Prévoyez des vêtements adaptés à l'activité, de la crème solaire, de l'eau, et des chaussures fermées. Les détails sont précisés dans la section 'À prévoir' de chaque activité."
    },
    {
      question: "Est-ce sécurisé de réserver en ligne ?",
      answer: "Absolument. Nous collaborons avec des plateformes de réservation reconnues et sécurisées. Les paiements sont traités par nos partenaires avec des systèmes de cryptage bancaire. Tous les prestataires d'activités sont vérifiés, assurés et respectent les normes de sécurité en vigueur."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Questions fréquentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-gray-900 text-base">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  {index === 2 && (
                    <p className="mt-2">
                      <Link to="/activites-famille-reunion" className="text-blue-600 hover:text-blue-800 font-medium">
                        Voir toutes les activités en famille
                      </Link>
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
