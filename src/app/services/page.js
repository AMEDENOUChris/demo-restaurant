import site from "../../site.config";

export const metadata = { title: site.servicesLabel };

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>{site.servicesTitle}</h1>
        <ul className="list">
          {site.services.map((service) => (
            <li key={service.title} className="list__item">
              <h2 className="list__title">{service.title}</h2>
              <p>{service.description}</p>
              {service.price && <p className="list__price">{service.price}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
