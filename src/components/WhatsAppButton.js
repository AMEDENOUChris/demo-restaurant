import site from "../site.config";

export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
    >
      WhatsApp
    </a>
  );
}
