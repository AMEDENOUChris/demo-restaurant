import site from "../site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        </p>
      </div>
    </footer>
  );
}
