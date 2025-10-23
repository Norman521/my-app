import Image from "next/image";
import Welcome from "../components/welcome";
import Link from "next/link";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";

const categories = [
  { label: "All", value: "" },
  { label: "Branding", value: "Branding", isActive: true },
  { label: "Code", value: "Code" },
  { label: "Marketing", value: "Marketing" },
];

const portfolioList = [
  {
    image: "/portfolio-1.jpg",
    title: "Project Title 1",
    categories: ["Branding", "Code"],
  },
  {
    image: "/portfolio-2.jpg",
    title: "Project Title 2",
    categories: ["Marketing"],
  },
  {
    image: "/portfolio-3.jpg",
    title: "Project Title 3",
    categories: ["Branding"],
  },
  {
    image: "/portfolio-4.jpg",
    title: "Project Title 4",
    categories: ["Code", "Marketing"],
  },
  {
    image: "/portfolio-5.jpg",
    title: "Project Title 5",
    categories: ["Branding", "Marketing"],
  },
];

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Welcome text="This is the home page" />
        <Welcome text="Hello, World!" />
        <Welcome text="This is a message." />
        <Welcome text="Have a great day!" author="Norman" />
      </div>

      <div>
        <Portfolio categories={categories} items={portfolioList} />
      </div>
    </>
  );
}
