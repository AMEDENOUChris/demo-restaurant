import Link from "next/link";
import site from "../site.config";

export default function HomePage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__text">{site.tagline}</p>
          <div className="hero__actions">
            <a href={whatsappHref} className="button" target="_blank" rel="noopener noreferrer">
              Écrire sur WhatsApp
            </a>
            <Link href="/services" className="button button--outline">
              {site.servicesCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{site.servicesTitle}</h2>
          <ul className="list">
            {site.services.map((service) => (
              <li key={service.title} className="list__item">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container info">
          <div>
            <h2>Horaires</h2>
            <ul className="plain-list">
              {site.hours.map((row) => (
                <li key={row.days}>
                  <strong>{row.days}</strong> : {row.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Adresse</h2>
            <p>{site.address}</p>
            <p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                Voir sur la carte
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
