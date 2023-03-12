import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';

import SheaCream from 'src/assets/imgs/sheaCream.jpeg';
import Producers from 'src/assets/imgs/producers.jpg';

import "aos/dist/aos.css";
import './style.scss';

function WelcomePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="welcome-page">

      <hr className="welcome-page__hr" />

      <h2 className='welcome-page__title'>Bienvenue chez Madjikarité</h2>

      <hr className="welcome-page__hr" />

      <article 
          className="welcome-page__article welcome-page__article--mobile"
          data-aos="fade-up"
          data-aos-duration="1500"
      >

        <div className="welcome-page__p-div">

          <h3 className="welcome-page__h3">Les vertus du Karité</h3>
          <p className="welcome-page__p">Naturellement riche en vitamine E et en acides gras, le beurre de karité possède des propriétés exceptionnelles pour les peaux délicates et sèches. Il est idéal pour nourrir, adoucir, protéger et revitaliser votre corps: talons, coudes, lèvres, cheveux secs et fatigués…Apaisant et réparateur, il est également très apprécié en soin après-soleil et apporte un réconfort immédiat.</p>

          <Link className="welcome-page__p-link" to="/sheabenefits">
            <span className="welcome-page__arrow">&#8594;</span> 
            Lire la suite de l'article
          </Link>

        </div>

        <div className="welcome-page__img-div">
          <img src={SheaCream} alt="Photo décorative, karité" className="welcome-page__img" />
        </div>

      </article>

      <article 
        className="welcome-page__article"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="welcome-page__img-div">
          <img src={Producers} alt="Photo des producteurs de karité" className="welcome-page__img" />
        </div>

        <div className="welcome-page__p-div">

          <h3 className="welcome-page__h3">Nos Productrices</h3>
          <p className="welcome-page__p">Madjikarité est une entreprise spécialisée dans le développement et la fabrication de gamme cosmétique biologique fait main à base de beurre de karité. L’ambition de Madjikarité est de promouvoir l’autonomisation financière des femmes en milieu rural, de lutter contre l’excision en donnant une activité aux exciseuses, contre la désertification par la plantation d’arbre de karité et de promouvoir un développement durable au Tchad.</p>

          <Link className="welcome-page__p-link" to="/workers">
            <span className="welcome-page__arrow">&#8594;</span>
            Lire la suite de l'article
          </Link>

        </div>

      </article>

    </div>
  );
}

export default WelcomePage;
