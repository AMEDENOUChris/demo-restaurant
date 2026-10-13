import site from "../../site.config";

export const metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>{site.about.title}</h1>
        {site.about.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
