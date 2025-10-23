import React from "react";
import "./portfolio.css";

const categories = [
  { label: "All", value: "", isActive: false },
  { label: "Branding", value: "Branding", isActive: true },
  { label: "Code", value: "Code", isActive: false },
  { label: "Marketing", value: "Marketing", isActive: false },
];

const portfolioList = [
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio32.jpg",
    title: "Marketing",
    categories: ["Digital Marketing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio31.jpg",
    title: "Management",
    categories: ["Content Writing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio30.jpg",
    title: "Branding",
    categories: ["Product Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio29.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio28.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio27.jpg",
    title: "Customization",
    categories: ["Theme Development"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio26.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg",
    title: "Development",
    categories: ["Editor Expert"],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-grid">
          <div className="portfolio-column">
            <div className="portfolio-intro">
              <h2 className="portfolio-title">My Latest Works</h2>
              <p className="portfolio-description">
                It’s easier to reach your savings goals when you have the right
                savings account. It’s easier to reach your savings goals when
                you have the right savings account.
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

            {portfolioList.slice(0, 2).map((item, i) => (
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
            {portfolioList.slice(2, 5).map((item, i) => (
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
            {portfolioList.slice(5, 8).map((item, i) => (
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
