// app/about/portfolio/page.tsx  (or wherever you read the gallery)
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type Item = { title: string; date: string; image: string; caption?: string };

function readGallery(): Item[] {
  const dir = path.join(process.cwd(), "content", "gallery");

  // If the folder doesn't exist yet, return an empty list
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        image: String(data.image ?? ""), // e.g. "/uploads/xxx.jpg"
        caption: data.caption ? String(data.caption) : undefined,
      } as Item;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export default function PortfolioPage() {
  const items = readGallery();

  return (
    <section className="section">
      <div className="container">
        <h1 className="heading">Latest Photos</h1>

        {items.length === 0 ? (
          <p className="intro">
            No gallery items yet. Add one in <code>/admin</code>.
          </p>
        ) : (
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
        )}
      </div>
    </section>
  );
}
