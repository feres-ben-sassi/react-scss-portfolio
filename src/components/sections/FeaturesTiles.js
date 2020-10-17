import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Build up the whole picture',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Analyse Web
                    </h4>
                  <p className="m-0 text-sm">
                  Plus d’impressions dans Google pour des recherches de termes reliés à votre entreprise, 
                  Optimisation pour les recherches effectuées dans la région où se trouve votre clientèle-cible, 
                  Plus de visiteurs sur votre site Internet, Plus de téléphones de clients, Facilité de trouver votre adresse lorsque quelqu’un cherche votre entreprise ou vos services dans Google Maps,
                   Possibilité d’obtenir davantage d’évaluations et de commentaires de la part de vos clients…                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Création site internet
                    </h4>
                  <p className="m-0 text-sm">
                  Ça fais plus qu’une décennie que Wecom conçoit et développe les sites web de différents types, Vitrine, e-commerce, blog, catalogue, réservation… Notre agence de web met à la disposition de ses clients plusieurs packages de solutions web afin de satisfaire leurs besoins, les faire économiser de l’argent et atteindre les objectifs prévus…, Les tarifs de notre agence de création de site web sont très raisonnables par rapport à la qualité du rendu fourni.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Création site web vitrine
                    </h4>
                  <p className="m-0 text-sm">
                  Un site web vitrine vous permet d’être présent sur le web, cela permettra à ceux qui cherchent votre produit ou service de vous trouver facilement et vous contacter via le web. L’agence de création des sites web en Tunisie Wecom a commencé de développer ce type de ces sites web depuis plus de 10 ans et grâce à son professionnalisme elle est aujourd’hui parmi les leaders des agences de création web en Tunisie et au Nord Afrique.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Conception Graphique
                    </h4>
                  <p className="m-0 text-sm">
                  Pour vos besoins en graphisme, en design graphique, en conception et en création. Pour une image forte et des concepts graphiques qui parlent par eux-mêmes et qui se démarquent par leur efficacité, leur originalité et leur clarté. De la conception à la réalisation jusqu’à l’impression. Notre rigueur, notre souci du détail et notre créativité vous assurent des documents bien structurés et agréables à consulter. De plus, nous pouvons rendre vos documents PDF accessibles; Exemples : Rapport annuel, sommaire                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Référencement web
                    </h4>
                  <p className="m-0 text-sm">
                  Nous comptabilisons des renseignements pertinents au thème de l’article afin de créer un contenu intéressant et à jour, et ce, dans l’optique d’obtenir le meilleur positionnement possible dans les moteurs de recherche les plus populaires, tels que Google. Une bonne rédaction Web des articles publiés sur votre site est un aspect crucial d’un bon référencement. N’attendez plus et prenez rendez-vous avec l’un de nos experts dès maintenant pour obtenir plus de trafic et de visibilité.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Applications Mobiles
                    </h4>
                  <p className="m-0 text-sm">
                  Depuis plusieurs années, notre agence développe des applications mobile sur mesure pour ses clients. Grâce à notre expertise nous avons eu l'opportunité de collaborer avec les boites internationales les plus connues tels que 'Proscape Technologies' , 'Euris' , 'IMS Health'… Nos partenaires de base étaient les laboratoires pharmaceutique tels que 'Pfizer', 'Sanofi Aventis', 'Novartis', 'Merck Serono'… et des établissements bancaires en Tunisie et en Afrique.                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;