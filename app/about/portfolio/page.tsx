// app/portfolio/page.tsx (example)
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type Item = { title: string; date: string; image: string; caption?: string };

export default function PortfolioPage() {
  const dir = path.join(process.cwd(), "content/gallery");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const items: Item[] = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        title: data.title,
        date: data.date,
        image: data.image, // e.g. "/uploads/some.jpg"
        caption: data.caption,
      };
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <section className="section">
      <div className="container">
        <h1 className="heading">Latest Photos</h1>
        <div className="portfolio-grid">
          {items.map((it) => (
            <figure key={it.image} className="portfolio-card">
              <img src={it.image} alt={it.title} />
              {it.caption && (
                <figcaption className="portfolio-overlay">
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
