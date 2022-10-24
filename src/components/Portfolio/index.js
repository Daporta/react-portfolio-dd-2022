import './index.css';
import React from 'react';

const Portfolio = () => {

  const data = [
    {
      link: "https://dd-advice-generator-app.netlify.app/",
      img: require("./images/AdviceGenerator.png"),
      titulo: 'Advice Generator',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'API']
    },

    {
      link: "https://dd-expenses-chart-component.netlify.app/",
      img: require("./images/ExpensesChart.png"),
      titulo: 'Expenses Chart',
      tags: ['HTML5', 'CSS3', 'JavaScript']
    },

    {
      link: "https://dd-rate-component.netlify.app/",
      img: require("./images/RatingComponent.png"),
      titulo: 'Rate Component',
      tags: ['HTML5', 'CSS3', 'JavaScript']
    },

    {
      link: "https://dd-single-price-card-component.netlify.app/",
      img: require("./images/PriceCard.png"),
      titulo: 'Price Card Component',
      tags: ['HTML5', 'CSS3']
    }
  ]

    return (
      <div className="portfolio-content">
        <h2 className='portfolio-header'>Portfolio</h2>
        <section className="portfolio-container">

          {data.map((element, id) => {
            return (
              <div className="portfolio-card" key={id}>
                <a href={element.link} className="portfolio-link" target='_blank' rel='noopener noreferrer'>
                  <div className="image" alt={element.titulo} style={{backgroundImage: `url(${element.img})`}} />
                  <div className="text-area">
                    <h3>{element.titulo}</h3>
                    <p>{element.tags.join(', ')}</p>
                  </div>
                </a>
              </div>
            )
          })}

          
          
        </section>
      </div>
    );
}

export default Portfolio;