// components/Portfolio.tsx
import React from "react";
import "../css/portfolio.css";

type Category = { label: string; value: string; isActive?: boolean };
type Item = { image: string; title: string; categories: string[] };

type PortfolioProps = {
  categories: Category[];
  items: Item[];
};

export default function Portfolio({ categories, items }: PortfolioProps) {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-grid">
          <div className="portfolio-column">
            <div className="portfolio-intro">
              <h2 className="portfolio-title">My Latest Works</h2>
              <p className="portfolio-description">
                A showcase of my recent projects across various domains. Feel
                free to explore and get inspired! I work on web apps, mobile
                apps, UI/UX designs, and open-source tools combining clean
                design with performant code.
              </p>

              <div className="portfolio-categories">
                {categories.map((category, i) => (
                  <button
                    key={i}
                    className={
                      category.isActive
                        ? "category-button active"
                        : "category-button"
                    }
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {items.slice(0, 2).map((item, i) => (
              <div className="portfolio-card" key={i}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h5>{item.title}</h5>
                  <p>{item.categories.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-column">
            {items.slice(2, 5).map((item, i) => (
              <div className="portfolio-card" key={i}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h5>{item.title}</h5>
                  <p>{item.categories.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-column">
            {items.slice(5, 8).map((item, i) => (
              <div className="portfolio-card" key={i}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h5>{item.title}</h5>
                  <p>{item.categories.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
