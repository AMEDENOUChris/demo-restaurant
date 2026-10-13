import site from "../../site.config";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <section className="section">
      <div className="container prose">
        <h1>Nous contacter</h1>
        <p>Le plus rapide : écrivez-nous sur WhatsApp, nous répondons dès que possible.</p>
        <p>
          <a href={whatsappHref} className="button" target="_blank" rel="noopener noreferrer">
            Écrire sur WhatsApp
          </a>
        </p>

        <h2>Coordonnées</h2>
        <ul className="plain-list">
          <li>
            Téléphone : <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </li>
          <li>
            Email : <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            Adresse : {site.address} (
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              voir sur la carte
            </a>
            )
          </li>
        </ul>

        <h2>Horaires</h2>
        <ul className="plain-list">
          {site.hours.map((row) => (
            <li key={row.days}>
              <strong>{row.days}</strong> : {row.time}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
