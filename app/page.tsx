import Image from "next/image";
import Welcome from "../components/welcome";
import Link from "next/link";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import About from "../components/about";

const portfolioList = [
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio32.jpg",
    title: "Project Title 1",
    categories: ["Branding", "Marketing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio31.jpg",
    title: "Project Title 2",
    categories: ["Marketing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio30.jpg",
    title: "Project Title 3",
    categories: ["Branding"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio29.jpg",
    title: "Project Title 4",
    categories: ["Branding", "Marketing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio28.jpg",
    title: "Project Title 5",
    categories: ["Branding", "Marketing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio27.jpg",
    title: "Project Title 6",
    categories: ["Branding"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio26.jpg",
    title: "Project Title 7",
    categories: ["Branding", "Code"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg",
    title: "Project Title 8",
    categories: ["Marketing"],
  },
];

export default function Home() {
  return (
    <>
      <Portfolio categories={[]} items={portfolioList} />
    </>
  );
}
